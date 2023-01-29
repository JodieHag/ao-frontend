import React, { useEffect, useState } from 'react';
import { Loader } from '@jellybrains/marvin/dist/atoms/Loader';
import { Box } from '@jellybrains/marvin/dist/atoms/Layout';
import ufoImg from '../../static/media/img/ufo.png';
import { useGetEventsByLocationQuery } from '../../api/features/event/api';
import { createMap } from './config';
import {
  externalData,
  mapperGeojsonEventsMapInfo,
  mapperGeojsonExternalMapInfo,
} from '../../core/data';

const Map = ({ setIsDetailedOpened, setDataDetail, setValue, defaultValue }) => {
  const [location, setLocation] = useState({
    lat1: '41.33617555034931',
    lat2: '41.574712399458235',
    long1: '1.4877608315772193',
    long2: '2.8104393188023096',
  });
  const { data: events } = useGetEventsByLocationQuery(location);
  const [zoom, setZoom] = useState(7);
  const [defaultData, setDefaultData] = useState(null);
  const [geoJson, setGeoJson] = useState(null);
  const [map, setMap] = useState(null);
  const [renderPointsEvents, setRenderPointsEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [center, setCenter] = useState([2.207504, 41.54359]);
  const asyncDefaultData = async () => {
    const newData = await mapperGeojsonExternalMapInfo(externalData, 'Feature');
    await setDefaultData(newData);
  };
  const asyncGeoCoderApi = async (config) => {
    const features = [];
    try {
      const request = `https://nominatim.openstreetmap.org/search?q=${config.query}&format=geojson&polygon_geojson=1&addressdetails=1`;
      const response = await fetch(request);
      const geojson = await response.json();
      for (const feature of geojson.features) {
        const center = [
          feature.bbox[0] + (feature.bbox[2] - feature.bbox[0]) / 2,
          feature.bbox[1] + (feature.bbox[3] - feature.bbox[1]) / 2,
        ];
        const point = {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: center,
          },
          place_name: feature.properties.display_name,
          properties: feature.properties,
          text: feature.properties.display_name,
          place_type: ['place'],
          center,
        };

        features.push(point);
      }
    } catch (e) {
      console.error(`Failed to forwardGeocode with error: ${e}`);
    }
    return {
      features,
    };
  };
  const asyncGeoJsonData = async () => {
    setGeoJson({
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {
            message: 'Foo',
            iconSize: [60, 60],
          },
          geometry: {
            type: 'Point',
            coordinates: [2.207504, 41.54359],
          },
        },
        ...defaultData,
        ...renderPointsEvents,
      ],
    });
  };

  useEffect(() => {
    // Init map
    setMap(createMap({ zoom, center }));
    // Init default data
    asyncDefaultData();
  }, []);

  useEffect(() => {
    // Init geoJson with defaultData
    if (defaultData) {
      asyncGeoJsonData();
    }
  }, [defaultData]);

  useEffect(() => {
    // When we have geoJsonData, we add source to map, if exist
    if (map && geoJson) {
      const geocoderApi = {
        forwardGeocode: async (config) => asyncGeoCoderApi(config),
      };
      if (maplibregl?.getRTLTextPluginStatus() === 'unavailable') {
        maplibregl.setRTLTextPlugin(
          'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.1/mapbox-gl-rtl-text.js'
        );
      }

      if (!map._controls?.length) {
        map.addControl(
          new MaplibreGeocoder(geocoderApi, {
            maplibregl,
            language: 'es',
            showResultsWhileTyping: true,
            minLength: 4,
            marker: true,
            getItemValue: (selected) => {
              if (setValue) setValue(selected);
            },
          })
        );
        map.addControl(new maplibregl.NavigationControl());
      }

      map.on('load', () => {
        map.addSource('sighting', {
          type: 'geojson',
          data: geoJson,
          cluster: true,
          clusterMaxZoom: 14, // Max zoom to cluster points on
          clusterRadius: 50, // Radius of each cluster when clustering points (defaults to 50)
        });

        map.addLayer({
          id: 'clusters',
          type: 'circle',
          source: 'sighting',
          filter: ['has', 'point_count'],
          paint: {
            // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
            // with three steps to implement three types of circles:
            //   * Blue, 20px circles when point count is less than 100
            //   * Yellow, 30px circles when point count is between 100 and 750
            //   * Pink, 40px circles when point count is greater than or equal to 750
            'circle-color': [
              'step',
              ['get', 'point_count'],
              '#58c9bc',
              100,
              '#ffd07d',
              750,
              '#fe567b',
            ],
            'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40],
          },
        });

        map.addLayer({
          id: 'cluster-count',
          type: 'symbol',
          source: 'sighting',
          filter: ['has', 'point_count'],
          layout: {
            'text-field': '{point_count_abbreviated}',
            'text-size': 12,
          },
        });
        map.loadImage(ufoImg.src, (error, image) => {
          if (error) throw error;
          map.addImage('general', image);
          map.addLayer({
            id: 'unclustered-point',
            type: 'symbol',
            source: 'sighting',
            filter: ['!', ['has', 'point_count']],
            layout: {
              'icon-image': 'general',
              'icon-size': 1,
            },
          });
        });

        // inspect a cluster on click
        map.on('click', 'clusters', (e) => {
          const features = map.queryRenderedFeatures(e.point, {
            layers: ['clusters'],
          });
          const clusterId = features[0].properties.cluster_id;
          map.getSource('sighting').getClusterExpansionZoom(clusterId, (err, zoom) => {
            if (err) return;

            map.easeTo({
              center: features[0].geometry.coordinates,
              zoom,
            });
          });
        });

        // When a click event occurs on a feature in
        // the unclustered-point layer, open a detail at
        // the location of the feature, with
        // description HTML from its properties.
        map.on('click', 'unclustered-point', (e) => {
          const coordinates = e.features[0].geometry.coordinates.slice();
          setIsDetailedOpened(true);
          setDataDetail(e.features[0].properties);
          // Ensure that if the map is zoomed out such that
          // multiple copies of the feature are visible, the
          // popup appears over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }
        });

        map.on('mouseenter', 'clusters', () => {
          map.getCanvas().style.cursor = 'pointer';
        });
        map.on('mouseleave', 'clusters', () => {
          map.getCanvas().style.cursor = '';
        });
        map.on('sourcedata', (e) => {
          if (e.isSourceLoaded) {
            setLoading(false);
          } else {
            setLoading(true);
          }
        });
        map.on('zoomend', (e, a) => {
          // Do something when the source has finished loading
          const n = map.getBounds().toArray();
          const zoom = map.getZoom();
          const center = map.getCenter();
          setZoom(zoom);
          setCenter(center.toArray());
          setLocation({
            lat1: n[0][1],
            lat2: n[1][1],
            long1: n[0][0],
            long2: n[1][0],
          });
        });
        map.on('dragend', (e, a) => {
          const n = map.getBounds().toArray();
          const zoom = map.getZoom();
          const center = map.getCenter();
          setZoom(zoom);
          setCenter(center.toArray());
          setLocation({
            lat1: n[0][1],
            lat2: n[1][1],
            long1: n[0][0],
            long2: n[1][0],
          });
        });
      });
    }
  }, [geoJson]);

  useEffect(() => {
    if (defaultValue && map) {
      new maplibregl.Marker().setLngLat(defaultValue.geometry?.coordinates).addTo(map);
    }
  }, [defaultValue]);
  /* useEffect(() => {
     if (!withoutMarks) {
       setRenderPointsEvents(events?.data?.map((element) => {
          const { attributes } = element;

          console.log(attributes)
          return {
            type: attributes?.type?.data?.attributes.value,
            properties: {
              iconSize: [40, 40],
              sightingDate: attributes?.sightingDate,
              shape: attributes?.shape?.data?.attributes.value,
              address: attributes?.address?.place_name,
              media: {
                formats: attributes?.medias?.map((el) => el.type),
                mime: attributes?.medias?.map((el) => el.attributes?.mime),
              },
            },
            geometry: {
              type: 'Point',
              coordinates: [attributes?.longitude, attributes?.latitude],
            },
          };
        }) || []);
       asyncDefaultData();
       asyncGeoJsonData();
       // Sin marcas, migrar
        const marker = new maplibregl.Marker({
          draggable: true,
        })
          .setLngLat([2.207504, 41.54359])
          .addTo(map);

        marker.on('dragend', () => {
          const lngLat = marker.getLngLat();
          setValue({
            type: 'Marker',
            geometry: {
              type: 'Point',
              coordinates: lngLat.toArray(),
            },
            center: lngLat.toArray(),
          });
        });
    }

  }, []); */

  useEffect(() => {
    if (!!events && map?.getSource('sighting')) {
      const renderEvents = mapperGeojsonEventsMapInfo(events?.data);
      setRenderPointsEvents(renderEvents);
      map.getSource('sighting').setData({
        type: 'FeatureCollection',
        features: [...geoJson.features, ...renderEvents],
      });
    }
  }, [events]);

  return (
    <>
      {loading ? <Loader /> : null}
      <Box
        id="mapAO"
        style={{
          top: 0,
          bottom: 0,
          height: 'calc(100vh - 216px)',
          width: '100%',
        }}
      />
    </>
  );
};

export default Map;

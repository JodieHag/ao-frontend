import React, { useEffect } from 'react';
import { typeImg } from './config';

const MapDynamic = ({ events, type }) => {
  useEffect(() => {
    const geojson = {
      type: 'FeatureCollection',
      features: [...events],
    };

    if (typeof maplibregl !== 'undefined') {
      // maplibregl.accessToken = "c9b52409-0f65-4ad7-ba97-3dab046c57ac"

      const map = new maplibregl.Map({
        container: 'map', // container ID
        style: 'https://api.maptiler.com/maps/voyager/style.json?key=HktdhA01J5l6PGfMMGXD', // style URL (https://cloud.maptiler.com/ + key)
        center: geojson?.features[events?.length - 1]?.geometry?.coordinates, // starting position last item updated [lng, lat]
        zoom: 7, // starting zoom,
        minZoom: 1,
        attributionControl: false,
        locale: 'es',
        pitch: 10,
      });

      if (maplibregl?.getRTLTextPluginStatus() === 'unavailable') {
        maplibregl.setRTLTextPlugin(
          'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.1/mapbox-gl-rtl-text.js'
        );
      }

      map.addControl(new maplibregl.NavigationControl());

      map.on('load', () => {
        map.addSource('sighting', {
          type: 'geojson',
          data: geojson,
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

        map.loadImage(typeImg[type]?.src, (error, image) => {
          if (error) throw error;
          map.addImage('cat', image);
          map.addLayer({
            id: 'unclustered-point',
            type: 'symbol',
            source: 'sighting',
            filter: ['!', ['has', 'point_count']],
            layout: {
              'icon-image': 'cat',
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
        // the unclustered-point layer, open a popup at
        // the location of the feature, with
        // description HTML from its properties.
        map.on('click', 'unclustered-point', (e) => {
          const coordinates = e.features[0].geometry.coordinates.slice();
          const { sightingDate } = e.features[0].properties;
          const { address } = e.features[0].properties;
          const { description } = e.features[0].properties;
          const shape = e.features[0].properties?.shape;
          const medias = e.features[0].properties?.medias;

          // Ensure that if the map is zoomed out such that
          // multiple copies of the feature are visible, the
          // popup appears over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }

          new maplibregl.Popup()
            .setLngLat(coordinates)
            .setHTML(
              `Fecha: ${sightingDate}<br>Forma: ${shape}<br>Lugar: ${address}<br>Documento gràfico: ${
                medias ? 'Sí' : 'No'
              }<br>Descripción: ${description}`
            )
            .addTo(map);
        });

        map.on('mouseenter', 'clusters', () => {
          map.getCanvas().style.cursor = 'pointer';
        });
        map.on('mouseleave', 'clusters', () => {
          map.getCanvas().style.cursor = '';
        });
        map.on('sourcedata', (e) => {});
        map.on('zoomend', (e, a) => {});
        map.on('dragend', (e, a) => {});
      });
    }
  }, [events]);
  return (
    <div id="map" style={{ top: 0, bottom: 0, height: 'calc(100vh - 128px)', width: '100%' }} />
  );
};

export default MapDynamic;

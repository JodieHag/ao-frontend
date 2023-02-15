import React from 'react';
import { Icon } from '@jellybrains/marvin/dist/atoms/Icon';
import IconPhoto from '@jellybrains/marvin/dist/atoms/Icons/IconPhoto';
import { Button } from '@jellybrains/marvin/dist/atoms/Button';
import IconSee from '@jellybrains/marvin/dist/atoms/Icons/IconSee';
import moment from 'moment';
import ufoStalkerScrapped from '../../static/data/ufoStalkerScrapped.json';
import UFORC from '../../static/data/scrubbed.json';

export const externalData = [...UFORC, ...ufoStalkerScrapped];

export const externalDataFiltered = {
  entity: externalData
    .filter((el) => el?.entityEncountered)
    .sort((a, b) => b.occurred - a.occurred),
  ufo: externalData.filter((el) => el?.sighting || el?.type === 'ufo'),
  abduction: externalData.filter((el) => el?.abduction),
  contact: externalData.filter((el) => el?.contact),
};

export const mapperGeojsonExternalMapInfo = (external, slug) =>
  external?.map((element) => {
    const attributes = element;
    return {
      type: slug,
      properties: {
        iconSize: [40, 40],
        sightingDate: moment(
          element?.occurred || element?.sighting_date,
          'DD-MM-YYYY HH:SS',
          true
        ).format(),
        medias: attributes?.media?.length ? attributes?.media : null,
        shape: attributes?.shape,
        address: `${
          attributes.locationName
            ? attributes.locationName
            : `${attributes.city && attributes.city} ${attributes.country && attributes.country}`
        } `,
        description: attributes.summary || attributes?.description,
        longDescription: attributes.detailedDescription || '',
        type:
          (attributes.abduction && 'abduction') ||
          (attributes.contact && 'contact') ||
          (attributes?.entityEncountered && 'entity') ||
          attributes?.sighting ||
          (attributes?.type === 'ufo' && 'ufo'),
      },
      geometry: {
        type: 'Point',
        coordinates: [Number(attributes?.longitude), Number(attributes?.latitude)],
      },
    };
  }) || [];

export const mapperGeojsonEventsMapInfo = (events, slug) =>
  events?.map((element) => {
    const { attributes } = element;
    return {
      type: attributes?.type?.data?.attributes?.value || slug,
      properties: {
        sightingDate: moment(attributes?.sightingDate, 'DD-MM-YYYY HH:SS', true).format(),
        shape: attributes?.shape?.data?.attributes?.value ?? 'No definido',
        address: attributes?.address?.text,
        mediasExist: !!attributes.medias?.length,
        medias: attributes.medias || '',
        description: attributes?.description || '',
        longDescription: attributes.detailedDescription || '',
      },
      geometry: {
        type: 'Point',
        coordinates: attributes?.address?.geometry?.coordinates,
      },
    };
  });

export const mapEvents = (events, slug) =>
  events?.map((element) => {
    const event = element?.attributes;
    return {
      id: element.id,
      attributes: {
        sightingDate: moment(event?.sightingDate, 'DD-MM-YYYY HH:SS', true).format(),
        date: new Date(event?.sightingDate),
        address: event?.address
          ? `${
              (event?.address?.properties?.address?.city &&
                event?.address?.properties?.address?.city) ||
              ''
            } ${
              (event?.address?.properties?.address?.country &&
                event?.address?.properties?.address?.country) ||
              ''
            }`
          : '',
        type: event?.type?.data?.attributes?.label || slug,
        description: event?.description || element?.description,
        media: !!event?.medias?.length,
      },
    };
  }) || [];

export const mapEventsExternal = (data, slug) =>
  data?.map((external, index) => ({
    id: `${external?.created_at}_${index}`,
    attributes: {
      date: moment(
        external?.occurred || external?.sighting_date,
        'DD-MM-YYYY HH:SS',
        true
      ).format(),
      address: `${external.city && external.city} ${
        external?.country && `, ${external.country}`
      }  ${external?.state && `, ${external.state}`}`,
      type: slug || '',
      description: external?.description,
      media: false,
    },
  })) || [];

export const columnsTableFormat = [
  {
    field: 'date',
    headerName: 'Fecha',
    width: 100,
    type: 'date',
    hideable: true,
    sortable: false,
    renderCell: (params) => <>{moment(params?.value, 'DD-MM-YYYY HH:SS', true).format()}</>,
  },
  {
    field: 'address',
    headerName: 'Lugar',
    width: 150,
    hideable: false,
    sortable: true,
  },
  {
    field: 'type',
    headerName: 'Tipo',
    width: 110,
    hideable: false,
    sortable: false,
  },
  {
    field: 'description',
    headerName: 'Descripción',
    width: 240,
    hideable: false,
    sortable: false,
  },
  {
    field: 'media',
    headerName: 'Fotos/Video',
    hideable: false,
    width: 120,
    renderCell: (params) =>
      params.value ? (
        <Icon sizeIcon="display24">
          <IconPhoto />
        </Icon>
      ) : (
        'No registrado'
      ),
    sortable: true,
  },
  {
    field: 'see',
    headerName: 'Detalle',
    hideable: false,
    width: 120,
    sortable: false,
    renderCell: (params) => {
      const { id, value } = params;
      if (Number(id)) {
        return (
          <Button rounded sizeButton="tab" padding={1} colorType="yellow" action={() => value(id)}>
            <Icon sizeIcon="display24">
              <IconSee />
            </Icon>
          </Button>
        );
      }
      return '';
    },
  },
];

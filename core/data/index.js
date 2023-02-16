import React from 'react';
import { Icon } from '@jellybrains/marvin/dist/atoms/Icon';
import IconPhoto from '@jellybrains/marvin/dist/atoms/Icons/IconPhoto';
import { Button } from '@jellybrains/marvin/dist/atoms/Button';
import IconSee from '@jellybrains/marvin/dist/atoms/Icons/IconSee';
import moment from 'moment';
import ufoStalkerScrapped from '../../public/static/data/ufoStalkerScrapped.json';
import UFORC from '../../public/static/data/scrubbed.json';

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
const mapperMediaCloudinary = (media) => ({
  type: media?.attributes?.mime,
  src: media?.attributes?.url,
  srcPoster: media?.attributes?.formats?.thumbnail?.url,
});
export const mapperGeojsonEventsMapInfo = (events, slug) =>
  events?.map((element) => {
    const { attributes } = element;
    return {
      type: attributes?.type?.data?.attributes?.slug || slug,
      properties: {
        type: attributes?.type?.data?.attributes?.slug || slug,
        sightingDate: moment(attributes?.sightingDate, 'DD-MM-YYYY HH:SS', true).format(),
        shape: attributes?.shape?.data?.attributes?.value ?? 'No definido',
        address: attributes?.address?.text,
        mediasExist: !!attributes.medias?.data?.length,
        medias: attributes.medias?.data?.map((el) => mapperMediaCloudinary(el)) || '',
        description: attributes?.description || '',
        longDescription: attributes.detailedDescription || '',
      },
      geometry: {
        type: 'Point',
        coordinates: attributes?.address?.geometry?.coordinates,
      },
    };
  });

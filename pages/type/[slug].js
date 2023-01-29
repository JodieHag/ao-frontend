import { useRouter } from 'next/router';
import { Loader } from '@jellybrains/marvin/dist/atoms/Loader';
import { Box, Flex, Grid } from '@jellybrains/marvin/dist/atoms/Layout';
import { useEffect, useState } from 'react';
import { Tooltip } from '@jellybrains/marvin/dist/atoms/Tooltip';
import { LinkText, Text } from '@jellybrains/marvin/dist/atoms/Typography';
import Head from 'next/head';
import MapDynamic from '../../components/maps/mapsDynamic';
import Layout from '../../components/layout/layout';
import {
  externalDataFiltered,
  mapperGeojsonEventsMapInfo,
  mapperGeojsonExternalMapInfo,
} from '../../core/data';
import { useGetAllEventsByTypeQuery } from '../../api/features/types/api';
import Detail from '../../components/event/detail';

const FilterByCategory = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { slug } = router.query;
  const { data: eventsApi, isLoading } = useGetAllEventsByTypeQuery(slug, { skip: !slug });
  const [dataDetail, setDataDetail] = useState(null);
  const [isDetailedOpened, setIsDetailedOpened] = useState(false);
  const events = eventsApi?.data[0]?.attributes?.events?.data ?? [];
  const setMappData = () => {
    const geojsonExternal = mapperGeojsonExternalMapInfo(externalDataFiltered[slug], slug);
    const geojsonEvents = mapperGeojsonEventsMapInfo(events, slug);
    return [...geojsonEvents, ...geojsonExternal];
  };

  useEffect(() => {
    setData(setMappData());
  }, [eventsApi]);

  const [activeTooltipCount, setActiveTooltipCount] = useState(false);
  const counterTotalMap = data?.length;

  return (
    <Layout>
      <Head>
        <title>
          {slug?.toUpperCase()} - Avistamientos Ovni -Informa de tu experiencia y conoce la de otros
        </title>
        <meta
          name="description"
          content="Explora o informa sobre los misterios de los avistamientos ovni en nuestro sitio web. Con información actualizada publicada por distintos medios y reportada por nuestros usuarios. Una comunidad curiosa por comprender los fenómenos aéreos anómalos. Investiga y saca tus propias conclusiones sobre la verdad detrás de los ovnis."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid gridTemplateAreas={["'.''.'"]} gridTemplateColumns={['1fr']}>
        <Box>
          <Flex justifyContent={['center', 'space-between']} padding={3} alignItems="center">
            <Tooltip
              content={
                <Text sizeText="display13">
                  La información extraida de{' '}
                  <LinkText target="_blank" href="https://nuforc.org/" noreferrer>
                    NUFORC
                  </LinkText>{' '}
                  no distingue entre tipos de avistamiento, podemos ver 0 resultados en el filtro
                  que hagan referéncia a esa lista.
                  <br />
                  De los datos recopilados a fecha de 20/07/2022 de{' '}
                  <LinkText href="https://www.ufostalker.com/" target="_blank">
                    UFOStalker
                  </LinkText>{' '}
                  podemos encontrar ({externalDataFiltered[slug]?.length}) en este filtro.
                  <br />
                  El resto ({events?.length}) son reportes realizados en esta web, con vida desde
                  2022.
                  <br />
                  Solo podemos cargar/mostrar documentación gráfica de los que se hayan subido a
                  nuestra web y servidor.
                </Text>
              }
              direction={['bottom', 'right']}
              active={activeTooltipCount}
              setActive={setActiveTooltipCount}
            >
              Total de registros: {counterTotalMap}
            </Tooltip>
          </Flex>

          <Box position="relative" width="100%">
            {!isLoading ? (
              <MapDynamic
                setIsDetailedOpened={setIsDetailedOpened}
                setDataDetail={setDataDetail}
                slug={slug}
              />
            ) : (
              <Loader />
            )}
            {isDetailedOpened && (
              <Detail
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
                setIsDetailedOpened={setIsDetailedOpened}
              />
            )}
          </Box>
        </Box>
      </Grid>
    </Layout>
  );
};
export default FilterByCategory;

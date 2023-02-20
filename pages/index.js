import Head from 'next/head';
import { useState } from 'react';
import { Box, Flex, Grid } from '@jellybrains/marvin/dist/atoms/Layout';
import { Tooltip } from '@jellybrains/marvin/dist/atoms/Tooltip';
import { LinkText, Text } from '@jellybrains/marvin/dist/atoms/Typography';
import Layout from '../components/layout/layout';
import Map from '../components/maps/map';
import { useGetAllEventsQuery } from '../api/features/event/api';
import { externalData } from '../core/data';
import UFORC from '../public/static/data/scrubbed.json';
import ufoStalkerScrapped from '../public/static/data/ufoStalkerScrapped.json';
import Detail from '../components/event/detail';

export default function Home() {
  /* console.log(`
              ██████╗ ██╗   ██╗███╗   ██╗██╗
             ██╔═══██╗██║   ██║████╗  ██║██║
             ██║   ██║██║   ██║██╔██╗ ██║██║                 ▄▀▀▀▀▀▄
             ██║   ██║╚██╗ ██╔╝██║╚██╗██║██║                ▐ ▄   ▄ ▌
             ╚██████╔╝ ╚████╔╝ ██║ ╚████║██║                ▐ ▀▀ ▀▀ ▌
              ╚═════╝   ╚═══╝  ╚═╝  ╚═══╝╚═╝                 ▀▄ ═ ▄▀
                                                               ▀▀▀

                        ▄▄▄                  ──────────────                 ▄▀█▀█▀▄
                       █▀█▀█ █▀█  █▀█ ▄███▄  ─────────────                 ▀▀▀▀▀▀▀▀▀  ▄▄▄▄▄
                       █▀█▀█ █▀██ █▀█ █▄█▄█             ▄▄                          ▄█▄█▄█▄█▄
                       █▀█▀█ █▀████▀█ █▄█▄█    ── ▄▄─── ▐▌                             ░░░
                       █▀█▀█ █▀████▀█ █▄█▄█ ▌██▐▌▐█▐▐▌█▌█▌█▌▌                          ░░░
    `);
*/
  const [activeTooltipCount, setActiveTooltipCount] = useState(false);
  const [isDetailedOpened, setIsDetailedOpened] = useState(false);
  const [dataDetail, setDataDetail] = useState(null);
  const { data: events } = useGetAllEventsQuery();
  const counterTotalMap = externalData?.length + (events?.data?.length || 0);

  return (
    <Layout>
      <Head>
        <title>Avistamientos Ovni - Informa de tu experiencia y conoce la de otros</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Explora o informa sobre los misterios de los avistamientos ovni en nuestro sitio web. Con información actualizada publicada por distintos medios y reportada por nuestros usuarios. Una comunidad curiosa por comprender los fenómenos aéreos anómalos. Investiga y saca tus propias conclusiones sobre la verdad detrás de los ovnis."
        />
        <meta
          property="og:title"
          content="Avistamientos Ovni - Informa de tu experiencia y conoce la de otros"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.avistamientosovni.es" />
        <meta
          property="og:image"
          content="https://www.avistamientosovni.es/android-chrome-192x192.png"
        />
      </Head>

      <Grid gridTemplateAreas={["'.'"]} gridTemplateColumns={['1fr']}>
        <Box>
          <Flex justifyContent={['center', 'space-between']} padding={3} alignItems="center">
            <Tooltip
              content={
                <Text sizeText="display13">
                  Esta información ha sido extraida de{' '}
                  <LinkText target="_blank" href="https://nuforc.org/" noreferrer>
                    NUFORC
                  </LinkText>{' '}
                  ({UFORC?.length}). Datos recogidos hasta año 2013.
                  <br />
                  De{' '}
                  <LinkText href="https://www.ufostalker.com/" target="_blank">
                    UFOStalker
                  </LinkText>{' '}
                  hemos recogido los últimos datos que tenían reportados sobre España (
                  {ufoStalkerScrapped?.length}) a fecha de 20/07/2022.
                  <br />
                  El resto ({events?.data?.length}) son reportes realizados en esta web, con vida
                  desde 2022.
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
            <Map setIsDetailedOpened={setIsDetailedOpened} setDataDetail={setDataDetail} />
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
}

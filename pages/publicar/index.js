import Head from 'next/head';
import { Box, Flex, Grid, GridItem } from '@jellybrains/marvin/dist/atoms/Layout';
import { Text } from '@jellybrains/marvin/dist/atoms/Typography';
import Image from 'next/image';
import { Button } from '@jellybrains/marvin/dist/atoms/Button';
import { useRouter } from 'next/router';
import Layout from '../../components/layout/layout';
import starLinkPhoto from '../../public/static/media/publicar-claim/satelitestarlink.webp';
import globoChinoPhoto from '../../public/static/media/publicar-claim/globlo-chino.jpeg';

export default function Publicar() {
  const history = useRouter();
  return (
    <Layout>
      <Head>
        <title>Antes de nada... - Avistamientos Ovni</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Explora o informa sobre los misterios de los avistamientos ovni en nuestro sitio web. Con información actualizada publicada por distintos medios y reportada por nuestros usuarios. Una comunidad curiosa por comprender los fenómenos aéreos anómalos. Investiga y saca tus propias conclusiones sobre la verdad detrás de los ovnis."
        />
        <meta
          property="og:title"
          content="Publicar - Informa de tu experiencia y conoce la de otros"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.avistamientosovni.es" />
        <meta
          property="og:image"
          content="https://www.avistamientosovni.es/android-chrome-192x192.png"
        />
      </Head>
      <Box paddingY={3} paddingX={5}>
        <Text sizeText="display24" color="green" fontWeight="bold">
          Comparte tu experiencia con el resto :)
        </Text>

        <Text sizeText="display16" marginY={2}>
          Si has llegado hasta aquí, es porque tienes algo que contar, y ¡estamos supercontentas de
          que te animes a ello!{' '}
          <Text fontWeight="bold" marginY={2} color="red" as="span">
            Pero antes, es importante informarte de que tal vez lo que has visto ya tiene una
            explicación y sí a sido identificado. Por ello te quiero dejar por aquí algo de
            información sobre objetos volantes que surcan nuestros cielos, ya controlados, además de
            tener origen humano claro...
          </Text>
          <Text fontWeight="bold" marginY={2} color="red" as="span">
            Si no es ninguna de las opciones que te proponemos, dale a ¡Ir al formulario!
          </Text>
        </Text>
      </Box>
      <Flex alignItems="center" justifyContent="center">
        <Button colorType="green" action={() => history.push('/publicar/formulario')}>
          Ir al formulario
        </Button>
      </Flex>
      <Grid
        gridTemplateColumns="1fr 1fr"
        gridTemplateRows="42px 320px"
        gridTemplateAreas={"'title title' 'description photo'"}
        paddingY={3}
        paddingX={5}
      >
        <GridItem gridArea="title">
          <Text sizeText="display24" color="purple" fontWeight="bold">
            SATELITE STARLINK
          </Text>
        </GridItem>
        <GridItem gridArea="photo">
          <Image
            src={starLinkPhoto}
            alt="satelite-starlink"
            width="100%"
            style={{ objectFit: 'cover', maxWidth: ' 100%' }}
            height={320}
            priority
          />
        </GridItem>
        <GridItem gridArea="description">
          <Text sizeText="display16" marginY={2}>
            Durante el día no se ven debido a la luz solar, pero por la noche tal vez nos
            encontremos mirando al cielo y veamos este "tren" de luces que el sr. Elon Musk lanzó a
            orbita baja para traer internet por satélite. A diferencia de otros satélites, este es
            visible.
          </Text>
        </GridItem>
      </Grid>
      <Grid
        gridTemplateColumns="1fr 1fr"
        gridTemplateRows="42px 320px"
        gridTemplateAreas={"'title title' 'photo description'"}
        paddingY={3}
        paddingX={5}
      >
        <GridItem gridArea="title">
          <Text sizeText="display24" color="purple" fontWeight="bold">
            Globo Chino ¿Meteorológico?
          </Text>
        </GridItem>
        <GridItem gridArea="photo">
          <Image
            src={globoChinoPhoto}
            alt="globo-chino"
            width="100%"
            style={{ objectFit: 'cover', maxWidth: ' 100%' }}
            height={320}
          />
        </GridItem>
        <GridItem gridArea="description">
          <Text sizeText="display16" marginY={2}>
            Últimamente se habla del globo de origen Chino que derribó EEUU. Lo que se sabe es que
            China insiste que es un globo que se perdió, que utilizan con fines meteorológicos y que
            no tiene capacidad para más que un 'piloto automático'.
          </Text>
        </GridItem>
      </Grid>

      <Flex alignItems="center" justifyContent="center">
        <Button colorType="green" action={() => history.push('/publicar/formulario')}>
          Ir al formulario
        </Button>
      </Flex>
    </Layout>
  );
}

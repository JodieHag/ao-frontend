import Head from 'next/head';
import { Box, Grid, GridItem, Container, Flex } from '@jellybrains/marvin/dist/atoms/Layout';
import { Text } from '@jellybrains/marvin/dist/atoms/Typography';
import { Field } from '@jellybrains/marvin/dist/atoms/Field';
import { Input } from '@jellybrains/marvin/dist/atoms/Input';
import { Checkbox } from '@jellybrains/marvin/dist/atoms/Checkbox';
import { Textarea } from '@jellybrains/marvin/dist/atoms/Textarea';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@jellybrains/marvin/dist/atoms/Button';
import { useIntl } from 'react-intl';
import { v4 } from 'uuid';
import { Loader } from '@jellybrains/marvin/dist/atoms/Loader';
import { useRouter } from 'next/router';
import Layout from '../../../components/layout/layout';
import { useGetAllTypesQuery } from '../../../api/features/types/api';
import { HeaderPublish } from '../../../components/form/publish/header';
import { TypeAndDatesPublish } from '../../../components/form/publish/typeAndDates';
import { LocationPublish } from '../../../components/form/publish/location';
import { MediasPublish } from '../../../components/form/publish/medias';
import { useAddEventMutation } from '../../../api/features/event/api';
import { validateField, validator } from '../../../core/validator';

export default function Formulario() {
  const { data: types } = useGetAllTypesQuery();
  const [update, { isLoading, isSuccess, data: successData }] = useAddEventMutation();
  const [placeSearchResult, setPlaceSearchResult] = useState(null);
  const [isNotBot, setIsNotBot] = useState(false);
  const [placeSearchValue, setPlaceSearchValue] = useState({});
  const [dataForm, setDataForm] = useState({
    slug: v4(),
    state: {
      id: 1,
      value: 'Pendiente',
      slug: 'pending',
    },
    type: {
      id: 1,
      value: 'ovnis',
      slug: 'ufo',
      label: 'UFO',
    },
  });
  const [errors, setErrors] = useState({});
  const formRef = useRef();
  const intl = useIntl();
  const history = useRouter();
  const validate = (formValues) =>
    JSON.parse(
      JSON.stringify({
        sightingDate: validateField(formValues.sightingDate, null, intl),
        address: validateField(formValues.address, null, intl),
        longitude: validateField(formValues.longitude, null, intl),
        latitude: validateField(formValues.latitude, null, intl),
        description: validateField(formValues.description, null, intl),
        acceptTerms: validateField(formValues.acceptTerms, null, intl),
      })
    );
  const handleSubmit = async () => {
    const checkErrors = await validate(dataForm);
    setErrors(checkErrors);

    if (!validator.encodeObjectToUri(checkErrors)) {
      update({ data: dataForm });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      history.push('/');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsNotBot(true);
    }
  }, []);
  if (!isNotBot) {
    return <Loader show />;
  }
  return (
    <Layout>
      <Head>
        <title>Publicar - Avistamientos Ovni</title>
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
      {isLoading && <Loader show />}
      <Container>
        <HeaderPublish />
        <Grid
          as="form"
          onSubmit={() => handleSubmit()}
          ref={formRef}
          gridTemplateColumns="1fr 1fr"
          gridTemplateRows="1fr 168px 1fr 200px 1fr"
          gridTemplateAreas={
            "'datas location' 'resume description' 'medias medias' 'checks checks' 'submit submit'"
          }
          gridGap={3}
          paddingY={3}
          paddingX={5}
        >
          <GridItem gridArea="datas">
            <TypeAndDatesPublish types={types} setDataForm={setDataForm} errors={errors} />
          </GridItem>
          <GridItem gridArea="location">
            <LocationPublish
              placeSearchResult={placeSearchResult}
              setPlaceSearchValue={setPlaceSearchValue}
              placeSearchValue={placeSearchValue}
              setPlaceSearchResult={setPlaceSearchResult}
              setDataForm={setDataForm}
              errors={errors}
            />
          </GridItem>
          <GridItem gridArea="resume">
            <Field label="Resumen" sizeText="display16" required>
              <Textarea
                name="description"
                maxCounter={150}
                counter
                sizeTextarea="small"
                required
                hasError={!!errors?.description}
                typeAction={(name, value) => setDataForm({ ...dataForm, description: value })}
              />
            </Field>
          </GridItem>
          <GridItem gridArea="description">
            <Field label="Descripción" sizeText="display16">
              <Textarea
                name="detailDescription"
                maxCounter={999}
                counter
                sizeTextarea="small"
                typeAction={(name, value) => setDataForm({ ...dataForm, detailDescription: value })}
              />
            </Field>
          </GridItem>
          <GridItem gridArea="medias">
            <MediasPublish setDataForm={setDataForm} />
          </GridItem>
          <GridItem gridArea="checks">
            <Field label="" color="white">
              <Checkbox
                name="isWitness"
                action={(name, value) => setDataForm({ ...dataForm, [name]: value })}
                label="Soy la persona que lo ha visto"
                defaultChecked
              />
              <Checkbox
                required
                hasError={!!errors?.acceptTerms}
                name="acceptTerms"
                action={(name, value) => setDataForm({ ...dataForm, [name]: value })}
                label="Acepto que esta información sea publicada manteniendo mi anonimato"
              />
            </Field>
            <Field label="Correo electrónico" sizeText="display16">
              <Input
                name="userMail"
                type="email"
                sizeInput="small"
                onChange={(name, value) => setDataForm({ ...dataForm, [name]: value })}
              />
              <Text sizeText="display12">
                Si nos compartes tu correo, podremos buscar el avistamiento en un futuro si
                quisieras modificarlo/eliminarlo.
              </Text>
            </Field>
          </GridItem>
          <GridItem gridArea="submit">
            <Flex alignItems="center" flexDirection="column">
              <Text color="green">
                Tu publicación puede tardar unos días en verse reflejada, ya que debe pasar un
                proceso de revisión para que no pueda publicarse cualquier burrada.
              </Text>
              <Button colorType="green" action={handleSubmit} type="submit" marginTop={3}>
                Enviar
              </Button>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Layout>
  );
}

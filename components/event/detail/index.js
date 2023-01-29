import { useState } from 'react';
import { Box, Flex, Grid, GridItem } from '@jellybrains/marvin/dist/atoms/Layout';
import { Text } from '@jellybrains/marvin/dist/atoms/Typography';
import { Image } from '@jellybrains/marvin/dist/atoms/Image';
import { Icon } from '@jellybrains/marvin/dist/atoms/Icon';
import IconCloseBig from '@jellybrains/marvin/dist/atoms/Icons/IconCloseBig';
import IconPlay from '@jellybrains/marvin/dist/atoms/Icons/IconPlay';
import { typeImg } from '../../maps/config';
import LightBoxDetail from '../light-box';

const Detail = ({ dataDetail, setDataDetail, setIsDetailedOpened }) => {
  const images =
    dataDetail?.medias && JSON?.parse(dataDetail?.medias)?.filter((el) => el.type === 'image');
  const videos =
    dataDetail?.medias &&
    JSON?.parse(dataDetail?.medias)?.filter((el) => el.type.includes('video'));
  const [isOpened, setIsOpened] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  return (
    <Box
      borderRadius={5}
      shadow="topInner"
      padding={4}
      background="white"
      top="calc(100vh - 66%)"
      position="absolute"
      width="100%"
      height="auto"
      overflow="none"
    >
      <Grid
        marginBottom={3}
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        position="relative"
        gridTemplateColumns="1fr 1fr 24px"
        gridGap={2}
      >
        <Box marginRight={7} alignSelf="start" position="sticky" width="100%">
          <Text fontWeight="bold" sizeText="display24" marginBottom={1} color="red">
            {dataDetail?.address}
          </Text>
          <Text sizeText="display13">{dataDetail?.sightingDate}</Text>
        </Box>
        <Box>
          <Text fontWeight="bold">
            Forma: <Text as="span">{dataDetail.shape || 'Desconocida'}</Text>
          </Text>
          <Flex alignItems="center">
            <Text fontWeight="bold" marginRight={1}>
              Tipo:
            </Text>
            {(dataDetail.type && (
              <Image
                width={44}
                height={44}
                src={typeImg[dataDetail.type]?.src}
                alt={dataDetail.type}
              />
            )) || <Text as="span">Desconocido</Text>}
          </Flex>
        </Box>
        <Icon
          alignSelf="start"
          sizeIcon="display24"
          onClick={() => {
            setDataDetail(null);
            setIsDetailedOpened(false);
          }}
        >
          <IconCloseBig />
        </Icon>
      </Grid>
      <Grid overflow="auto" gridTemplateColumns={['1fr', '1fr 1fr']} gridGap={2}>
        <GridItem>
          <Box alignItems="center">
            <Text fontWeight="bold">Resumen:</Text>
            <Text>{dataDetail.description}</Text>
          </Box>
          {dataDetail.longDescription && (
            <Box alignItems="center" marginY={2}>
              <Text fontWeight="bold">Descripción larga:</Text>
              <Text>{dataDetail.longDescription}</Text>
            </Box>
          )}
        </GridItem>
        <GridItem>
          {!!dataDetail?.medias && (
            <>
              <Text fontWeight="bold">Documentos gráficos:</Text>
              <Flex flexWrap="wrap">
                {images &&
                  images.map((file, i) => (
                    <Box
                      key={`file-${file.srcPoster}-${i}`}
                      position="relative"
                      backgroundColor="black36"
                      borderRadius={2}
                      onClick={() => {
                        setSelectedMedia(i);
                        setIsOpened(true);
                      }}
                      margin={1}
                    >
                      <Image
                        key={file.src}
                        width={120}
                        height={120}
                        src={file.src}
                        alt={file.src}
                        borderRadius={2}
                      />
                    </Box>
                  ))}
                {videos &&
                  videos.map((file, i) => (
                    <Box
                      key={`file-${file.srcPoster}-${i}`}
                      position="relative"
                      backgroundColor="black36"
                      borderRadius={2}
                      onClick={() => {
                        setSelectedMedia(i);
                        setIsOpened(true);
                      }}
                      margin={1}
                    >
                      <Image
                        key={file.srcPoster}
                        width={120}
                        height={120}
                        src={file.srcPoster}
                        alt={file.srcPoster}
                        borderRadius={2}
                      />
                      <Flex
                        position="absolute"
                        width="100%"
                        height="100%"
                        top={0}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Icon sizeIcon="display36" color="white">
                          <IconPlay />
                        </Icon>
                      </Flex>
                    </Box>
                  ))}
              </Flex>
            </>
          )}
        </GridItem>
      </Grid>

      <LightBoxDetail
        isOpened={isOpened}
        selectedMedia={selectedMedia}
        setSelectedMedia={setSelectedMedia}
        medias={dataDetail?.medias && JSON?.parse(dataDetail?.medias)}
        setIsOpened={setIsOpened}
      />
    </Box>
  );
};

export default Detail;

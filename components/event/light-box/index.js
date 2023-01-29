import { useEffect } from 'react';
import { Modal } from '@jellybrains/marvin/dist/molecules/Modal';
import { Box, Flex } from '@jellybrains/marvin/dist/atoms/Layout';
import { Icon } from '@jellybrains/marvin/dist/atoms/Icon';
import IconArrowLeft from '@jellybrains/marvin/dist/atoms/Icons/IconArrowLeft';
import { VideoPlayer } from '@jellybrains/marvin/dist/molecules/VideoPlayer';
import { Text } from '@jellybrains/marvin/dist/atoms/Typography';
import { Image } from '@jellybrains/marvin/dist/atoms/Image';
import IconArrowRight from '@jellybrains/marvin/dist/atoms/Icons/IconArrowRight';

const LightBoxDetail = ({ medias, isOpened, setIsOpened, selectedMedia, setSelectedMedia }) => {
  const goToRight = () => {
    if (selectedMedia < medias?.length - 1) {
      setSelectedMedia((prev) => prev + 1);
    }
  };
  const goToLeft = () => {
    if (selectedMedia > 0) {
      setSelectedMedia((prev) => prev - 1);
    }
  };
  useEffect(() => {
    const onSlideWithKeys = (e) => {
      if (e.key === 'ArrowRight') {
        goToRight();
      } else if (e.key === 'ArrowLeft') {
        goToLeft();
      }
    };
    document?.addEventListener('keyup', onSlideWithKeys);
    return () => document?.removeEventListener('keyup', onSlideWithKeys);
  }, [selectedMedia]);

  return (
    <Modal
      isOpen={isOpened}
      onModalClose={() => setIsOpened(false)}
      id="about-event"
      maxWidth="100%"
      maxHeight="100%"
      width="100%"
      height="100%"
      backgroundColor="transparent"
      closeWithButton
      fullScreen
      display="block"
    >
      {isOpened && (
        <Flex flexDirection="column" alignItems="center" width="100%" height="100%" padding={3}>
          <Flex alignItems="center" width="100%" height="100%" justifyContent="space-between">
            {(selectedMedia > 0 && (
              <Icon
                color="purple"
                sizeIcon="display45"
                onClick={() => goToLeft()}
                style={{ cursor: 'pointer' }}
              >
                <IconArrowLeft />
              </Icon>
            )) || <Box width={45} height={45} />}

            <Flex
              alignItems="center"
              maxWidth={950}
              width="100%"
              minWidth={['100%', 550, 750, 950]}
              height={['100%']}
              justifyContent="center"
            >
              {medias[selectedMedia]?.type === 'image' && (
                <Image
                  src={medias[selectedMedia].src}
                  maxWidth={950}
                  width="100%"
                  minWidth={[350, 550, 750, 950]}
                  height={[516, 516, 716]}
                />
              )}
              {medias[selectedMedia]?.type?.includes('video') && (
                <VideoPlayer
                  src={medias[selectedMedia]?.src}
                  id={medias[selectedMedia]?.srcPoster}
                  poster={medias[selectedMedia]?.srcPoster}
                  maxWidth={[290, 500, 950]}
                  videoHeight={['100%']}
                  videoWidth={['100%']}
                  maxHeight={[500, 575, 650]}
                  colorType="purple"
                />
              )}
            </Flex>
            {(selectedMedia < medias?.length - 1 && (
              <Icon
                color="purple"
                sizeIcon="display45"
                onClick={() => goToRight()}
                style={{ cursor: 'pointer' }}
              >
                <IconArrowRight />
              </Icon>
            )) || <Box width={45} height={45} />}
          </Flex>
        </Flex>
      )}
    </Modal>
  );
};

export default LightBoxDetail;

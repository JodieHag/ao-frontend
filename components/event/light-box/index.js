import { useEffect } from 'react';
import { Modal } from '@jellybrains/marvin/dist/molecules/Modal';
import { Box, Flex } from '@jellybrains/marvin/dist/atoms/Layout';
import { Icon } from '@jellybrains/marvin/dist/atoms/Icon';
import IconChevronLeft from '@jellybrains/marvin/dist/atoms/Icons/IconChevronLeft';
import { VideoPlayer } from '@jellybrains/marvin/dist/molecules/VideoPlayer';
import { Text } from '@jellybrains/marvin/dist/atoms/Typography';
import { Image } from '@jellybrains/marvin/dist/atoms/Image';
import IconChevronRight from '@jellybrains/marvin/dist/atoms/Icons/IconChevronRight';

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
        <Flex
          flexDirection="column"
          alignItems="center"
          width="100%"
          height="100%"
          padding={[1, 2, 3]}
        >
          <Flex alignItems="center" width="100%" height="100%" justifyContent="space-between">
            {(selectedMedia > 0 && (
              <Icon
                color="blue"
                sizeIcon={['display36', 'display36', 'display48']}
                onClick={() => goToLeft()}
                style={{ cursor: 'pointer' }}
              >
                <IconChevronLeft />
              </Icon>
            )) || <Box width={[36, 36, 48]} height={[36, 36, 48]} />}

            <Flex
              alignItems="center"
              maxWidth={['calc(100% - 72px)', 'calc(100% - 72px)', 'calc(100% - 96px)', 950]}
              width="100%"
              height={['100%']}
              justifyContent="center"
            >
              {medias[selectedMedia]?.type?.includes('image') && (
                <Image
                  src={medias[selectedMedia].src}
                  maxWidth={[270, 550, 750, 950]}
                  width="100%"
                  minWidth={[270, 550, 750, 950]}
                  height={[516, 516, 716]}
                />
              )}
              {medias[selectedMedia]?.type?.includes('video') && (
                <VideoPlayer
                  src={medias[selectedMedia]?.src}
                  id={medias[selectedMedia]?.srcPoster}
                  poster={medias[selectedMedia]?.srcPoster}
                  maxWidth={[270, 550, 750, 950]}
                  videoHeight={['100%']}
                  videoWidth={['100%']}
                  maxHeight={[500, 575, 650]}
                  colorType="purple"
                />
              )}
            </Flex>
            {(selectedMedia < medias?.length - 1 && (
              <Icon
                color="blue"
                sizeIcon={['display36', 'display36', 'display48']}
                onClick={() => goToRight()}
                style={{ cursor: 'pointer' }}
              >
                <IconChevronRight />
              </Icon>
            )) || <Box width={[36, 36, 48]} height={[36, 36, 48]} />}
          </Flex>
        </Flex>
      )}
    </Modal>
  );
};

export default LightBoxDetail;

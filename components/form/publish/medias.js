import UploaderWithMinis from '@jellybrains/marvin/dist/atoms/Uploader/UploaderWithMinis';
import { Field } from '@jellybrains/marvin/dist/atoms/Field';
import { useState } from 'react';

export const MediasPublish = ({ setDataForm }) => {
  const onImagesLoader = (receivedImages, setImages, prevImages) => {
    const imgErrors = receivedImages?.filter((info) =>
      Object.prototype.hasOwnProperty.call(info, 'error')
    );

    if (!imgErrors.length) {
      if (prevImages) {
        setImages([...prevImages, ...receivedImages]);
        setDataForm((prev) => ({ ...prev, mediastoupdate: [...prevImages, ...receivedImages] }));
      } else {
        setImages(receivedImages);
        setDataForm((prev) => ({ ...prev, mediastoupdate: receivedImages }));
      }
    }
  };
  const [images, setImages] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [imgWithErrors, setErrors] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [deleteFiles, setDeleteFiles] = useState([]);

  const onImagesLoad = (receivedImages) => {
    onImagesLoader(receivedImages, setImages, images);
  };

  const maxNumFiles = 10;

  const errors = [
    {
      type: 'size',
      message: (fileNames) =>
        `Algunas imágenes superan el límite máximo permitido por archivo (hasta 10mb por imagen): ${fileNames}`,
    },
    {
      type: 'wrongType',
      message: (fileNames) =>
        `Algunas imágenes tienen un tipo de archivo no permitido: ${fileNames}`,
    },
    {
      type: 'numFiles',
      message: (numFiles) => `Has arrastrado más de ${numFiles} archivos en un único intento.`,
    },
  ];

  const onDeleteFile = (file) => {
    if (file?.fileId) {
      const updateFiles = images.filter((element) => element.fileId !== file.fileId);
      setImages(updateFiles);
      setDataForm((prev) => ({ ...prev, mediastoupdate: updateFiles }));
      setDeleteFiles((prev) => [...prev, file]);
    } else {
      const updateFiles = images.filter((element) => element.name !== file.name);
      setImages(updateFiles);
      setDataForm((prev) => ({ ...prev, mediastoupdate: updateFiles }));
      setDeleteFiles((prev) => [...prev, file]);
    }
  };

  return (
    <Field label="Tipo de avistamiento" sizeText="display16">
      <UploaderWithMinis
        customColor="green"
        descriptionMessage="Pulsa para subir fotos o videos"
        name="medimediastoupdateas"
        files={images}
        onDeleteFile={(file) => {
          onDeleteFile(file);
        }}
        onImagesLoad={onImagesLoad}
        maxNumFiles={maxNumFiles}
        errors={errors}
      />
    </Field>
  );
};

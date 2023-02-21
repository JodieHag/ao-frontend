import { Field } from '@jellybrains/marvin/dist/atoms/Field';
import { Radiobox } from '@jellybrains/marvin/dist/atoms/Radiobox';
import { Input } from '@jellybrains/marvin/dist/atoms/Input';
import { Text } from '@jellybrains/marvin/dist/atoms/Typography';

export const TypeAndDatesPublish = ({ types, setDataForm, errors }) => (
  <>
    <Field label="Tipo de avistamiento" sizeText="display16">
      <Radiobox
        name="type"
        id="type"
        items={types?.data?.map((type) => ({
          id: type?.attributes?.slug,
          name: 'type',
          defaultChecked: type?.attributes?.slug === 'ufo',
          hasError: false,
          label: type?.attributes?.value,
          value: type?.attributes?.slug,
        }))}
        onChange={(type, name, value) => {
          const selectedType = value.filter((element) => element?.defaultChecked)[0].value;
          setDataForm((prev) => ({
            ...prev,
            type: types?.data.filter((element) => element?.attributes?.slug === selectedType)[0],
          }));
        }}
      />
    </Field>
    <Field
      label="Fecha del avistamiento"
      sizeText="display16"
      required
      hasError={!!errors.sightingDate}
    >
      <Input
        required
        name="sightingDate"
        type="datetime-local"
        max={new Date().toISOString()}
        sizeInput="small"
        hasError={!!errors.sightingDate}
        onChange={(name, value) => setDataForm((prev) => ({ ...prev, [name]: value }))}
      />
    </Field>
    <Field label="Duración del avistamiento" sizeText="display16">
      <Input
        name="durationTime"
        type="time"
        defaultValue="00:00:00"
        sizeInput="small"
        onChange={(name, value) => setDataForm((prev) => ({ ...prev, [name]: `${value}:00` }))}
      />
      <Text sizeText="display12">El formato es de horas:minutos </Text>
    </Field>
  </>
);

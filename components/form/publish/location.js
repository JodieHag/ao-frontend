import { Field } from '@jellybrains/marvin/dist/atoms/Field';
import { Input } from '@jellybrains/marvin/dist/atoms/Input';
import { Box } from '@jellybrains/marvin/dist/atoms/Layout';
import { Text } from '@jellybrains/marvin/dist/atoms/Typography';

export const LocationPublish = ({
  placeSearchResult,
  setPlaceSearchValue,
  placeSearchValue,
  setPlaceSearchResult,
  setDataForm,
  errors,
}) => {
  const getNominatimPlace = (query) => {
    const queryParams = new URLSearchParams({ q: query }).toString();
    fetch(
      `https://nominatim.openstreetmap.org/search?${queryParams}&format=geojson&addressdetails=1&limit=7`
    )
      .then((response) => response.json())
      .then((data) => setPlaceSearchResult(data?.features));
  };
  return (
    <Box>
      <Field label="Lugar" sizeText="display16" marginBottom={2} required>
        <Input
          required
          name="address"
          sizeInput="small"
          value={placeSearchValue?.properties?.display_name}
          onChange={(name, query) => {
            if (query.length > 4) getNominatimPlace(query);
            setPlaceSearchValue(null);
          }}
          hasError={!!errors.address}
        />
        {placeSearchResult && (
          <Box
            borderColor="black36"
            borderStyle="solid"
            borderWidth={2}
            borderBottomLeftRadius={3}
            borderBottomRightRadius={3}
            borderTopStyle="none"
            as="ul"
            position="absolute"
            backgroundColor="white"
            maxHeight={200}
            overflow="auto"
            width="100%"
            zIndex={5}
          >
            {placeSearchResult?.map((option) => (
              <Text
                key={option.properties?.place_id}
                as="li"
                paddingX={2}
                paddingY={1}
                sizeText="display14"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setPlaceSearchResult(null);
                  setPlaceSearchValue(option);
                  setDataForm((prev) => ({
                    ...prev,
                    address: option,
                    longitude: option?.geometry?.coordinates[0],
                    latitude: option?.geometry?.coordinates[1],
                  }));
                }}
              >
                {option.properties?.display_name}
              </Text>
            ))}
          </Box>
        )}
        <Text sizeText="display12">
          Para poder marcar tu avistamiento en el mapa, necesitamos saber su ubicación.
        </Text>
      </Field>
      <Field label="Latitud" sizeText="display16" marginTop={7} required>
        <Input
          name="latitude"
          type="number"
          readOnly
          sizeInput="small"
          value={placeSearchValue?.geometry?.coordinates[1]}
          onChange={() => {}}
        />
      </Field>
      <Field label="Logintud" sizeText="display16" required>
        <Input
          name="longitude"
          type="number"
          readOnly
          sizeInput="small"
          value={placeSearchValue?.geometry?.coordinates[0]}
          onChange={() => {}}
        />
      </Field>
    </Box>
  );
};

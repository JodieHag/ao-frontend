import { Text } from '@jellybrains/marvin/dist/atoms/Typography';
import { Box } from '@jellybrains/marvin/dist/atoms/Layout';

export const HeaderPublish = () => (
  <>
    <Box paddingY={2} paddingX={5}>
      <Text sizeText="display24" color="green" fontWeight="bold">
        Formulario
      </Text>
      <Text sizeText="display16" marginY={2}>
        Si has llegado hasta aquí, es porque tienes algo que contar, y ¡estamos supercontentas de
        que te animes a ello!
      </Text>
    </Box>
    <Box paddingX={5}>
      <Text fontWeight="bold" marginY={2} color="red">
        Como comprenderás, cualquier publicación que implique faltas de respeto, bromas o contenido
        desagradable puede ser rastreado y denunciado, a parte de descartado, piensa dos veces si
        quieres que tus metadatos queden a merced de que te salga el tiro por la culata.
      </Text>
    </Box>
  </>
);

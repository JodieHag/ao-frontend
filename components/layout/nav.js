import React from 'react';
import Link from 'next/link';
import { Box, Flex } from '@jellybrains/marvin/dist/atoms/Layout';
import Image from 'next/image';
import { Button } from '@jellybrains/marvin/dist/atoms/Button';
import { Text } from '@jellybrains/marvin/dist/atoms/Typography';
import { useRouter } from 'next/router';
import { Icon } from '@jellybrains/marvin/dist/atoms/Icon';
import { IconEdit } from '@jellybrains/marvin/dist/atoms/Icons';
import logo from '../../static/media/logos/logo_blue.gif';
import DeviceDetector from '../../core/device';

const Nav = ({ items, title }) => {
  const router = useRouter();
  const { slug } = router.query;
  const { pathname } = router;
  const isMobile = DeviceDetector();
  return (
    <Flex as="ul" alignItems="center" justifyContent="space-between">
      <Box as="li" padding={2} title="Avistamientos Ovni">
        <Link href="/">
          <Image
            src={logo.src}
            alt="Avistamientos Ovni"
            id="logo"
            width={isMobile ? 55 : 70}
            height={isMobile ? 55 : 70}
          />
        </Link>
        <a
          style={{ display: 'none' }}
          href="https://www.flaticon.com/free-icons/ufo"
          title="ufo icons"
        >
          Ufo icons created by Victoruler - Flaticon
        </a>
      </Box>
      <Flex flexDirection="column" padding={[0, 3]}>
        <Text fontFamily="Staatliches" sizeText={['display24', 'display48']} textAlign="center">
          {title}
        </Text>
        {/* {pathname !== '/report' && (
          <Flex as="ul" alignItems="center" justifyContent="center" flexWrap="wrap">
            {items?.map((category) => (
              <li key={category.id}>
                <Link href={`/type/${category.attributes.slug}`}>
                  <Text
                    style={{ cursor: 'pointer' }}
                    fontFamily="Staatliches"
                    sizeText={['display16', 'display24']}
                    marginX={[1, 4]}
                    fontWeight="bold"
                    color={slug === category.attributes.slug ? 'yellow' : 'black'}
                  >
                    {category.attributes.value.toUpperCase()}
                  </Text>
                </Link>
              </li>
            ))}
            <li>
              <Link href="/">
                <Text
                  style={{ cursor: 'pointer' }}
                  marginX={[1, 4]}
                  fontFamily="Staatliches"
                  sizeText={['display16', 'display24']}
                  fontWeight="bold"
                  color={!slug ? 'yellow' : 'black'}
                >
                  TODO
                </Text>
              </Link>
            </li>
          </Flex>
        )} */}
      </Flex>
      {pathname !== '/report' && (
        <Box as="li" padding={2}>
          <Button
            colorType="purple"
            onClick={() => {
              window.location =
                'mailto:hello@avistamientosovni.es?subject=Informar&body=Fecha-Lugar-Typo(ufo/abducción/contacto/entidad)-Duración-Descripción-Forma-Fotos/Videos';
            }}
            rounded={isMobile}
            width={isMobile ? '35px' : 'inherit'}
            height={isMobile ? '35px' : 'inherit'}
          >
            {isMobile ? (
              <Icon>
                <IconEdit />
              </Icon>
            ) : (
              <Text style={{ cursor: 'pointer' }}>Informar avistamiento</Text>
            )}
          </Button>
        </Box>
      )}
    </Flex>
  );
};

export default Nav;

import { Flex, Box } from '@jellybrains/marvin/dist/atoms/Layout';
import { Text } from '@jellybrains/marvin/dist/atoms/Typography';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Cookies } from '@jellybrains/marvin/dist/molecules/Banners/Cookies';
import { Overlay } from '@jellybrains/marvin/dist/atoms/Overlay';
import { useRouter } from 'next/router';
import Nav from './nav';
import { useGetAllTypesQuery } from '../../api/features/types/api';
import { getCookie, setCookie } from '../../core/cookies';
import { GoogleInit } from '../../lib/google';

const Layout = ({ children }) => {
  const [cookiesModalIsOpened, setCookiesModalIsOpened] = useState(false);
  const history = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!getCookie(process.env.NEXT_PUBLIC_COOKIE)) {
        setCookiesModalIsOpened(true);
      } else if (process.env.NODE_ENV === 'production') GoogleInit();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  const { data: types } = useGetAllTypesQuery();
  return (
    <>
      <Box as="header" position="sticky" top={0} zIndex={9} backgroundColor="ghosted.white.mid">
        <Nav items={types?.data} title="Avistamientos Ovni" />
      </Box>
      <main>
        {cookiesModalIsOpened && (
          <Flex width={['100%', '100%', '50%']} alignItems="center" position="relative" zIndex={90}>
            <Overlay />
            <Cookies
              bottom={[0, 0, '50%']}
              left={[0, 0, '25%']}
              width={['100%', '100%', '50%']}
              background="white"
              height={['auto', 'auto', 190]}
              borderRadius={3}
              textContent={
                <>
                  <Text>
                    Necesitamos que antes de adentrarte en los datos recopilados sobre los
                    avistamientos ovni, nos des permiso, o no, para saber que nos visitas.
                  </Text>
                  <Text>
                    Como solo pondremos la cookie de sesión y visitas, opcionales, no hay nada que
                    escoger a nivel de preferencias. Puedes consultar la política en:{' '}
                    <Link href="/politica-cookies">Política de cookies</Link>
                  </Text>
                </>
              }
              buttons={[
                {
                  label: 'Aceptar',
                  action: () => {
                    setCookie(process.env.NEXT_PUBLIC_COOKIE, true, 365);
                    setCookiesModalIsOpened(false);
                    history.go(0);
                  },
                  colorType: 'green',
                },
                {
                  label: 'Denegar',
                  action: () => {
                    setCookie(process.env.NEXT_PUBLIC_COOKIE, false);
                    setCookiesModalIsOpened(false);
                  },
                  colorType: '',
                },
              ]}
            />
          </Flex>
        )}
        {children}
      </main>
      <Box as="footer" alignItems="center" justifyContent="center">
        <Flex padding={1} alignItems="center" justifyContent="center">
          <Text color="purple" as="span">
            <Link href="/politica-cookies">
              <Text color="purple" as="span">
                Política de cookies
              </Text>
            </Link>{' '}
            /{' '}
            <Link href="/politica-privacidad">
              <Text color="purple" as="span">
                Política de privacidad
              </Text>
            </Link>{' '}
            /{' '}
            <Link href="/aviso-legal">
              <Text color="purple" as="span">
                Aviso legal
              </Text>
            </Link>
            <Text color="purple" as="span">
              {' '}
              - {new Date().getFullYear()}
            </Text>
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Layout;

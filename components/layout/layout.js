import { Flex, Box } from '@jellybrains/marvin/dist/atoms/Layout';
import { Text } from '@jellybrains/marvin/dist/atoms/Typography';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Modal } from '@jellybrains/marvin/dist/molecules/Modal';
import { Button } from '@jellybrains/marvin/dist/atoms/Button';
import Nav from './nav';
import { useGetAllTypesQuery } from '../../api/features/types/api';
import { getCookie, setCookie } from '../../core/cookies';
import { GoogleInit } from '../../lib/google';

const Layout = ({ children }) => {
  /* console.log(`
              ██████╗ ██╗   ██╗███╗   ██╗██╗
             ██╔═══██╗██║   ██║████╗  ██║██║
             ██║   ██║██║   ██║██╔██╗ ██║██║                 ▄▀▀▀▀▀▄
             ██║   ██║╚██╗ ██╔╝██║╚██╗██║██║                ▐ ▄   ▄ ▌
             ╚██████╔╝ ╚████╔╝ ██║ ╚████║██║                ▐ ▀▀ ▀▀ ▌
              ╚═════╝   ╚═══╝  ╚═╝  ╚═══╝╚═╝                 ▀▄ ═ ▄▀
                                                               ▀▀▀

                        ▄▄▄                  ──────────────                 ▄▀█▀█▀▄
                       █▀█▀█ █▀█  █▀█ ▄███▄  ─────────────                 ▀▀▀▀▀▀▀▀▀  ▄▄▄▄▄
                       █▀█▀█ █▀██ █▀█ █▄█▄█             ▄▄                          ▄█▄█▄█▄█▄
                       █▀█▀█ █▀████▀█ █▄█▄█    ── ▄▄─── ▐▌                             ░░░
                       █▀█▀█ █▀████▀█ █▄█▄█ ▌██▐▌▐█▐▐▌█▌█▌█▌▌                          ░░░
    `); */

  const [cookiesModalisOpened, setCookiesModalIsOpened] = useState(false);
  useEffect(() => {
    if (!getCookie(process.env.NEXT_PUBLIC_COOKIE)) {
      setCookiesModalIsOpened(true);
    } else if (process.env.NODE_ENV === 'production') GoogleInit();
  }, []);

  const { data: types } = useGetAllTypesQuery();
  return (
    <>
      <Box as="header" position="sticky" top={0} zIndex={9} backgroundColor="ghosted.white.mid">
        <Nav items={types?.data} title="Avistamientos Ovni" />
      </Box>
      <main>
        {cookiesModalisOpened && (
          <Modal isOpen title="Ya vuelven las cookies">
            <Modal.Content>
              <Text>
                Necesitamos que antes de adentrarte en los datos recopilados sobre los avistamientos
                ovni, nos des permiso, o no, para saber que nos visitas.
              </Text>
              <Text>
                Como solo pondremos la cookie de sesión y visitas, opcionales, no hay nada que
                escoger a nivel de preferencias. Puedes consultar la política en:{' '}
                <Link href="/politica-cookies">Política de cookies</Link>
              </Text>
            </Modal.Content>
            <Modal.Actions>
              <Flex alignItems="center" justifyContent="center">
                <Button
                  marginRight={2}
                  sizeButton="small"
                  colorType="green"
                  onClick={() => {
                    setCookie(process.env.NEXT_PUBLIC_COOKIE, true, 365);
                    setCookiesModalIsOpened(false);
                    history.go(0);
                  }}
                >
                  Si
                </Button>
                <Button
                  sizeButton="small"
                  onClick={() => {
                    setCookie(process.env.NEXT_PUBLIC_COOKIE, false);
                    setCookiesModalIsOpened(false);
                  }}
                >
                  No
                </Button>
              </Flex>
            </Modal.Actions>
          </Modal>
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

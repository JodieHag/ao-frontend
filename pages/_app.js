import '../styles/globals.css';
import { useEffect, useState, useMemo, Fragment } from 'react';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@jellybrains/marvin/dist/GlobalStyles';
import { theme } from '@jellybrains/marvin/dist/theme';
import { Provider } from 'react-redux';
import { store } from '../api/store';
import English from '../static/compiled-locales/en.json';

export const MyApp = ({ Component, pageProps }) => {
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split('-') : ['en'];
  const [message, setMessage] = useState({});
  const messages = useMemo(
    // async () => getTranslations(shortLocale),
    async () => English,
    []
  );

  useEffect(() => {
    const asyncFn = async () => setMessage(await messages);
    asyncFn();
  }, [messages]);

  return (
    <Provider store={store}>
      <IntlProvider
        locale={shortLocale}
        onError={() => null}
        defaultLocale={shortLocale}
        key={shortLocale}
        messages={message}
        textComponent={Fragment}
      >
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </IntlProvider>
    </Provider>
  );
};

export default MyApp;

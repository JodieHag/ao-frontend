export const GoogleInit = () => {
  const sc = document?.createElement('script');
  sc.setAttribute('type', 'text/javascript');
  sc.setAttribute('async', true);
  sc.setAttribute('defer', true);
  sc.setAttribute('crossorigin', 'anonymous');
  sc.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=G-V67R5S2BX7');
  document?.head.appendChild(sc);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'G-V67R5S2BX7');
};

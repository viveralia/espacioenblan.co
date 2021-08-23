import { NextIntlProvider } from "next-intl";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <DefaultSeo
        titleTemplate="%s | _.co"
        languageAlternates={[
          { href: "https://espacioenblan.co/es", hrefLang: "es" },
          { href: "https://espacioenblan.co/en", hrefLang: "en" },
        ]}
      />
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export default MyApp;

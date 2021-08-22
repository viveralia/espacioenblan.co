import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo titleTemplate="%s | _.co" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

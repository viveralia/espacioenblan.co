import { GetStaticProps, NextPage } from "next";
import { useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

const IndexPage: NextPage = () => {
  const t = useTranslations();
  const router = useRouter();

  const handleClick = () => {
    const oppositeLocale = router.locale === "es" ? "en" : "es";
    router.push(router.asPath, undefined, { locale: oppositeLocale });
  };

  return (
    <div>
      <NextSeo title={t("indexPage.pageTitle") as string} />
      <button onClick={handleClick}>{t("common.changeLanguage")}</button>
      <h1>{t("indexPage.welcome")}</h1>
    </div>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: {
        ...require(`../i18n/common/${locale}.json`),
        ...require(`../i18n/index/${locale}.json`),
      },
    },
  };
};

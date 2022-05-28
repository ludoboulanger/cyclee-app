import type { NextPage, NextPageContext } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <p>Test</p>
  );
};

export async function getStaticProps({ locale }: NextPageContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", [
        "common",
        "example",
        "landing",
        "navigation",
      ])),
    },
  };
}

export default Home;

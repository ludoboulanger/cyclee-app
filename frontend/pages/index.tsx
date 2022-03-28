import type { NextPage, NextPageContext } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import LandingPage from "../components/landing-page";

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
      <LandingPage />
  );
};

export async function getStaticProps({ locale }: NextPageContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common", "example", "landing"])),
    },
  };
}

export default Home;

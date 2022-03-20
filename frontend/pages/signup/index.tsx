import Page1 from "../../components/SignupForm/Page1";
import Page2 from "../../components/SignupForm/Page2";
import FormController from "../../components/FormController";
import { SignupFormSchema, SignupFormFields } from "../../schemas/signupForm";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextPageContext } from "next";

export default function SignUp() {
  const form = useForm<SignupFormFields>({
    resolver: zodResolver(SignupFormSchema),
    mode: "onTouched",
  });

  return (
    <Box
      sx={{
        maxWidth: "500px",
        height: "100%",
        justifyContent: "center",
        display: "flex",
        width: "100%",
      }}
    >
      <FormController pages={[Page1, Page2]} form={form} />
    </Box>
  );
}

export const getStaticProps = async ({ locale }: NextPageContext) => ({
  props: {
    ...(await serverSideTranslations(locale || "en", ["signup", "common"])),
  },
});

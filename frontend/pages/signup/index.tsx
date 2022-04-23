import Page1 from "../../components/SignupForm/Page1";
import Page2 from "../../components/SignupForm/Page2";
import FormController from "../../components/FormController";
import { SignupFormSchema, SignupFormFields } from "../../schemas/signupForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextPageContext } from "next";
import { useState } from "react";
import ConfirmationPage from "../../components/SignupForm/ConfirmationPage";
import styled from "@emotion/styled";

const Container = styled("div")({
  maxWidth: "500px",
  height: "100%",
  justifyContent: "center",
  display: "flex",
  width: "100%",
});

const SignUp: React.FC = () => {
  const form = useForm<SignupFormFields>({
    resolver: zodResolver(SignupFormSchema),
    mode: "onTouched",
  });

  const [formData, setFormData] = useState<SignupFormFields | undefined>(
    undefined
  );
  function onSubmit(data: SignupFormFields) {
    console.log(data);
    setFormData(data);
  }

  return (
    <Container>
      {formData ? (
        <ConfirmationPage
          email={formData.email}
          firstName={formData.firstName}
        />
      ) : (
        <FormController
          pages={[Page1, Page2]}
          form={form}
          onSubmit={onSubmit}
        />
      )}
    </Container>
  );
};

export const getStaticProps = async ({ locale }: NextPageContext) => ({
  props: {
    ...(await serverSideTranslations(locale || "en", ["signup", "common"])),
  },
});

export default SignUp;

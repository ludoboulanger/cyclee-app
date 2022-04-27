import PersonnalInformations from "../../components/SignupForm/PersonnalInformationsPage";
import Password from "../../components/SignupForm/PasswordPage";
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
          pages={[PersonnalInformations, Password]}
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

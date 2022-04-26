import PersonnalInformationsForm from "../../components/SignupForm/PersonnalInformationsPage";
import PasswordForm from "../../components/SignupForm/PasswordPage";
import FormController from "../../components/FormController";
import { SignupFormSchema, SignupFormFields } from "../../schemas/signupForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextPageContext } from "next";
import { useState } from "react";
import ConfirmationPage from "../../components/SignupForm/ConfirmationPage";
import styled from "@emotion/styled";
import { useAuth } from "../../services/auth";
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
  const auth = useAuth();

  function onSubmit(data: SignupFormFields) {
    auth.signUp(data.email, data.password).catch((error) => {
      alert(error);
    });
  }

  return (
    <Container>
      {auth.user ? (
        <ConfirmationPage
          email={auth.user.email}
          firstName={auth.user.displayName}
        />
      ) : (
        <FormController
          pages={[PersonnalInformationsForm, PasswordForm]}
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

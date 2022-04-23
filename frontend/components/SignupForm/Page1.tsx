import { Button, LinearProgress, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import React from "react";
import FormField from "../FormField";
import TextField from "../TextField";
import { SignupFormFields } from "../../schemas/signupForm";
import FormPageProps from "../FormController/FormPageProps";
import { ButtonsDiv } from "./styles";

const Page1: React.FC<FormPageProps<SignupFormFields>> = ({
  form,
  cancel,
  nextStep,
}) => {
  const { t } = useTranslation("signup");

  async function onNextClicked() {
    if (await form.trigger(["firstName", "lastName", "email"])) {
      nextStep();
    }
  }

  return (
    <>
      <Typography align="center" variant="h2">
        {t("titles.firstPage")}
      </Typography>
      <LinearProgress variant="determinate" value={33} sx={{ width: "100%" }} />
      <FormField
        labelText={t("labels.firstName")}
        errorText={t(form.formState.errors.firstName?.message || "")}
        fieldName="firstName"
      >
        <TextField
          sx={{ width: "100%" }}
          {...form.register("firstName")}
          placeholder={t("placeholders.lastName")}
        />
      </FormField>

      <FormField
        labelText={t("labels.lastName")}
        errorText={t(form.formState.errors.lastName?.message || "")}
        fieldName="lastName"
      >
        <TextField
          sx={{ width: "100%" }}
          placeholder={t("placeholders.lastName")}
          {...form.register("lastName")}
        />
      </FormField>

      <FormField
        labelText={t("labels.email")}
        errorText={t(form.formState.errors.email?.message || "")}
        fieldName="email"
      >
        <TextField
          sx={{ width: "100%" }}
          placeholder={t("placeholders.email")}
          type="email"
          {...form.register("email")}
        />
      </FormField>
      <ButtonsDiv>
        <Button fullWidth variant="contained" onClick={onNextClicked}>
          {t("common:next")}
        </Button>
        <Button
          fullWidth
          variant="contained"
          sx={{ backgroundColor: "primary.light", color: "primary.main" }}
          onClick={() => cancel()}
        >
          {t("common:cancel")}
        </Button>
      </ButtonsDiv>
    </>
  );
};

export default Page1;

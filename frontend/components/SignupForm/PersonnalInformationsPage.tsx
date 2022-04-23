import { Button, LinearProgress, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import React from "react";
import FormField from "../FormField";
import { SignupFormFields } from "../../schemas/signupForm";
import FormPageProps from "../FormController/FormPageProps";
import { ButtonsDiv, FullWidthTextField } from "./commonStyles";

const PersonnalInformations: React.FC<FormPageProps<SignupFormFields>> = ({
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
        labelText={t("formfields.labels.firstName")}
        errorText={t(form.formState.errors.firstName?.message || "")}
        fieldName="firstName"
      >
        <FullWidthTextField
          {...form.register("firstName")}
          placeholder={t("formfields.placeholders.lastName")}
        />
      </FormField>

      <FormField
        labelText={t("formfields.labels.lastName")}
        errorText={t(form.formState.errors.lastName?.message || "")}
        fieldName="lastName"
      >
        <FullWidthTextField
          placeholder={t("formfields.placeholders.lastName")}
          {...form.register("lastName")}
        />
      </FormField>

      <FormField
        labelText={t("formfields.labels.email")}
        errorText={t(form.formState.errors.email?.message || "")}
        fieldName="email"
      >
        <FullWidthTextField
          placeholder={t("formfields.placeholders.email")}
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

export default PersonnalInformations;

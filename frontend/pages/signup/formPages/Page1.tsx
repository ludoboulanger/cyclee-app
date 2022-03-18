import { Button, LinearProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useTranslation } from "next-i18next";
import React from "react";
import FormField from "../../../components/FormField";
import TextField from "../../../components/TextField";
import { SignupFormFields } from "../SignupFormSchema";
import FormPageProps from "../../../components/FormController/FormPageProps";
import { buttonsDiv } from "./styles";

export default function Page1({
  progress,
  form,
  cancel,
  nextStep,
}: FormPageProps<SignupFormFields>) {
  const { t } = useTranslation("signup");

  return (
    <>
      <Typography align="center" variant="h2">
        {t("titles.firstPage")}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ width: "100%" }}
      />
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
      <Box sx={buttonsDiv}>
        <Button fullWidth variant="contained" onClick={() => nextStep()}>
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
      </Box>
    </>
  );
}

import { Box, Button, LinearProgress, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import React, { useEffect, useMemo } from "react";
import FormField from "../FormField";
import TextField from "../TextField";
import { SignupFormFields } from "../../schemas/signupForm";
import FormPageProps from "../FormController/FormPageProps";
import { buttonsDiv } from "./styles";

export default function Page2({
  progress,
  submit,
  form,
  prevStep,
}: FormPageProps<SignupFormFields>) {
  const firstName = form.watch("firstName");
  const { t } = useTranslation("signup");

  const title = useMemo(() => {
    if (firstName.length > 0 && firstName.length < 15) {
      return t("titles.secondPage", { firstName });
    } else {
      return t("titles.firstPage");
    }
  }, [firstName, t]);

  useEffect(() => {
    console.log(form.formState.errors);
  }, [form.formState.errors]);

  return (
    <>
      <Typography align="center" variant="h2">
        {title}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ width: "100%" }}
      />
      <FormField
        labelText={t("labels.password")}
        errorText={t(form.formState.errors.password?.message || "")}
        fieldName="password"
      >
        <TextField
          sx={{ width: "100%" }}
          {...form.register("password")}
          placeholder={t("placeholders.password")}
          type="password"
        />
      </FormField>
      <FormField
        labelText={t("labels.passwordConfirm")}
        errorText={t(form.formState.errors.passwordConfirm?.message || "")}
        fieldName="passwordConfirm"
      >
        <TextField
          sx={{ width: "100%" }}
          placeholder={t("placeholders.passwordConfirm")}
          {...form.register("passwordConfirm")}
          type="password"
        />
      </FormField>
      <Box sx={buttonsDiv}>
        <Button fullWidth variant="contained" type="submit">
          {t("common:complete")}
        </Button>
        <Button
          fullWidth
          variant="contained"
          sx={{ backgroundColor: "primary.light", color: "primary.main" }}
          onClick={() => prevStep()}
        >
          {t("common:back")}
        </Button>
      </Box>
    </>
  );
}

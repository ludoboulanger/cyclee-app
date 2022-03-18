import { Box, Button, LinearProgress, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import React, { useEffect, useMemo } from "react";
import FormField from "../../../components/FormField";
import TextField from "../../../components/TextField";
import { FormFields } from "../FormSchema";
import FormPageProps from "./FormPageProps";
import { buttonsDiv } from "./styles";

export default function Page2({
  progress,
  submit,
  form,
  prevStep,
}: FormPageProps<FormFields>) {
  const firstName = form.watch("firstName");

  const title = useMemo(() => {
    if (firstName.length < 15) {
      return `Welcome\n${firstName}`;
    } else {
      return "Welcome to Cyclee";
    }
  }, [firstName]);
  const { t } = useTranslation("signup");
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

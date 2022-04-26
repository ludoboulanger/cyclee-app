import { Button, LinearProgress, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import React, { useEffect, useMemo } from "react";
import FormField from "../FormField";
import { SignupFormFields } from "../../schemas/signupForm";
import FormPageProps from "../FormController/FormPageProps";
import { ButtonsDiv, FullWidthTextField } from "./commonStyles";

const Password: React.FC<FormPageProps<SignupFormFields>> = ({
  form,
  prevStep,
}) => {
  const firstName = form.watch("firstName");
  const { t } = useTranslation("signup");

  const title = useMemo(() => {
    if (firstName.length > 0 && firstName.length < 15) {
      return t("titles.secondPage", { firstName });
    } else {
      return t("titles.firstPage");
    }
  }, [firstName, t]);

  return (
    <>
      <Typography align="center" variant="h2">
        {title}
      </Typography>
      <LinearProgress variant="determinate" value={66} sx={{ width: "100%" }} />
      <FormField
        labelText={t("formfields.labels.password")}
        errorText={t(form.formState.errors.password?.message || "")}
        fieldName="password"
      >
        <FullWidthTextField
          {...form.register("password")}
          placeholder={t("formfields.placeholders.password")}
          type="password"
        />
      </FormField>
      <FormField
        labelText={t("formfields.labels.passwordConfirm")}
        errorText={t(form.formState.errors.passwordConfirm?.message || "")}
        fieldName="passwordConfirm"
      >
        <FullWidthTextField
          placeholder={t("formfields.placeholders.passwordConfirm")}
          {...form.register("passwordConfirm")}
          type="password"
        />
      </FormField>
      <ButtonsDiv>
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
      </ButtonsDiv>
    </>
  );
};

export default Password;

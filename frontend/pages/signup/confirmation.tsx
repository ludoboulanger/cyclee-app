import { LinearProgress, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useMemo } from "react";
import { SignupFormFields } from "../../schemas/signupForm";
import FormPageProps from "../../components/FormController/FormPageProps";

export default function ConfirmationPage({ firstName, email }) {
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
      <LinearProgress
        variant="determinate"
        value={100}
        sx={{ width: "100%" }}
      />
      <Typography align="center" variant="body1">
        Thank you for joining Cyclee, we sent an email to
        {email}. Check your inbox to complete the sign up process!
      </Typography>
    </>
  );
}

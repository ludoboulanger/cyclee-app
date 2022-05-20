import { styled } from "@mui/system";
import { LinearProgress, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useMemo } from "react";
import { useAuth } from "../../services/auth";

const HorizontalDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  alignItems: "center",
  paddingTop: "50px",
  paddingBottom: "50px",
  paddingLeft: "70px",
  paddingRight: "70px",
  maxHeight: "800px",
  width: "100%",
});

const ConfirmationPage: React.FC = () => {
  const { t } = useTranslation("signup");
  const { user } = useAuth();
  if (!user) {
    throw new Error("User is not signed in");
  }
  const title = useMemo(() => {
    if (user.displayName.length > 0 && user.displayName.length < 15) {
      return t("titles.secondPage", { firstName: user.displayName });
    } else {
      return t("titles.firstPage");
    }
  }, [user, t]);

  return (
    <HorizontalDiv>
      <Typography align="center" variant="h2">
        {title}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={100}
        sx={{ width: "100%", marginTop: "57px", marginBottom: "86px" }}
      />
      <Typography align="center" variant="body1">
        {t("confirmationMessage", { email: user.email })}
      </Typography>
    </HorizontalDiv>
  );
};

export default ConfirmationPage;

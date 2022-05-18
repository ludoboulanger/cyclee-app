import { styled } from "@mui/system";
import { LinearProgress, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useMemo } from "react";

const HorizontalDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  alignItems: "center",
  padding: "50px 70px",
  maxHeight: "800px",
  width: "100%",
});
interface PropsType {
  firstName: string;
  email: string;
}
const ConfirmationPage: React.FC<PropsType> = ({ firstName, email }) => {
  const { t } = useTranslation("signup");

  const title = useMemo(() => {
    if (firstName.length > 0 && firstName.length < 15) {
      return t("titles.secondPage", { firstName });
    } else {
      return t("titles.firstPage");
    }
  }, [firstName, t]);

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
        {t("confirmationMessage", { email })}
      </Typography>
    </HorizontalDiv>
  );
};

export default ConfirmationPage;

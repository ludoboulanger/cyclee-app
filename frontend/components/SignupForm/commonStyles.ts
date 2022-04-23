import { styled } from "@mui/system";
import TextField from "../TextField";

  export const ButtonsDiv= styled('div')({
    display: "flex",
    flexDirection: "column",
    gap: "9px",
    width: "100%",
  });

  export const FullWidthTextField = styled(TextField)({width: "100%"});

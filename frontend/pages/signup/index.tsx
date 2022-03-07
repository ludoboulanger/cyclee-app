import Page1 from "./formPages/Page1";
import Page2 from "./formPages/Page2";
import FormController from "./FormController";
import { Box } from "@mui/system";

export default function SignUp() {
  return (
    <Box
      sx={{
        maxWidth: "500px",
        height: "100%",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <FormController pages={[Page1, Page2]} />{" "}
    </Box>
  );
}

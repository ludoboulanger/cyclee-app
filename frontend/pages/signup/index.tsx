import Page1 from "./formPages/Page1";
import Page2 from "./formPages/Page2";
import FormController from "./FormController";
import { FormSchema, FormFields } from "./FormFields";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignUp() {
  const form = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
  });

  return (
    <Box
      sx={{
        maxWidth: "500px",
        height: "100%",
        justifyContent: "center",
        display: "flex",
        width: "100%",
      }}
    >
      <FormController pages={[Page1, Page2]} form={form} />
    </Box>
  );
}

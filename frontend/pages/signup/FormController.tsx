import { Box, styled } from "@mui/system";
import React, { useMemo, useState } from "react";
import Page1 from "./formPages/Page1";
import { useForm } from "react-hook-form";
import { FormFields } from "./FormFields";
import Page2 from "./formPages/Page2";
import { useRouter } from "next/router";
import FormPageProps from "./formPages/FormPageProps";
const HorizontalForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-around",
  alignItems: "center",
  paddingTop: "50px",
  paddingBottom: "50px",
  paddingLeft: "70px",
  paddingRight: "70px",
  maxHeight: "800px",
});
interface FormControllerProps<FormFieldsType> {
  pages: Array<React.ComponentType<FormPageProps<FormFieldsType>>>;
}
const pages = [Page1, Page2];
export default function FormController<FormFieldsType>({
  pages,
}: FormControllerProps<FormFieldsType>) {
  console.log("FormController");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormFieldsType>();
  const router = useRouter();
  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data, null, 2)));

  const [step, setStep] = useState(0);

  function nextStep() {
    setStep(step + 1);
  }

  function prevStep() {
    setStep(step - 1);
  }

  function cancel() {
    router.back();
  }

  const Page = useMemo(() => pages[step], [step]);
  const progress = useMemo(() => ((step + 1) / pages.length) * 100, [step]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <HorizontalForm onSubmit={onSubmit}>
        <Page
          progress={progress}
          registerFormInput={register}
          nextStep={nextStep}
          prevStep={prevStep}
          cancel={cancel}
          submit={onSubmit}
        />
      </HorizontalForm>
    </Box>
  );
}

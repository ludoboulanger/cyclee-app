import { Box, styled } from "@mui/system";
import React, { useMemo, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { useRouter } from "next/router";
import FormPageProps from "./FormPageProps";
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
  width: "100%",
});
interface FormControllerProps<FormFieldsType> {
  pages: Array<React.ComponentType<FormPageProps<FormFieldsType>>>;
  form: UseFormReturn<FormFieldsType>;
}
export default function FormController<FormFieldsType>({
  pages,
  form,
}: FormControllerProps<FormFieldsType>) {
  const router = useRouter();
  const onSubmit = form.handleSubmit((data) => console.log(data));

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

  const Page = useMemo(() => pages[step], [step, pages]);
  const progress = useMemo(
    () => ((step + 1) / pages.length) * 100,
    [step, pages]
  );

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
          form={form}
          nextStep={nextStep}
          prevStep={prevStep}
          cancel={cancel}
          submit={onSubmit}
        />
      </HorizontalForm>
    </Box>
  );
}

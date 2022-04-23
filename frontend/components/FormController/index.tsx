import { styled } from "@mui/system";
import React, { useMemo, useState } from "react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
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

const Container = styled("div")({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
});

interface FormControllerProps<FormFieldsType> {
  pages: Array<React.ComponentType<FormPageProps<FormFieldsType>>>;
  form: UseFormReturn<FormFieldsType>;
  onSubmit: SubmitHandler<FormFieldsType>;
}
export default function FormController<FormFieldsType>({
  pages,
  form,
  onSubmit,
}: FormControllerProps<FormFieldsType>) {
  const router = useRouter();

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

  return (
    <Container>
      <HorizontalForm onSubmit={form.handleSubmit(onSubmit)}>
        <Page
          form={form}
          nextStep={nextStep}
          prevStep={prevStep}
          cancel={cancel}
          submit={onSubmit}
        />
      </HorizontalForm>
    </Container>
  );
}

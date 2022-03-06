import { UseFormRegister } from "react-hook-form";
import { FormFields } from "../FormFields";

export default interface FormPageProps<FormFieldsType> {
    registerFormInput: UseFormRegister<FormFieldsType>;
    progress: number;
    nextStep: CallableFunction;
    prevStep: CallableFunction;
    cancel: CallableFunction;
    submit: CallableFunction;
  };
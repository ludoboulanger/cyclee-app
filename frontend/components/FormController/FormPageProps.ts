import {  UseFormReturn } from "react-hook-form";

export default interface FormPageProps<FormFieldsType> {
    form: UseFormReturn<FormFieldsType>;
    progress: number;
    nextStep: CallableFunction;
    prevStep: CallableFunction;
    cancel: CallableFunction;
    submit: CallableFunction;
};
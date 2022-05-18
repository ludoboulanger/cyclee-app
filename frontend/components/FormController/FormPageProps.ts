import {  UseFormReturn } from "react-hook-form";

export default interface FormPageProps<FormFieldsType> {
    form: UseFormReturn<FormFieldsType>;
    nextStep: CallableFunction;
    prevStep: CallableFunction;
    cancel: CallableFunction;
    submit: CallableFunction;
};
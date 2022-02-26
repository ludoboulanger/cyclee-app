import React from "react";
import { UseFormRegister } from "react-hook-form";
import TextField from "../../../components/TextField";
import { FormFields } from "../FormFields";

interface Props {
  register: UseFormRegister<FormFields>;
}

export default function Page2({ register }: Props) {
  return (
    <>
      <label htmlFor="password">Your password</label>
      <TextField
        sx={{ width: "100%" }}
        {...register("password")}
        placeholder="Enter your password"
      />

      <label htmlFor="lastName">Confirm your password</label>
      <TextField
        sx={{ width: "100%" }}
        placeholder="Confirm your password"
        {...register("passwordConfirm")}
      />
    </>
  );
}

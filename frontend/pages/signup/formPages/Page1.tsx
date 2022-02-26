import React from "react";
import { UseFormRegister } from "react-hook-form";
import TextField from "../../../components/TextField";
import { FormFields } from "../FormFields";

interface Props {
  register: UseFormRegister<FormFields>;
}

export default function Page1({ register }: Props) {
  return (
    <>
      <label htmlFor="firstName">Your first Name</label>
      <TextField
        sx={{ width: "100%" }}
        {...register("firstName")}
        placeholder="Enter your first name"
      />

      <label htmlFor="lastName">Your last Name</label>
      <TextField
        sx={{ width: "100%" }}
        placeholder="Enter your last name"
        {...register("lastName")}
      />

      <label htmlFor="email">Your email adress</label>
      <TextField
        sx={{ width: "100%" }}
        placeholder="Enter your email adress"
        type="email"
        {...register("email")}
      />
    </>
  );
}

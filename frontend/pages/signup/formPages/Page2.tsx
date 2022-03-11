import { Box, Button, LinearProgress, Typography } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import { UseFormRegister } from "react-hook-form";
import FormField from "../../../components/FormField";
import TextField from "../../../components/TextField";
import { FormFields } from "../FormFields";
import FormPageProps from "./FormPageProps";
import { buttonsDiv, labelAndInputDiv } from "./styles";

export default function Page2({
  progress,
  submit,
  form,
  prevStep,
}: FormPageProps<FormFields>) {
  const firstName = form.watch("firstName");

  const title = useMemo(() => {
    if (firstName.length < 15) {
      return `Welcome\n${firstName}`;
    } else {
      return "Welcome to Cyclee";
    }
  }, [firstName]);

  useEffect(() => {
    console.log(form.formState.errors);
  }, [form.formState.errors]);

  return (
    <>
      <Typography align="center" variant="h2">
        {title}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ width: "100%" }}
      />
      <FormField
        labelText="Your password"
        errorText={form.formState.errors.password?.message}
        fieldName="password"
      >
        <TextField
          sx={{ width: "100%" }}
          {...form.register("password")}
          placeholder="Enter your password"
        />
      </FormField>
      <FormField
        labelText="Confirm your password"
        errorText={form.formState.errors.passwordConfirm?.message}
        fieldName="passwordConfirm"
      >
        <TextField
          sx={{ width: "100%" }}
          placeholder="Confirm your password"
          {...form.register("passwordConfirm")}
        />
      </FormField>
      <Box sx={buttonsDiv}>
        <Button fullWidth variant="contained" type="submit">
          Complete
        </Button>
        <Button
          fullWidth
          variant="contained"
          sx={{ backgroundColor: "primary.light", color: "primary.main" }}
          onClick={() => prevStep()}
        >
          Back
        </Button>
      </Box>
    </>
  );
}

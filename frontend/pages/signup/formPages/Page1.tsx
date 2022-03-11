import { Button, LinearProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FormField from "../../../components/FormField";
import TextField from "../../../components/TextField";
import { FormFields } from "../FormFields";
import FormPageProps from "./FormPageProps";
import { buttonsDiv, labelAndInputDiv } from "./styles";

export default function Page1({
  progress,
  form,
  cancel,
  nextStep,
}: FormPageProps<FormFields>) {
  console.log("Page1");
  return (
    <>
      <Typography align="center" variant="h2">
        Welcome to Cyclee
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ width: "100%" }}
      />
      <FormField
        labelText="Your first Name"
        errorText={form.formState.errors.firstName?.message}
        fieldName="firstName"
      >
        <TextField
          sx={{ width: "100%" }}
          {...form.register("firstName")}
          placeholder="Enter your first name"
        />
      </FormField>

      <FormField
        labelText="Your last Name"
        errorText={form.formState.errors.lastName?.message}
        fieldName="lastName"
      >
        <TextField
          sx={{ width: "100%" }}
          placeholder="Enter your last name"
          {...form.register("lastName")}
        />
      </FormField>

      <FormField
        labelText="Your email adress"
        errorText={form.formState.errors.email?.message}
        fieldName="email"
      >
        <TextField
          sx={{ width: "100%" }}
          placeholder="Enter your email adress"
          type="email"
          {...form.register("email")}
        />
      </FormField>
      <Box sx={buttonsDiv}>
        <Button fullWidth variant="contained" onClick={() => nextStep()}>
          Next
        </Button>
        <Button
          fullWidth
          variant="contained"
          sx={{ backgroundColor: "primary.light", color: "primary.main" }}
          onClick={() => cancel()}
        >
          Cancel
        </Button>
      </Box>
    </>
  );
}

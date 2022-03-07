import { Button, LinearProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { UseFormRegister } from "react-hook-form";
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
      <Box sx={labelAndInputDiv}>
        <label htmlFor="firstName">Your first Name</label>
        <TextField
          sx={{ width: "100%" }}
          {...form.register("firstName")}
          placeholder="Enter your first name"
        />
      </Box>

      <Box sx={labelAndInputDiv}>
        <label htmlFor="lastName">Your last Name</label>
        <TextField
          sx={{ width: "100%" }}
          placeholder="Enter your last name"
          {...form.register("lastName")}
        />
      </Box>
      <Box sx={labelAndInputDiv}>
        <label htmlFor="email">Your email adress</label>
        <TextField
          sx={{ width: "100%" }}
          placeholder="Enter your email adress"
          type="email"
          {...form.register("email")}
        />
      </Box>
      <Box sx={buttonsDiv}>
        <Button fullWidth variant="contained" onClick={(e) => nextStep()}>
          Next
        </Button>
        <Button
          fullWidth
          variant="contained"
          sx={{ backgroundColor: "primary.light", color: "primary.main" }}
          onClick={(e) => cancel()}
        >
          Cancel
        </Button>
      </Box>
    </>
  );
}

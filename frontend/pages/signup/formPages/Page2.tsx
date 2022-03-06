import { Box, Button, LinearProgress, Typography } from "@mui/material";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import TextField from "../../../components/TextField";
import { FormFields } from "../FormFields";
import FormPageProps from "./FormPageProps";
import { buttonsDiv, labelAndInputDiv } from "./styles";

export default function Page2({
  registerFormInput,
  progress,
  submit,
  prevStep,
}: FormPageProps) {
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
        <label htmlFor="password">Your password</label>
        <TextField
          sx={{ width: "100%" }}
          {...registerFormInput("password")}
          placeholder="Enter your password"
        />
      </Box>
      <Box sx={labelAndInputDiv}>
        <label htmlFor="lastName">Confirm your password</label>
        <TextField
          sx={{ width: "100%" }}
          placeholder="Confirm your password"
          {...registerFormInput("passwordConfirm")}
        />
      </Box>
      <Box sx={buttonsDiv}>
        <Button fullWidth variant="contained" type="submit">
          Complete
        </Button>
        <Button
          fullWidth
          variant="contained"
          sx={{ backgroundColor: "primary.light", color: "primary.main" }}
          onClick={(e) => prevStep()}
        >
          Back
        </Button>
      </Box>
    </>
  );
}

import { Button, LinearProgress, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { useState } from "react";
import Page1 from "./formPages/Page1";
import { useForm } from "react-hook-form";
import { FormFields } from "./FormFields";
import Page2 from "./formPages/Page2";
import { useRouter } from "next/router";
const HorizontalForm = styled("form")({
  display: "flex",
  flexDirection: "column",
});

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormFields>();
  const router = useRouter();
  const onSubmit = handleSubmit((data: FormFields) =>
    alert(JSON.stringify(data, null, 2))
  );
  const pages = [
    <Page1 register={register} key="page1" />,
    <Page2 register={register} key="page2" />,
  ];
  const [step, setStep] = useState(0);

  function getButtons(step: number) {
    const buttons = [];

    if (step == pages.length - 1) {
      buttons.push(
        <Button
          fullWidth
          variant="contained"
          type="submit"
          key="completeButton"
        >
          Complete
        </Button>
      );
    } else {
      buttons.push(
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            setStep(step + 1);
          }}
          key="nextButton"
        >
          Next
        </Button>
      );
    }

    if (step == 0) {
      buttons.push(
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            router.back();
          }}
          key="cancelButton"
        >
          Cancel
        </Button>
      );
    } else {
      buttons.push(
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            setStep(step - 1);
          }}
          key="backButton"
        >
          Back
        </Button>
      );
    }

    return buttons;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h2">Welcome to Cyclee</Typography>
      <LinearProgress
        variant="determinate"
        value={(step / pages.length) * 100}
        sx={{ width: "100%" }}
      />
      <HorizontalForm onSubmit={onSubmit}>
        {pages[step]}
        {getButtons(step)}
      </HorizontalForm>
    </Box>
  );
}

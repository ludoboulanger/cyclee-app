import { Button, LinearProgress, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Form, Field, Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import Page1 from "./formPages/Page1";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const HorizontalForm = styled(Form)({
  display: "flex",
  flexDirection: "column",
});

export default function SignUp() {
  const pages = [<Page1 />];
  const [step, setStep] = useState(0);

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
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        onSubmit={(
          values: FormValues,
          { setSubmitting }: FormikHelpers<FormValues>
        ) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        <HorizontalForm>
          {pages[step]}
          <Button fullWidth variant="contained" type="submit">
            Next
          </Button>
          <Button fullWidth disabled={true} variant="contained">
            Cancel
          </Button>
        </HorizontalForm>
      </Formik>
    </Box>
  );
}

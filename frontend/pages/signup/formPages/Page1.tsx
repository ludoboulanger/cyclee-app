import { Field } from "formik";
import React from "react";

export default function Page1() {
  return (
    <>
      <label htmlFor="firstName">Your first Name</label>
      <Field
        sx={{ width: "100%" }}
        id="firstName"
        name="firstName"
        placeholder="Enter your first name"
      />

      <label htmlFor="lastName">Your last Name</label>
      <Field
        sx={{ width: "100%" }}
        id="lastName"
        name="lastName"
        placeholder="Enter your last name"
      />

      <label htmlFor="email">Your email adress</label>
      <Field
        sx={{ width: "100%" }}
        id="email"
        name="email"
        placeholder="Enter your email adress"
        type="email"
      />
    </>
  );
}

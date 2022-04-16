import * as zod from "zod";

export const SignupFormSchema = zod
  .object({
    firstName: zod
      .string()
      .min(1, "signup:errors.common.required")
      .regex(
        /^(?:(?![×Þß÷þø])[-a-zA-ZÀ-ÿ])+$/,
        "signup:errors.firstName.wrongFormat"
      )
      .max(32, "signup:errors.firstName.tooLong"),
    lastName: zod
      .string()
      .min(1, "signup:errors.common.required")
      .regex(/^(?:(?![×Þß÷þø])[-a-zA-ZÀ-ÿ])+$/, "errors.lastName.wrongFormat")
      .max(32, "signup:errors.lastName.tooLong"),
    email: zod
      .string()
      .email("signup:errors.email.wrongFormat")
      .max(128, "signup:errors.email.tooLong"),
    password: zod
      .string()
      .regex(
        /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/,
        "signup:errors.password.wrongFormat"
      )
      .max(32, "signup:errors.password.tooLong"),
    passwordConfirm: zod.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "signup:errors.passwordConfirm.doesNotMatch",
  });

export type SignupFormFields = zod.infer<typeof SignupFormSchema>;

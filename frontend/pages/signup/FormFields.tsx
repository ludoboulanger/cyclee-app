import * as zod from "zod";

export const FormSchema = zod
  .object({
    firstName: zod.string().nonempty(),
    lastName: zod.string().nonempty(),
    email: zod.string().email(),
    password: zod
      .string()
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/),
    passwordConfirm: zod.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
  });

export type FormFields = zod.infer<typeof FormSchema>;

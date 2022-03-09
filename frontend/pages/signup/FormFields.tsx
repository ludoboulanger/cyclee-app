import * as zod from "zod";

export const FormSchema = zod
  .object({
    firstName: zod.string(),
    lastName: zod.string(),
    email: zod.string().email(),
    password: zod.string(),
    passwordConfirm: zod.string(),
  })
  .refine((data) => data.password === data.passwordConfirm);

export type FormFields = zod.infer<typeof FormSchema>;

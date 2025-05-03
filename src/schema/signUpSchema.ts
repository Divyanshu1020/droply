import * as z from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email({ message: "Invalid email" }),
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" }),
      passwordConfirmation: z
      .string()
      .min(1, { message: "Please confirm your password" })
      .min(8, { message: "Password must be at least 8 characters" }),
  })
  .refine((data) => data.password === data. passwordConfirmation, {
    message: "Passwords do not match",
    path: [" passwordConfirmation"],
  });

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
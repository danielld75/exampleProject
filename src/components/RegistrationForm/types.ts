import { z } from "zod";
export const validationSchema = z.object({
  email: z.string().email({ message: "Invalid email" }).min(6),
  password: z.string().min(6),
  language: z.string().min(6),
});
export type RegistrationFormData = z.infer<typeof validationSchema>;

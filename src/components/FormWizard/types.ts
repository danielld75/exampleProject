import { z } from "zod";

export const DynamicFormSchema = z.object({
  firstName: z.string().min(2, "Name must contain at least 2 characters"),
  lastName: z.string().min(2, "Surname must contain at least 2 characters"),
  hobbies: z.string().array(),
});

export type DynamicInputs = z.infer<typeof DynamicFormSchema>;

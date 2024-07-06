// src/schemas/formSchema.ts
import { z } from 'zod';

export const formSchema = z.object({
  date: z.date({ required_error: 'A date is required.' }),
  subject: z.string().min(2, { message: 'please select a subject' }),
  studyTime: z
    .string()
    .min(1, { message: 'study time must be provided.' })
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), { message: 'study time must be a number.' })
    .refine((val) => val >= 0, { message: 'study time cannot be negative.' }),
});

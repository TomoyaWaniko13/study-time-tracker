// src/schemas/formSchema.ts
import { z } from 'zod';

export const formSchema = z.object({
  date: z.date({ required_error: 'A date is required.' }),
  subject: z.string().min(2, { message: 'please select a subject' }),
  studyTime: z
    .string()
    .min(1, { message: 'study time must be provided.' })
    .refine((val) => !isNaN(Number(val)), { message: 'Study time must be a number.' })
    .refine((val) => Number(val) >= 0, { message: 'Study time cannot be negative.' }),
  username: z.string().min(1, 'name is required'),
  email: z.string().email('Invalid email address'),
});

// src/schemas/formSchema.ts
import { z } from 'zod';

export const formSchema = z.object({
  username: z.string().min(1, 'name is required'),
  email: z.string().email('Invalid email address'),
  pictureUrl: z.string().url('Invalid URL'),
  date: z.preprocess((arg) => {
    if (typeof arg === 'string' || arg instanceof Date) {
      return new Date(arg);
    }
    return arg;
  }, z.date()),
  subject: z.string().min(2, { message: 'please select a subject' }),
  studyTime: z
    .string()
    .min(1, { message: 'study time must be provided.' })
    .refine((val) => !isNaN(Number(val)), { message: 'Study time must be a number.' })
    .refine((val) => Number(val) >= 0, { message: 'Study time cannot be negative.' }),
});

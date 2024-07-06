'use client';

import { Controller, FieldValues, useFormContext, UseFormReturn } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface SubjectField<T extends FieldValues> {
  form: UseFormReturn<T>;
}

const StudyTimeField = <T extends FieldValues>({ form }: SubjectField<T>) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={form.control}
      name='studyTime'
      render={({ field }) => (
        <FormItem>
          <FormLabel>How many hours did you study?</FormLabel>
          <FormControl>
            <Input placeholder='Study time in hours (as a number)' type={'number'} step={'0.1'} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default StudyTimeField;

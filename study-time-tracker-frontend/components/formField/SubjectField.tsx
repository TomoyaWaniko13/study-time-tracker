'use client';

import { Controller, FieldValues, useFormContext, UseFormReturn } from 'react-hook-form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

interface SubjectField<T extends FieldValues> {
  form: UseFormReturn<T>;
}

const SubjectField = <T extends FieldValues>({ form }: SubjectField<T>) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={form.control}
      name='subject'
      render={({ field }) => (
        <FormItem>
          <FormLabel>What did you study?</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder='Select a subject you studied.' />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value='programming'>programming</SelectItem>
              <SelectItem value='finance'>finance</SelectItem>
              <SelectItem value='others'>others</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SubjectField;

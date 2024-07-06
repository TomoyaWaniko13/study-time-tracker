'use client';

import { Controller, useFormContext } from 'react-hook-form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const SubjectField = () => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
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

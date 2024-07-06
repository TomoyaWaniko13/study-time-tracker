'use client';

import { Controller, useFormContext } from 'react-hook-form';
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const StudyTimeField = () => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
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

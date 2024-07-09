'use client';

import { Controller, FieldValues, useFormContext, UseFormReturn } from 'react-hook-form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface SubjectFieldProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  subjects: string[];
  onAddSubject: (newSubject: string) => void;
}

const SubjectField = <T extends FieldValues>({ form, subjects, onAddSubject }: SubjectFieldProps<T>) => {
  const { control } = useFormContext();
  const [newSubject, setNewSubject] = useState('');
  const { toast } = useToast();

  const handleAddSubject = () => {
    if (newSubject && !subjects?.includes(newSubject)) {
      onAddSubject(newSubject);
      setNewSubject('');
      toast({ description: `"${newSubject}" has been added.` });
    }
  };

  console.log(subjects);

  return (
    <FormField
      control={form.control}
      name='subject'
      render={({ field }) => (
        <FormItem>
          <FormLabel>What did you study?</FormLabel>

          <div className='flex items-center space-x-2 mt-4'>
            <Input
              type='text'
              placeholder='Add a new subject'
              value={newSubject}
              onChange={(e) => setNewSubject(e.target.value)}
            />
            <Button type={'button'} variant={'default'} onClick={handleAddSubject}>
              Add
            </Button>
          </div>

          {subjects.length > 0 && (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={`${subjects ? 'select a subject you studied.' : 'first add a subject'}`} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {subjects?.map((subject) => (
                  <SelectItem key={subject} value={subject}>
                    {subject}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SubjectField;

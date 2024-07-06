'use client';

import { useFormContext } from 'react-hook-form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

const DateField = () => {
  const { control } = useFormContext();

  return (
    <FormField
      control={form.control}
      name='date'
      render={({ field }) => (
        <FormItem className='flex flex-col'>
          <FormLabel>When did you study?</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={'outline'}
                  className={cn('w-[240px] pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}
                >
                  {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                  <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0' align='start'>
              <Calendar
                mode='single'
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default DateField;

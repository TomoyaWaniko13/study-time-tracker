'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import DateField from '@/components/formField/DateField';
import SubjectField from '@/components/formField/SubjectField';
import StudyTimeField from '@/components/formField/StudyTimeField';
import { formSchema } from '@/schemas/formSchema';

export default function RecordFormPage() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: '',
      studyTime: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className={'p-3 lg:p-20 max-w-3xl'}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <DateField form={form} />
          <SubjectField form={form} />
          <StudyTimeField form={form} />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </section>
  );
}

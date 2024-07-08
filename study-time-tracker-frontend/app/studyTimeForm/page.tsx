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
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const StudyTimeFormPage = () => {
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  const loadFormData = () => {
    const savedData = localStorage.getItem('studyTimeForm');
    return savedData ? JSON.parse(savedData) : {};
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...loadFormData(),
      username: user?.name,
      email: user?.email,
    },
  });

  const saveFormData = (data: z.infer<typeof formSchema>) => {
    localStorage.setItem('studyTimeForm', JSON.stringify(data));
  };

  useEffect(() => {
    const subscription = form.watch((value) => {
      saveFormData(value);
    });
    return () => subscription.unsubscribe();
  }, [form]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    localStorage.removeItem('studyTimeForm');
    router.push('/success');
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
};

export default StudyTimeFormPage;

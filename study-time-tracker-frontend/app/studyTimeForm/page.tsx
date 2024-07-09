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
import { useEffect, useState } from 'react';

const StudyTimeFormPage = () => {
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  const [subjects, setSubjects] = useState<string[]>([]);

  // 初期データを設定
  const initialFormData = {
    username: user?.name || '',
    email: user?.email || '',
    pictureUrl: user?.picture || '',
    studyTime: '',
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialFormData, // 初期値を設定
  });

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const handleAddSubject = (newSubject: string) => {
    setSubjects((prevSubjects) => [...prevSubjects, newSubject]);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      const response = await fetch('http://localhost:8080/api/study-records', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        router.push('/success');
      } else {
        console.error('Failed to submit study record');
      }
    } catch (error) {
      console.error('Error submitting the form: ' + error);
    }
  };

  return (
    <section className={'p-3 lg:p-20 max-w-3xl h-screen'}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <DateField form={form} />
          <SubjectField form={form} subjects={subjects} onAddSubject={handleAddSubject} />
          <StudyTimeField form={form} />
          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </section>
  );
};

export default StudyTimeFormPage;

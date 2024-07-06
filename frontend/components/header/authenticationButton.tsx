'use client';
import { Button } from '@/components/ui/button';
import { useUser } from '@auth0/nextjs-auth0/client';

const UserAuthenticationButton = () => {
  const { user, error, isLoading } = useUser();

  if (!user) return <div>loading....</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className={'flex flex-row items-center space-x-5'}>
      {!user ? (
        <Button variant={'secondary'}>
          <a href='/api/auth/login'>Login or Signup</a>
        </Button>
      ) : (
        <Button variant={'destructive'}>
          <a href={'/api/auth/logout'}>Logout</a>
        </Button>
      )}
    </div>
  );
};

export default UserAuthenticationButton;

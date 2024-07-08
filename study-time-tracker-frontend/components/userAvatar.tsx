import { getSession } from '@auth0/nextjs-auth0';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const UserAvatar = async () => {
  const session = await getSession();

  if (!session) return;

  const { user } = session;

  return (
    <Avatar>
      <AvatarImage src={user.picture} />
      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;

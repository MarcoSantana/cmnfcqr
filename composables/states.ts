interface User {
  id: number,
  name: string,
  certificationYear: number,
  certificationExpires: number,
  avatarUrl: string | undefined,
}

export const useUsers = () => useState
  <User[]>('users', () => [
    {
      id: 1,
      name: 'John Doe',
      certificationYear: 2021,
      certificationExpires: 2024,
      avatarUrl: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
    },
    {
      id: 2,
      name: 'Jane Doe',
      certificationYear: 2021,
      certificationExpires: 2024,
      avatarUrl: 'https://i.pravatar.cc/150?img=2',
    },
    {
      id: 3,
      name: 'Bob Smith',
      certificationYear: 2021,
      certificationExpires: 2024,
      avatarUrl: 'https://i.pravatar.cc/150?img=3',
    },
    {
      id: 4,
      name: 'Alice Smith',
      certificationYear: 2021,
      certificationExpires: 2024,
      avatarUrl: 'https://i.pravatar.cc/150?img=4',
    },
    {
      id: 5,
      name: 'Tom Smith',
      certificationYear: 2021,
      certificationExpires: 2024,
      avatarUrl: 'https://i.pravatar.cc/150?img=5',
    },
  ])

export const useUser = (<number>id) => useState
  <User>('user', () => {
    const user = useUsers().value.filter((u) => u.id == id)[0];
    return user;
  })



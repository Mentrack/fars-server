export type UserData = Omit<CreateUserDto, 'permissions'> & {
  password: string;
  permissions?: { connect: { id: string }[] };
};

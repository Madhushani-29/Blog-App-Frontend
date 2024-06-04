export type User = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
};

export type Blog = {
  _id: string;
  user:string;
  title: string;
  content: string;
  imageUrl: string;
};

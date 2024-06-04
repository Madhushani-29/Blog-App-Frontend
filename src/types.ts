export type User = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
};

export type Blog = {
  _id: string;
  user: string;
  title: string;
  content: string;
  imageUrl: string;
};

export type PopulatedBlog = {
  _id: string;
  user: {
    email:string;
    _id: string;
    firstName: string;
    lastName: string;
    imageUrl: string;
  };
  title: string;
  content: string;
  imageUrl: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  access_token: string;
  refresh_token: string;

  user: {
    id: string;
    name: string;
    email: string;
  };
};
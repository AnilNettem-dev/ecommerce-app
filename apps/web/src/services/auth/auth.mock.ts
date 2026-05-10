import {
  LoginRequest,
  LoginResponse,
} from './auth.types';

export const authMock = {
  login: async (
    data: LoginRequest
  ): Promise<LoginResponse> => {
    await new Promise((res) =>
      setTimeout(res, 800)
    );

    return {
      access_token: 'mock_access_token',
      refresh_token: 'mock_refresh_token',

      user: {
        id: '1',
        name: 'Anil',
        email: data.email,
      },
    };
  },

  profile: async () => {
    await new Promise((res) =>
      setTimeout(res, 500)
    );

    return {
      id: '1',
      name: 'Anil',
      email: 'anil@test.com',
    };
  },
};
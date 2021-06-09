export const environment = {
  production: true,
  APIEndpoint: 'http://groep-7.xyz:8001/api/',
  APIRoutes: {
    auth: {
      login: 'auth/login',
      register: 'auth/register',
      logout: 'auth/logout',
      refresh: 'auth/refresh-token',
    },
  },
};

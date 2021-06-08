export const environment = {
  production: true,
  APIEndpoint: 'http://staging.groep-7.xyz:8003/api/',
  APIRoutes: {
    auth: {
      login: 'auth/login',
      register: 'auth/register',
      logout: 'auth/logout',
      refresh: 'auth/refresh-token',
    },
  },
};

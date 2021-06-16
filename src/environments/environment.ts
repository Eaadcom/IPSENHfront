// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  APIEndpoint: 'http://localhost:8080/api/',
  APIRoutes: {
    auth: {
      login: 'auth/login',
      register: 'auth/register',
      logout: 'auth/logout',
      refresh: 'auth/refresh-token',
    },
  },
  pusher: {
    key: '2649bb334eb27f74faf8',
    broadcaster: 'pusher',
    cluster: 'eu',
    forceTLS: true
  }
};

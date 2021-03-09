// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: '....',
    authDomain: '...',
    projectId: '...',
    storageBucket: '...',
    messagingSenderId: '....',
    appId: '...',
    measurementId: '...',
  },
  menu: {
    guest: [
      {
        id: 0,
        name: 'home',
        title: 'Начало',
        link: '/home',
      },
      {
        id: 1,
        name: 'gallery',
        title: 'Галерия',
        link: '/gallery',
      },
      {
        id: 2,
        name: 'pricing',
        title: 'Цени и промоции',
        link: '/pricing',
      },
      {
        id: 3,
        name: '',
        title: 'За мен',
        link: '/about',
      },
      {
        id: 4,
        name: 'contact-us',
        title: 'Контакти',
        link: '/contact-us',
      },
    ],
    user: [],
    admin: [
      {
        title: 'Администрация',
        icon: 'person',
        link: '/admin',
      },
    ],
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

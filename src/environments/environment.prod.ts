export const environment = {
  production: true,
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

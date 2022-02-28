
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','ab3'),
    routes: [
      {
        path: '/docs/ChatServices/Contact/create-contanct',
        component: ComponentCreator('/docs/ChatServices/Contact/create-contanct','d94'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ChatServices/Contact/get-contact-info',
        component: ComponentCreator('/docs/ChatServices/Contact/get-contact-info','68a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ChatServices/Contact/get-contacts',
        component: ComponentCreator('/docs/ChatServices/Contact/get-contacts','d37'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ChatServices/Contact/join-contract',
        component: ComponentCreator('/docs/ChatServices/Contact/join-contract','017'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ChatServices/intro',
        component: ComponentCreator('/docs/ChatServices/intro','56b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ChatServices/Rooms/create-room',
        component: ComponentCreator('/docs/ChatServices/Rooms/create-room','6e4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ChatServices/Rooms/get-chat-rooms',
        component: ComponentCreator('/docs/ChatServices/Rooms/get-chat-rooms','216'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ChatServices/Rooms/get-messages',
        component: ComponentCreator('/docs/ChatServices/Rooms/get-messages','27d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ChatServices/Rooms/get-room-info',
        component: ComponentCreator('/docs/ChatServices/Rooms/get-room-info','8c6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ChatServices/Rooms/sent-message',
        component: ComponentCreator('/docs/ChatServices/Rooms/sent-message','7e8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ChatServices/User/bind-social-platform',
        component: ComponentCreator('/docs/ChatServices/User/bind-social-platform','f7c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ChatServices/User/get-user-info',
        component: ComponentCreator('/docs/ChatServices/User/get-user-info','9c5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ChatServices/User/user-login',
        component: ComponentCreator('/docs/ChatServices/User/user-login','69e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ChatServices/User/user-register',
        component: ComponentCreator('/docs/ChatServices/User/user-register','d66'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];

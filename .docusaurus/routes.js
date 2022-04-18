
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
    component: ComponentCreator('/docs','451'),
    routes: [
      {
        path: '/docs/AuthOne/intro',
        component: ComponentCreator('/docs/AuthOne/intro','c33'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ChatClientSDK/PythonSDK',
        component: ComponentCreator('/docs/ChatClientSDK/PythonSDK','7b3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ChatServices/Contact/add-contact',
        component: ComponentCreator('/docs/ChatServices/Contact/add-contact','67a'),
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
        path: '/docs/ChatServices/intro',
        component: ComponentCreator('/docs/ChatServices/intro','56b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/ChatServices/Rooms/connect-channel',
        component: ComponentCreator('/docs/ChatServices/Rooms/connect-channel','ad4'),
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
      },
      {
        path: '/docs/web3MQ-SDK/channel/',
        component: ComponentCreator('/docs/web3MQ-SDK/channel/','662'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/web3MQ-SDK/client/',
        component: ComponentCreator('/docs/web3MQ-SDK/client/','116'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/web3MQ-SDK/contact/',
        component: ComponentCreator('/docs/web3MQ-SDK/contact/','434'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/web3MQ-SDK/eventCenter/',
        component: ComponentCreator('/docs/web3MQ-SDK/eventCenter/','214'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/web3MQ-SDK/message/',
        component: ComponentCreator('/docs/web3MQ-SDK/message/','2dd'),
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


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
    component: ComponentCreator('/docs','ee7'),
    routes: [
      {
        path: '/docs/Intro',
        component: ComponentCreator('/docs/Intro','1f0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-Component/coreComponent/Channel',
        component: ComponentCreator('/docs/Web3MQ-Component/coreComponent/Channel','222'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-Component/coreComponent/ChannelList',
        component: ComponentCreator('/docs/Web3MQ-Component/coreComponent/ChannelList','191'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-Component/coreComponent/Chat',
        component: ComponentCreator('/docs/Web3MQ-Component/coreComponent/Chat','e3c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-Component/coreComponent/MessageList',
        component: ComponentCreator('/docs/Web3MQ-Component/coreComponent/MessageList','071'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-Component/coreComponent/Thread',
        component: ComponentCreator('/docs/Web3MQ-Component/coreComponent/Thread','9cc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-Component/intro',
        component: ComponentCreator('/docs/Web3MQ-Component/intro','4d3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-RESTFul-API/Contact/add-contact',
        component: ComponentCreator('/docs/Web3MQ-RESTFul-API/Contact/add-contact','d09'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-RESTFul-API/Contact/get-contacts',
        component: ComponentCreator('/docs/Web3MQ-RESTFul-API/Contact/get-contacts','548'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-RESTFul-API/Intro',
        component: ComponentCreator('/docs/Web3MQ-RESTFul-API/Intro','b17'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-RESTFul-API/Room/',
        component: ComponentCreator('/docs/Web3MQ-RESTFul-API/Room/','b04'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-RESTFul-API/Room/connect-channel',
        component: ComponentCreator('/docs/Web3MQ-RESTFul-API/Room/connect-channel','2c7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-RESTFul-API/Room/create-room',
        component: ComponentCreator('/docs/Web3MQ-RESTFul-API/Room/create-room','c9a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-RESTFul-API/Room/get-chat-rooms',
        component: ComponentCreator('/docs/Web3MQ-RESTFul-API/Room/get-chat-rooms','738'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-RESTFul-API/Room/get-messages',
        component: ComponentCreator('/docs/Web3MQ-RESTFul-API/Room/get-messages','bb9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-RESTFul-API/Room/get-room-info',
        component: ComponentCreator('/docs/Web3MQ-RESTFul-API/Room/get-room-info','6b2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-RESTFul-API/User/',
        component: ComponentCreator('/docs/Web3MQ-RESTFul-API/User/','354'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-RESTFul-API/User/bind-social-platform',
        component: ComponentCreator('/docs/Web3MQ-RESTFul-API/User/bind-social-platform','5eb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-RESTFul-API/User/get-user-info',
        component: ComponentCreator('/docs/Web3MQ-RESTFul-API/User/get-user-info','977'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-RESTFul-API/User/search-user',
        component: ComponentCreator('/docs/Web3MQ-RESTFul-API/User/search-user','341'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-RESTFul-API/User/user-login',
        component: ComponentCreator('/docs/Web3MQ-RESTFul-API/User/user-login','03d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-RESTFul-API/User/user-register',
        component: ComponentCreator('/docs/Web3MQ-RESTFul-API/User/user-register','59c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/JS-SDK/channel/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK/channel/','873'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/JS-SDK/client/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK/client/','41c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/JS-SDK/contact/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK/contact/','997'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/JS-SDK/eventCenter/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK/eventCenter/','0b7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/JS-SDK/message/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK/message/','fd8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/JS-SDK/types/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK/types/','e1d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/Python-SDK/SwapChatClientPythonSDK',
        component: ComponentCreator('/docs/Web3MQ-SDK/Python-SDK/SwapChatClientPythonSDK','cbc'),
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

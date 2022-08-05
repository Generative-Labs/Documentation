
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
    component: ComponentCreator('/docs','4a0'),
    routes: [
      {
        path: '/docs/Intro',
        component: ComponentCreator('/docs/Intro','1f0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorial/JS-SDK',
        component: ComponentCreator('/docs/Tutorial/JS-SDK','c01'),
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
        path: '/docs/Web3MQ-RESTFul-API/Notification/',
        component: ComponentCreator('/docs/Web3MQ-RESTFul-API/Notification/','762'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-RESTFul-API/Notification/send-notifications',
        component: ComponentCreator('/docs/Web3MQ-RESTFul-API/Notification/send-notifications','762'),
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
        path: '/docs/Web3MQ-RESTFul-API/User/get-user-assets',
        component: ComponentCreator('/docs/Web3MQ-RESTFul-API/User/get-user-assets','00f'),
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
        path: '/docs/Web3MQ-SDK/JS-SDK-V2/authorization/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK-V2/authorization/','5ad'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/JS-SDK-V2/channel/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK-V2/channel/','669'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/JS-SDK-V2/client/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK-V2/client/','9b5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/JS-SDK-V2/contact/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK-V2/contact/','eb4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/JS-SDK-V2/message/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK-V2/message/','d2f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/JS-SDK-V2/notify/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK-V2/notify/','51e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/JS-SDK-V2/quickStart/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK-V2/quickStart/','adf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/JS-SDK-V2/types/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK-V2/types/','48d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/JS-SDK-V2/user/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK-V2/user/','7a8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/JS-SDK-V2/utils/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK-V2/utils/','f74'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/JS-SDK/authorization/Intro',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK/authorization/Intro','022'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/JS-SDK/authorization/MetaMask',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK/authorization/MetaMask','24e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/JS-SDK/authorization/Slope',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK/authorization/Slope','7f4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/JS-SDK/authorization/Walletconnect',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK/authorization/Walletconnect','4a4'),
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
        path: '/docs/Web3MQ-SDK/JS-SDK/Intro',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK/Intro','b78'),
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
        path: '/docs/Web3MQ-SDK/JS-SDK/quickStart/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK/quickStart/','332'),
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
        path: '/docs/Web3MQ-SDK/JS-SDK/user/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK/user/','6d9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/JS-SDK/utils/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK/utils/','65d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/Python-SDK/chat',
        component: ComponentCreator('/docs/Web3MQ-SDK/Python-SDK/chat','2bc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/Python-SDK/intro',
        component: ComponentCreator('/docs/Web3MQ-SDK/Python-SDK/intro','a2e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/Python-SDK/login',
        component: ComponentCreator('/docs/Web3MQ-SDK/Python-SDK/login','14c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/Python-SDK/messageapi',
        component: ComponentCreator('/docs/Web3MQ-SDK/Python-SDK/messageapi','9f6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/Python-SDK/quickstart',
        component: ComponentCreator('/docs/Web3MQ-SDK/Python-SDK/quickstart','09d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/Python-SDK/register',
        component: ComponentCreator('/docs/Web3MQ-SDK/Python-SDK/register','46a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/Python-SDK/roomapi',
        component: ComponentCreator('/docs/Web3MQ-SDK/Python-SDK/roomapi','329'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/Python-SDK/userapi',
        component: ComponentCreator('/docs/Web3MQ-SDK/Python-SDK/userapi','6db'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/coreComponent/Channel',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/coreComponent/Channel','4bb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/coreComponent/ChannelList',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/coreComponent/ChannelList','9a3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/coreComponent/Chat',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/coreComponent/Chat','b48'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/coreComponent/MessageList',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/coreComponent/MessageList','c67'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/coreComponent/Thread',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/coreComponent/Thread','056'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Intro',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Intro','982'),
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

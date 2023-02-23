
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    path: '/search',
    component: ComponentCreator('/search','79a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','adf'),
    routes: [
      {
        path: '/docs/Intro',
        component: ComponentCreator('/docs/Intro','1f0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/dotbit/',
        component: ComponentCreator('/docs/Tutorials/dotbit/','59e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/ens/',
        component: ComponentCreator('/docs/Tutorials/ens/','d06'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/notifications/',
        component: ComponentCreator('/docs/Tutorials/notifications/','f99'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/PubSub/',
        component: ComponentCreator('/docs/Tutorials/PubSub/','eba'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Tutorials/web3mq/',
        component: ComponentCreator('/docs/Tutorials/web3mq/','d50'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/chat',
        component: ComponentCreator('/docs/Web3MQ-API/chat','b21'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/contact/',
        component: ComponentCreator('/docs/Web3MQ-API/contact/','8d6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/contact/follow_someone',
        component: ComponentCreator('/docs/Web3MQ-API/contact/follow_someone','55b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/contact/get_my_follower_list',
        component: ComponentCreator('/docs/Web3MQ-API/contact/get_my_follower_list','d32'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/contact/get_my_followers_and_following',
        component: ComponentCreator('/docs/Web3MQ-API/contact/get_my_followers_and_following','d28'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/contact/get_my_following_list',
        component: ComponentCreator('/docs/Web3MQ-API/contact/get_my_following_list','10a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/contact/Send_friend_request',
        component: ComponentCreator('/docs/Web3MQ-API/contact/Send_friend_request','096'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/dapp/create_dapp',
        component: ComponentCreator('/docs/Web3MQ-API/dapp/create_dapp','28c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/dapp/update_dapp',
        component: ComponentCreator('/docs/Web3MQ-API/dapp/update_dapp','345'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/did/get_user_bindlist',
        component: ComponentCreator('/docs/Web3MQ-API/did/get_user_bindlist','fed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/did/user_binddid',
        component: ComponentCreator('/docs/Web3MQ-API/did/user_binddid','603'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/ed25519key',
        component: ComponentCreator('/docs/Web3MQ-API/ed25519key','6a6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/group/',
        component: ComponentCreator('/docs/Web3MQ-API/group/','084'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/group/create_group',
        component: ComponentCreator('/docs/Web3MQ-API/group/create_group','f6a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/group/group_invitation',
        component: ComponentCreator('/docs/Web3MQ-API/group/group_invitation','421'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/group/group_list',
        component: ComponentCreator('/docs/Web3MQ-API/group/group_list','84e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/group/group_members',
        component: ComponentCreator('/docs/Web3MQ-API/group/group_members','b98'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/heartbeat',
        component: ComponentCreator('/docs/Web3MQ-API/heartbeat','440'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/Intro',
        component: ComponentCreator('/docs/Web3MQ-API/Intro','b15'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/message/',
        component: ComponentCreator('/docs/Web3MQ-API/message/','3bb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/message/change_message_status',
        component: ComponentCreator('/docs/Web3MQ-API/message/change_message_status','319'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/message/message_list',
        component: ComponentCreator('/docs/Web3MQ-API/message/message_list','fcd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/message/send_message',
        component: ComponentCreator('/docs/Web3MQ-API/message/send_message','45c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/notification/',
        component: ComponentCreator('/docs/Web3MQ-API/notification/','abd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/notification/change_notification_status',
        component: ComponentCreator('/docs/Web3MQ-API/notification/change_notification_status','4d6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/notification/notification_list',
        component: ComponentCreator('/docs/Web3MQ-API/notification/notification_list','1cb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/notification/receive_notification',
        component: ComponentCreator('/docs/Web3MQ-API/notification/receive_notification','1f0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/ProtoType',
        component: ComponentCreator('/docs/Web3MQ-API/ProtoType','6e3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/provider/create_provider',
        component: ComponentCreator('/docs/Web3MQ-API/provider/create_provider','c3f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/PubSub/',
        component: ComponentCreator('/docs/Web3MQ-API/PubSub/','b13'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/PubSub/create_topic',
        component: ComponentCreator('/docs/Web3MQ-API/PubSub/create_topic','8c6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/PubSub/my_create_topic_list',
        component: ComponentCreator('/docs/Web3MQ-API/PubSub/my_create_topic_list','d8b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/PubSub/my_subscribe_topic_list',
        component: ComponentCreator('/docs/Web3MQ-API/PubSub/my_subscribe_topic_list','3ae'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/PubSub/publish_topic_message',
        component: ComponentCreator('/docs/Web3MQ-API/PubSub/publish_topic_message','3c3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/PubSub/subscribe_topic',
        component: ComponentCreator('/docs/Web3MQ-API/PubSub/subscribe_topic','f25'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/quickstart/',
        component: ComponentCreator('/docs/Web3MQ-API/quickstart/','07c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/quickstart/Create_group',
        component: ComponentCreator('/docs/Web3MQ-API/quickstart/Create_group','4b8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/quickstart/Send_Connect_Command',
        component: ComponentCreator('/docs/Web3MQ-API/quickstart/Send_Connect_Command','d41'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/quickstart/Send_message_in_Group',
        component: ComponentCreator('/docs/Web3MQ-API/quickstart/Send_message_in_Group','920'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/quickstart/User_login',
        component: ComponentCreator('/docs/Web3MQ-API/quickstart/User_login','a97'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/quickstart/user_register',
        component: ComponentCreator('/docs/Web3MQ-API/quickstart/user_register','485'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/signature',
        component: ComponentCreator('/docs/Web3MQ-API/signature','798'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/user/',
        component: ComponentCreator('/docs/Web3MQ-API/user/','def'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/user/Get_my_profile',
        component: ComponentCreator('/docs/Web3MQ-API/user/Get_my_profile','9fb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/user/get_user_info',
        component: ComponentCreator('/docs/Web3MQ-API/user/get_user_info','f45'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/user/search_user',
        component: ComponentCreator('/docs/Web3MQ-API/user/search_user','cd6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/user/Update_my_profile',
        component: ComponentCreator('/docs/Web3MQ-API/user/Update_my_profile','6ec'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/user/user_login_v2',
        component: ComponentCreator('/docs/Web3MQ-API/user/user_login_v2','405'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-API/user/user_register_v2',
        component: ComponentCreator('/docs/Web3MQ-API/user/user_register_v2','e5c'),
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
        path: '/docs/Web3MQ-SDK/JS-SDK/dappConnect/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK/dappConnect/','d38'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/JS-SDK/encryption/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK/encryption/','7b4'),
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
        path: '/docs/Web3MQ-SDK/JS-SDK/notify/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK/notify/','e4e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/JS-SDK/PubSub/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK/PubSub/','e65'),
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
        path: '/docs/Web3MQ-SDK/JS-SDK/register/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK/register/','978'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/JS-SDK/signConnect/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK/signConnect/','c3e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/JS-SDK/standards/',
        component: ComponentCreator('/docs/Web3MQ-SDK/JS-SDK/standards/','f8d'),
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
        path: '/docs/Web3MQ-SDK/Swift-SDK/Channels/',
        component: ComponentCreator('/docs/Web3MQ-SDK/Swift-SDK/Channels/','e39'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/Swift-SDK/Contacts/',
        component: ComponentCreator('/docs/Web3MQ-SDK/Swift-SDK/Contacts/','840'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/Swift-SDK/Messages/',
        component: ComponentCreator('/docs/Web3MQ-SDK/Swift-SDK/Messages/','87b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/Swift-SDK/Notifications/',
        component: ComponentCreator('/docs/Web3MQ-SDK/Swift-SDK/Notifications/','160'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/Swift-SDK/QuickStart/',
        component: ComponentCreator('/docs/Web3MQ-SDK/Swift-SDK/QuickStart/','916'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/Swift-SDK/Register/',
        component: ComponentCreator('/docs/Web3MQ-SDK/Swift-SDK/Register/','ea9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/Swift-SDK/Structs/',
        component: ComponentCreator('/docs/Web3MQ-SDK/Swift-SDK/Structs/','e55'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/Swift-SDK/Topics/',
        component: ComponentCreator('/docs/Web3MQ-SDK/Swift-SDK/Topics/','6dd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-SDK/Swift-SDK/Users/',
        component: ComponentCreator('/docs/Web3MQ-SDK/Swift-SDK/Users/','be8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Channel',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Channel','90c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/ChannelHead',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/ChannelHead','211'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/ChannelList',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/ChannelList','c2b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Chat',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Chat','dee'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/ConnectMessage',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/ConnectMessage','3cc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/CreateChannel',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/CreateChannel','a9a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/DashBoard',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/DashBoard','09b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/LoginModal',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/LoginModal','efa'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/MessageConsole',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/MessageConsole','b2f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/MessageHead',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/MessageHead','27c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/MessageInput',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/MessageInput','203'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/MessageList',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/MessageList','a56'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Notification',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Notification','63e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/NotificationList',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/NotificationList','bf1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Notify',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Notify','5cd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Profile',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Profile','9c7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/Intro',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/Intro','afb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/utilityComponent/Avatar',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/utilityComponent/Avatar','557'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/utilityComponent/Button',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/utilityComponent/Button','52c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/utilityComponent/ChannelListMessenger',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/utilityComponent/ChannelListMessenger','812'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/utilityComponent/Loading',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/utilityComponent/Loading','01c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/utilityComponent/Modal',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/utilityComponent/Modal','9d8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/utilityComponent/Popover',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/utilityComponent/Popover','65d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/utilityComponent/RadioGroup',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/utilityComponent/RadioGroup','e38'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/utilityComponent/Skeleton',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/utilityComponent/Skeleton','45f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/utilityComponent/Toast',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/utilityComponent/Toast','5ab'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-React/utilityComponent/Window',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-React/utilityComponent/Window','e81'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-Swift/ChannelList',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-Swift/ChannelList','667'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-Swift/Integration',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-Swift/Integration','f37'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/Channel',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/Channel','baa'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/ChannelList',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/ChannelList','984'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/chat',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/chat','348'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/MessageInput',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/MessageInput','c7b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/MessageList',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-Vue/chatComponent/MessageList','a57'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Web3MQ-UI-Components/Web3MQ-Vue/Intro',
        component: ComponentCreator('/docs/Web3MQ-UI-Components/Web3MQ-Vue/Intro','295'),
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

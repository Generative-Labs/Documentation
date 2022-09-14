import React, { useEffect, useState, useRef } from 'react';
import { Client } from 'web3-mq';
import {
  Chat,
  Channel,
  Main,
  DashBoard,
  AppTypeEnum,
  Window,
  MessageHeader,
  MessageList,
  MessageInput,
} from 'web3-mq-react';
import 'web3-mq-react/dist/css/index.css';
import './index.module.css';

import Login from './components/Login';
import useLogin from './hooks/useLogin';

const App: React.FC = () => {
  const { keys, fastestUrl, init, signMetaMask, logout } = useLogin();

  useEffect(() => {
    init();
  }, []);

  if (!keys) {
    return <Login sign={signMetaMask} />;
  }

  if (!fastestUrl) {
    return null;
  }

  const client = Client.getInstance(keys);

  return (
    <Chat client={client} appType={AppTypeEnum['pc']} logout={logout}>
      <DashBoard />
      <Main />
      <Channel>
        <Window>
          <MessageHeader avatarSize={40} />
          <MessageList />
          <MessageInput />
        </Window>
        {/* <Thread />
        <AllThreadList /> */}
      </Channel>
    </Chat>
  );
};

export default App;

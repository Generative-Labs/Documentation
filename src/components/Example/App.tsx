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
import ss from './index.module.css';

import Login from './components/Login';
import useLogin from './hooks/useLogin';

const App: React.FC = () => {
  const { keys, fastestUrl, init, signMetaMask, logout } = useLogin();
  const [appType, setAppType] = useState(
    window.innerWidth <= 600 ? AppTypeEnum['h5'] : AppTypeEnum['pc']
  );

  useEffect(() => {
    init();
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => {
        setAppType(
          window.innerWidth <= 600 ? AppTypeEnum['h5'] : AppTypeEnum['pc']
        );
      });
    }
  }, []);

  if (!keys) {
    return <Login sign={signMetaMask} />;
  }

  if (!fastestUrl) {
    return null;
  }

  const client = Client.getInstance(keys);

  return (
    <Chat client={client} appType={appType} logout={logout}>
      <DashBoard />
      <Main className={ss['example-main']} />
      <Channel>
        <Window className={ss['expample-window']}>
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

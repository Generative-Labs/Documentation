import React, { useEffect } from 'react';
import { Client } from '@web3mq/client';
import { 
  AppTypeEnum, 
  Button,
  Channel, 
  ChannelList, 
  Chat, 
  MessageHeader, 
  Window
} from '@web3mq/react-components';

import useLogin from '../ChatExample/hooks/useLogin';

export const MessageHeadExample: React.FC = () => {
  const { keys, init, fastestUrl, logout } = useLogin();
  
  useEffect(() => {
    init();
    document.getElementsByTagName('body')[0].setAttribute('data-theme', 'light');
  }, [])

  if (!keys) {
    return (
      <Button size='large' type='ghost'><a href="/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/LoginModal#basic-usage" style={{textDecoration: 'none'}}>Please login first</a></Button>
    );
  }
  if (!fastestUrl) {
    return null;
  }

  const client = Client.getInstance(keys);

  return (
    <div id='box' style={{position: 'relative', border: '1px solid #f2f2f2',  width: '100%',height: '600px',overflow: 'auto'}}>
      <Chat containerId='box' client={client} appType={AppTypeEnum['h5']} logout={logout}>
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
          <ChannelList />
        </div>
        <Channel>
          <Window hasContainer>
            <MessageHeader />
          </Window>
        </Channel>
      </Chat>
    </div>
  );
};
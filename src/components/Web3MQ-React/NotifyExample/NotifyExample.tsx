import React, { useEffect } from 'react';
import { Client } from 'web3-mq';
import { AppTypeEnum, Button, ChannelHead, Chat, Notify } from 'web3-mq-react';

import useLogin from '../ChatExample/hooks/useLogin';

export const NotifyExample: React.FC = (props: any) => {
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
        <div style={{height: '100%'}}>
          <ChannelHead />
          <div style={{borderTop: '1px solid rgba(0,0,0,.06)'}}>
            <Notify />
          </div>
        </div>
      </Chat>
    </div>
  );
};
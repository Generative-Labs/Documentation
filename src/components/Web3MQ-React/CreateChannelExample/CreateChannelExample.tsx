import React, { useEffect } from 'react';
import { Client } from 'web3-mq';
import { AppTypeEnum, Chat, CreateChannel, ChannelList, ContactList, Button } from 'web3-mq-react';

import useLogin from '../ChatExample/hooks/useLogin';

export const CreateChannelExample: React.FC = (props: any) => {
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
    <div id='box' style={{position: 'relative', border: '1px solid #f2f2f2', minWidth: '375px', width: '100%',height: '600px',overflow: 'auto'}}>
      <Chat containerId='box' client={client} appType={AppTypeEnum['h5']} logout={logout}>
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
          <div style={{position: 'relative', display: 'flex', padding: '4px 15px', boxShadow: '0 4px 4px silver', fontWeight: '800'}}>
            ChannelList
            <CreateChannel />
          </div> 
          <ChannelList />
          <div style={{display: 'none'}}><ContactList /></div>
        </div>
      </Chat>
    </div>
  );
};
import React, { useEffect } from 'react';
import { Client } from '@web3mq/client';
import { Chat, Channel, ChannelList, AppTypeEnum, Button,useChannelStateContext, useChatContext } from '@web3mq/react-components';

import useLogin from '../ChatExample/hooks/useLogin';

import ss from './index.module.css';

const CustomComponent: React.FC = () => {
  const { client } = useChatContext();
  const { activeChannel } = useChannelStateContext();

  const handleClose = () => {
    client.channel.setActiveChannel(null);
  };

  return (
    <div className={ss.custom_box} style={{wordBreak: 'break-all'}}>
      <div><span>current Chat name is</span> {activeChannel.chat_name}</div>
      <div><span>current Chat type is</span> {activeChannel.chat_type}</div>
      <div><span>current Chat ID is</span> {activeChannel.chatid}</div>
      <Button type='ghost' onClick={handleClose} style={{margin: '10px 12px'}}>back</Button>
    </div>
  )
}

export const ChannelExample: React.FC = () => {
  const { keys, init, fastestUrl, logout } = useLogin();
  
  useEffect(() => {
    init();
    document.getElementsByTagName('body')[0].setAttribute('data-theme', 'light');
  }, [])

  if (!keys) {
    return (
      <Button size='large' type='ghost'><a href="/docs/Ethos-UI-Components/Web3MQ-React/chatComponent/LoginModal#basic-usage" style={{textDecoration: 'none'}}>Please login first</a></Button>
    );
  }
  if (!fastestUrl) {
    return null;
  }

  const client = Client.getInstance(keys);

  return (
    <div id='box' style={{position: 'relative', border: '1px solid #f2f2f2',  width: '100%',height: '300px',overflow: 'auto'}}>
      <Chat client={client} appType={AppTypeEnum['h5']} logout={logout}>
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
          <ChannelList />
        </div>
        <Channel>
          <CustomComponent />
        </Channel>
      </Chat>
    </div>
  );
};
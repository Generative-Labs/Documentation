import React, { useEffect } from 'react';
import { Client } from 'web3-mq';
import { 
  AppTypeEnum, 
  Avatar,
  Chat, 
  Channel, 
  ChatAutoComplete,
  ChannelList, 
  Button,
  MessageList,
  MessageInput,
  Window,
  useMessageContext,
  useChatContext
} from 'web3-mq-react';

import useLogin from '../ChatExample/hooks/useLogin';

import ss from './index.module.css';

const CustomInput: React.FC = () => {
  const { client } = useChatContext();
  const handleClose = () => {
    client.channel.setActiveChannel(null);
  };
  return (
    <div style={{display: 'flex',padding: '13px', alignItems: 'center', boxShadow: '0 -12px 10px rgb(30 83 133 / 3%)'}}>
      <Button onClick={handleClose} style={{height: '100%', marginRight: '8px'}}>Back</Button>
      <ChatAutoComplete />
    </div>
  )
};

const CustomMessage: React.FC = () => {
  const { message } = useMessageContext();
  const { 
    senderInfo = {}, 
  } = message;
  const getShortAddress = (address: string = '') => {
    let strLength = address.length;
    return address.substring(0, 5) + '...' + address.substring(strLength - 4, strLength);
  };
  const { defaultUserAvatar, defaultUserName } = senderInfo || {};

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', padding: '16px 24px', borderBottom: '1px solid #f2f2f2', position: 'relative'}}>
      <Avatar
        name="user"
        image={defaultUserAvatar || ''}
        size={30} 
      />
      <div style={{position: 'relative', width: '100%'}}>
        <div className={ss.dataInner}>
          <span className={ss.name}>{defaultUserName || getShortAddress(message.senderId)}</span>
          <span>{message.date}&nbsp;{message.timestamp}</span>
        </div>
        <div>{message.content}</div>
      </div>
    </div>
  )
}

export const CustomChannelExample: React.FC = () => {
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
    <div id='box' style={{position: 'relative', border: '1px solid #f2f2f2',  width: '100%',height: '300px',overflow: 'auto'}}>
      <Chat containerId='box' client={client} appType={AppTypeEnum['h5']} logout={logout}>
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
          <ChannelList />
        </div>
        <Channel Input={CustomInput} Message={CustomMessage}>
          <Window hasContainer>
            <MessageList />
            <MessageInput />
          </Window>
        </Channel>
      </Chat>
    </div>
  );
};
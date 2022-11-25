import React, { useEffect, PropsWithChildren } from 'react';
import { Client } from 'web3-mq';
import { 
  AppTypeEnum, 
  Avatar,
  Chat, 
  ChannelList, 
  Channel, 
  MessageList, 
  MessageHeader, 
  MessageInput,
  MessageProps, 
  Window
} from 'web3-mq-react';

import useLogin from '../ChatExample/hooks/useLogin';

import ss from './index.module.css';

const CustomMessage = (props: PropsWithChildren<MessageProps>) => {
  const { message } = props;
  const getShortAddress = (address: string = '') => {
    let strLength = address.length;
    return address.substring(0, 5) + '...' + address.substring(strLength - 4, strLength);
  };
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', padding: '16px 24px', borderBottom: '1px solid #f2f2f2', position: 'relative'}}>
      <Avatar
        name="user"
        image={message?.avatar || ''}
        size={30} 
      />
      <div style={{position: 'relative', width: '100%'}}>
        <div className={ss.dataInner}>
          <span className={ss.name}>{getShortAddress(message.senderId)}</span>
          <span>{message.date}&nbsp;{message.timestamp}</span>
        </div>
        <div>{message.content}</div>
      </div>
    </div>
  )
}

export const MessageListExample: React.FC = () => {
  const { keys, init, fastestUrl, logout } = useLogin();

  useEffect(() => {
    init();
  }, [])

  if (!keys) {
    return (
      <div>
        <button className={ss.link_btn}><a href="/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Chat#basic-usage">请先在Chat部分进行登录操作</a></button>
      </div>
    );
  }
  if (!fastestUrl) {
    return null;
  }

  const client = Client.getInstance(keys);

  return (
    <div id='box' style={{position: 'relative', border: '1px solid #f2f2f2', width: '100%',height: '500px',overflow: 'auto'}}>
      <Chat containerId='box' client={client} appType={AppTypeEnum['h5']} logout={logout}>
        <ChannelList/>
        <Channel>
          <Window>
            <MessageHeader />
            <MessageList Message={CustomMessage} />
            <MessageInput />
          </Window>
        </Channel>
      </Chat>
    </div>
  );
}; 
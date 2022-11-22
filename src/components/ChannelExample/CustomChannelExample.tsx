import React, { useEffect } from 'react';
import { Client } from 'web3-mq';
import { 
  AppTypeEnum, 
  Chat, 
  Channel, 
  ChatAutoComplete,
  ChannelList, 
  MessageList,
  MessageInput,
  Window,
  useMessageContext
} from 'web3-mq-react';

import useLogin from '../ChatExample/hooks/useLogin';

import ss from './index.module.css';

const CustomInput: React.FC = () => {

  return (
    <div style={{display: 'flex', width: "100%"}}>
      this is cutomInput:
      <ChatAutoComplete />
    </div>
  )
};

const CustomMessage: React.FC = () => {
  const { message } = useMessageContext();
  const getShortAddress = (address: string = '') => {
    let strLength = address.length;
    return address.substring(0, 5) + '...' + address.substring(strLength - 4, strLength);
  };

  return (
    <div>
      <div className={ss.dataInner}>
        <span className={ss.name}>{getShortAddress(message.senderId)}</span>
        <span>{message.date}&nbsp;{message.timestamp}</span>
      </div>
      <div>{message.content}</div>
    </div>
  )
}

export const CustomChannelExample: React.FC = () => {
  const { keys, init, fastestUrl, logout } = useLogin();
  
  useEffect(() => {
    init();
  }, [])

  if (!keys) {
    return (
      <div>
        <button className={ss.link_btn}><a href="/docs/Web3MQ-React/coreComponent/Chat#basic-usage">请先在Chat部分进行登录操作</a></button>
      </div>
    );
  }
  if (!fastestUrl) {
    return null;
  }

  const client = Client.getInstance(keys);

  return (
    <div id='box' style={{position: 'relative', border: '1px solid #f2f2f2',  width: '100%',height: '300px',overflow: 'auto'}}>
      <Chat containerId='box' client={client} appType={AppTypeEnum['h5']} logout={logout}>
        <ChannelList />
        <Channel Input={CustomInput} Message={CustomMessage}>
          <Window>
            <MessageList />
            <MessageInput />
          </Window>
        </Channel>
      </Chat>
    </div>
  );
};
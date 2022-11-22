import React, { useEffect } from 'react';
import { Client } from 'web3-mq';
import { Chat, Channel, ChannelList, AppTypeEnum, useChannelStateContext, useChatContext } from 'web3-mq-react';

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
      <div><span>current Chat avatar_base64 is</span> {activeChannel.avatar_base64}</div>
      <div><span>current Chat avatar_url is</span> {activeChannel.avatar_url}</div>
      <div><span>current Chat name is</span> {activeChannel.chat_name}</div>
      <div><span>current Chat type is</span> {activeChannel.chat_type}</div>
      <div><span>current Chat ID is</span> {activeChannel.chatid}</div>
      <button className={ss.back_btn} onClick={handleClose}>back</button>
    </div>
  )
}

export const ChannelExample: React.FC = () => {
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
      <Chat client={client} appType={AppTypeEnum['h5']} logout={logout}>
        <ChannelList />
        <Channel>
          <CustomComponent />
        </Channel>
      </Chat>
    </div>
  );
};
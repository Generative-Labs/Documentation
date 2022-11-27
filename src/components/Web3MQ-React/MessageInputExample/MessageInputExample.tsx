import React, { useEffect, useState } from 'react';
import { Client } from 'web3-mq';
import { 
  AppTypeEnum, 
  Channel, 
  ChannelList, 
  Chat, 
  MessageHeader, 
  MessageInput, 
  MessageList, 
  useMessageInputContext 
} from 'web3-mq-react';

import useLogin from '../ChatExample/hooks/useLogin';

import ss from './index.module.css';

const CustomInput = () => {
  const { sendMessage } = useMessageInputContext();
  const [ value, setValue ] = useState('');

  const handleEvent = () => {
    sendMessage(value);
    setValue('');
  }
  return (
    <div style={{ display: 'flex',  width: '100%', height: '40px' }}>
      <input style={{ flex: '2' }} type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button style={{ flex: '1' }} onClick={() => handleEvent()}>send</button>
    </div>
  )
}


export const MessageInputExample: React.FC = (props: any) => {
  const { type } = props;
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
    <div id='box' style={{position: 'relative', border: '1px solid #f2f2f2',  width: '100%',height: '600px',overflow: 'auto'}}>
      <Chat containerId='box' client={client} appType={AppTypeEnum['h5']} logout={logout}>
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
          <ChannelList />
        </div>
        <Channel>
          <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <MessageHeader />
            <MessageList />
            <MessageInput Input={type === 'custom' ? CustomInput : undefined} />
          </div>
        </Channel>
      </Chat>
    </div>
  );
};
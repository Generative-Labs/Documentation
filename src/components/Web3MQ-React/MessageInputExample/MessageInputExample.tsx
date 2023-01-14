import React, { useEffect, useState } from 'react';
import { Client } from 'web3-mq';
import { 
  AppTypeEnum, 
  Button,
  Channel, 
  ChannelList, 
  Chat, 
  MessageHeader, 
  MessageInput, 
  MessageList, 
  Window,
  useMessageInputContext 
} from 'web3-mq-react';

import useLogin from '../ChatExample/hooks/useLogin';

const CustomInput = () => {
  const { sendMessage } = useMessageInputContext();
  const [ value, setValue ] = useState('');

  const handleEvent = () => {
    sendMessage(value);
    setValue('');
  }
  return (
    <div style={{ display: 'flex',  width: '100%', height: '60px', padding: '10px', boxShadow: '0 -12px 10px rgb(30 83 133 / 3%)' }}>
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
            <MessageList />
            <MessageInput Input={type === 'custom' ? CustomInput : undefined} />
          </Window>
        </Channel>
      </Chat>
    </div>
  );
};
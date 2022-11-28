import React, { useEffect } from 'react';
import { Client } from 'web3-mq';
import { AppTypeEnum, Chat, CreateChannel, ChannelList } from 'web3-mq-react';

import useLogin from '../ChatExample/hooks/useLogin';

import ss from './index.module.css';

export const CreateChannelExample: React.FC = (props: any) => {
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
          <div style={{position: 'relative', display: 'flex', padding: '4px 15px', boxShadow: '0 4px 4px silver', fontWeight: '800'}}>
            ChannelList
            <CreateChannel />
          </div> 
          <ChannelList />
        </div>
      </Chat>
    </div>
  );
};
import React, { useEffect, useState } from 'react';
import { Client } from 'web3-mq';
import { AppTypeEnum, Avatar, Chat, Profile } from 'web3-mq-react';

import useLogin from '../ChatExample/hooks/useLogin';

import ss from './index.module.css';

export const ProfileExample: React.FC = () => {
  const { keys, init, fastestUrl, logout } = useLogin();
  const [appType, setAppType] = useState(AppTypeEnum['h5']);

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
  const updateAppType = () => {
    if(appType === AppTypeEnum['h5']) {
      setAppType(AppTypeEnum['pc'])
    } else {
      setAppType(AppTypeEnum['h5'])
    }
  }

  return (
    <div style={{width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <button 
        style={{
          width: '195px',
          height: '48px',
          borderRadius: '49px',
          border: 'none',
          color:' #FFFFFF',
          background: '#337DCF',
          fontWeight: 'bold',
          fontSize: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          marginBottom: '6px'
        }}
        onClick={() => updateAppType()}
      >update Profile</button>
      <div id='box' style={{position: 'relative', border: '1px solid #f2f2f2', width: '100%',height: '370px',overflow: 'auto'}}>
        <Chat containerId='box' client={client} appType={appType} logout={logout}>
          <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', height: '100%', width: '88px', borderRight: '1px solid rgba(0,0,0,.06)'}}>
            <Profile 
              AvatarNode={appType === 'pc' ? <Avatar className={ss.userAvatar} name="user" size={56} /> : undefined}
              isTab={appType === 'h5' ? true : false} 
              hasLogout 
            />
          </div>
        </Chat>
      </div>
    </div>
  );
};
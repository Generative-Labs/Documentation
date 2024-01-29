import React, { useEffect, useState } from 'react';
import { Client } from '@web3mq/client';
import { AppTypeEnum, Avatar, Button, Chat, Profile } from '@web3mq/react-components';

import useLogin from '../ChatExample/hooks/useLogin';

export const ProfileExample: React.FC = () => {
  const [appType, setAppType] = useState(AppTypeEnum['h5']);
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
  const updateAppType = () => {
    if(appType === AppTypeEnum['h5']) {
      setAppType(AppTypeEnum['pc'])
    } else {
      setAppType(AppTypeEnum['h5'])
    }
  }

  return (
    <div style={{width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <Button size='large' type='ghost' onClick={updateAppType} style={{marginBottom: '10px'}}>update appType</Button>
      <div id='box' style={{position: 'relative', border: '1px solid #f2f2f2', width: '100%',height: '370px',overflow: 'auto'}}>
        <Chat containerId='box' client={client} appType={appType} logout={logout}>
          <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', height: '100%', width: '88px', borderRight: '1px solid rgba(0,0,0,.06)'}}>
            <Profile 
              AvatarNode={appType === 'pc' ? <Avatar name="user" size={56} /> : undefined}
              isTab={appType === 'h5' ? true : false} 
              hasLogout 
            />
          </div>
        </Chat>
      </div>
    </div>
  );
};
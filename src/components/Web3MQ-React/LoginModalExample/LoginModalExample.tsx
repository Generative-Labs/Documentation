import React, { useEffect, useState } from 'react';
import { Client } from 'web3-mq';
import { Chat, AppTypeEnum, Button, LoginModal } from 'web3-mq-react';

import useLogin from '../ChatExample/hooks/useLogin';

import ss from './index.module.css';

export const LoginModalExample: React.FC = () => {
  const { keys, fastestUrl, init, login, logout, getAccount, register } = useLogin();
  const [appType, setAppType] = useState(
    window.innerWidth <= 600 ? AppTypeEnum['h5'] : AppTypeEnum['pc'],
  );
  const handleAppType = () => {
    setAppType(window.innerWidth <= 600 ? AppTypeEnum['h5'] : AppTypeEnum['pc']);
  };
  useEffect(() => {
    init();
    document.getElementsByTagName('body')[0].setAttribute('data-theme', 'light');
    window.addEventListener('resize', handleAppType);
    () => {
      window.removeEventListener('resize', handleAppType)
    }
  }, []);

  if (!keys) {
    return (
      <div 
        id='box' 
        style={{
          position: 'relative', 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%', 
          minHeight: '360px', 
          overflow: 'auto'
        }}
      >
        <LoginModal 
          appType={appType}
          containerId='box'
          isShow={true}
          modalClassName={ss.modalClassName}
          register={register}
          login={login}
          getEthAccount={getAccount}
          loginBtnNode={<Button size='large' type='ghost'>MetaMask</Button>}
        />
      </div>
    );
  }

  if (!fastestUrl) {
    return null;
  }

  const client = Client.getInstance(keys);

  return (
    <Chat containerId='box' client={client} appType={appType} logout={logout}>
      <div>
        <h4>
          Login success
        </h4>
        <Button onClick={logout}>logout</Button>
      </div>
    </Chat>
  );
};

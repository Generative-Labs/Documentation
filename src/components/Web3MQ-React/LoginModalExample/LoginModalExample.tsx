import React, { useEffect, useState } from 'react';
import { Client, WalletType } from '@web3mq/client';
import { Chat, AppTypeEnum, Button, LoginModal } from '@web3mq/react-components';

import useLogin from '../ChatExample/hooks/useLogin';

import ss from './index.module.css';

type UserAccountType = {
  userid: string;
  address: string;
  walletType: WalletType;
  userExist: boolean;
};
export const LoginModalExample: React.FC = (props: any) => {
  const { keys, fastestUrl, init, logout, handleLoginEvent } = useLogin();
  const [appType, setAppType] = useState(
    window.innerWidth <= 600 ? AppTypeEnum['h5'] : AppTypeEnum['pc'],
  );
  const handleAppType = () => {
    setAppType(window.innerWidth <= 600 ? AppTypeEnum['h5'] : AppTypeEnum['pc']);
  };

  useEffect(() => {
    init()
    document.getElementsByTagName('body')[0].setAttribute('data-theme', 'light');
    window.addEventListener('resize', handleAppType);
    () => {
      window.removeEventListener('resize', handleAppType)
    }
  }, []);

  if (!keys) {
    let mainKeys: any = null;
    const mainPrivateKey = localStorage.getItem(`MAIN_PRIVATE_KEY`);
    const mainPublicKey = localStorage.getItem(`MAIN_PUBLIC_KEY`);
    const address = localStorage.getItem('WALLET_ADDRESS');
    if (mainPublicKey && mainPrivateKey && address) {
      mainKeys = {
        publicKey: mainPublicKey,
        privateKey: mainPrivateKey,
        walletAddress: address,
      };
    }
    return (
      <div 
        id='loginModalBox'
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
          containerId='loginModalBox'
          keys={mainKeys}
          isShow={true}
          modalClassName={ss.modalClassName}
          handleLoginEvent={handleLoginEvent}
          loginBtnNode={<Button size='large' type='ghost'>Login</Button>}
        />
      </div>
    )
  }

  if (!fastestUrl) {
    return null;
  }

  const client = Client.getInstance(keys);

  return (
    <Chat containerId='box' client={client} appType={appType} logout={logout}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <h4>
          Login success!
        </h4>
        <Button onClick={logout}>logout</Button>
      </div>
    </Chat>
  );
};

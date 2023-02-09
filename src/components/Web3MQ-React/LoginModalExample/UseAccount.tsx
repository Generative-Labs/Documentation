import React, { useEffect, useMemo, useState } from 'react';
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
export const LoginModalWithAccount: React.FC = (props: any) => {
  const { keys, fastestUrl, init, logout, handleLoginEvent } = useLogin();
  const hasAccount = useMemo(() => {
    const address = localStorage.getItem('doc_test_address') || '';
    const walletType = localStorage.getItem('doc_test_walletType') || '';
    const userid = localStorage.getItem('doc_test_userid') || '';
    const userExist = localStorage.getItem('doc_test_userExist') === 'true' ? true : false;
    if (address && walletType && userid && userExist) {
      return { address, walletType, userid, userExist };
    }
    return undefined;
  }, [])
  const [account, setAccount] = useState<UserAccountType | undefined>(hasAccount as any);
  const [appType, setAppType] = useState(
    window.innerWidth <= 600 ? AppTypeEnum['h5'] : AppTypeEnum['pc'],
  );
  const handleAppType = () => {
    setAppType(window.innerWidth <= 600 ? AppTypeEnum['h5'] : AppTypeEnum['pc']);
  };
  const getAccount = async (
    didType: WalletType = 'eth',
    address?: string,
  ): Promise<void> => {
    let didValue = address;
    if (!didValue) {
      const { address } = await Client.register.getAccount(didType);
      didValue = address;
    }
    if (didValue) {
      const { userid, userExist } = await Client.register.getUserInfo({
        did_value: didValue,
        did_type: didType,
      });
      localStorage.setItem('doc_test_address', didValue)
      localStorage.setItem('doc_test_walletType', didType);
      localStorage.setItem('doc_test_userid', userid);
      localStorage.setItem('doc_test_userExist', String(userExist))
      setAccount({
        userid,
        address: didValue as string,
        walletType: didType,
        userExist,
      });
    }
  };

  useEffect(() => {
    init()
    document.getElementsByTagName('body')[0].setAttribute('data-theme', 'light');
    window.addEventListener('resize', handleAppType);
    () => {
      window.removeEventListener('resize', handleAppType)
    }
  }, []);

  if (!fastestUrl) {
    return null;
  }

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
        id='loginModalWithAccountBox'
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
        {!account && <Button size='large' onClick={() => getAccount()} style={{marginRight: '10px'}}>connect wallet</Button>}
        {account && <LoginModal 
          account={account}
          appType={appType}
          containerId='loginModalWithAccountBox'
          keys={mainKeys}
          // isShow={true}
          modalClassName={ss.modalClassName}
          handleLoginEvent={handleLoginEvent}
          loginBtnNode={<Button size='large' type='ghost'>Login</Button>}
        />}
      </div>
    )
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

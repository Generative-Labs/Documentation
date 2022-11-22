import React, { useEffect, useState } from 'react';
import { Client } from 'web3-mq';
import { Chat, AppTypeEnum, useChatContext } from 'web3-mq-react';

import useLogin from './hooks/useLogin';

import ss from './index.module.css';

const CustomComponent: React.FC = () => {
  const { client, appType, userInfo, containerId, showListTypeView } = useChatContext();
  console.log(client, 'Client Instance')
  return (
    <div className={ss.custom_box} style={{wordBreak: 'break-all'}}>
      <div><span>appType:</span> {appType}</div>
      <div><span>containerId:</span> {containerId}</div>
      <div><span>showListTypeView:</span> {showListTypeView}</div>
      <div><span>userId:</span> {userInfo?.userid}</div>
      <div><span>wallet_address:</span> {userInfo?.wallet_address}</div>
      <div><span>wallet_address:</span> {userInfo?.wallet_type}</div>
    </div>
  )
}

export const ChatExample: React.FC = () => {
  const { keys, fastestUrl, init, signMetaMask, logout } = useLogin();
  const [appType, setAppType] = useState(
    window.innerWidth <= 600 ? AppTypeEnum['h5'] : AppTypeEnum['pc'],
  );
  const handleAppType = () => {
    setAppType(window.innerWidth <= 600 ? AppTypeEnum['h5'] : AppTypeEnum['pc']);
  };
  useEffect(() => {
    init();
    window.addEventListener('resize', handleAppType);
    () => {
      window.removeEventListener('resize', handleAppType)
    }
  }, []);

  if (!keys) {
    return (
      <div>
        <button className={ss.login_btn} onClick={signMetaMask}>MetaMask</button>
      </div>
    );
  }

  if (!fastestUrl) {
    return null;
  }

  const client = Client.getInstance(keys);

  return (
    <div id='box' style={{position: 'relative', width: '100%', overflow: 'auto'}}>
      <Chat containerId='box' client={client} appType={appType} logout={logout}>
        <CustomComponent />
      </Chat>
    </div>
  );
};

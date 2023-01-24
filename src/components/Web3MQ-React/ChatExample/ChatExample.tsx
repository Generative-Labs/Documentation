import React, { useEffect, useState } from 'react';
import { Client } from 'web3-mq';
import { Chat, AppTypeEnum, Button, useChatContext } from 'web3-mq-react';

import useLogin from './hooks/useLogin';

import ss from './index.module.css';

const CustomComponent: React.FC = () => {
  const { client, appType, loginUserInfo, containerId, showListTypeView } = useChatContext();
  console.log(client, 'Client Instance')
  return (
    <div className={ss.custom_box} style={{wordBreak: 'break-all'}}>
      <div><span>appType:</span> {appType}</div>
      <div><span>containerId:</span> {containerId}</div>
      <div><span>showListTypeView:</span> {showListTypeView}</div>
      <div><span>userId:</span> {loginUserInfo?.userid}</div>
      <div><span>wallet_address:</span> {loginUserInfo?.wallet_address}</div>
      <div><span>wallet_type:</span> {loginUserInfo?.wallet_type}</div>
    </div>
  )
}

export const ChatExample: React.FC = () => {
  const { keys, fastestUrl, init, logout, } = useLogin();
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
      <Button size='large' type='ghost'><a href="/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/LoginModal#basic-usage" style={{textDecoration: 'none'}}>Please login first</a></Button>
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

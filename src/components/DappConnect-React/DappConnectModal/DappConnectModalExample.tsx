import React, { useEffect, useState } from 'react';
import { Button } from '@web3mq/react-components';
import { DappConnectModal } from '@web3mq/dapp-connect-react';
import {DappConnect, WalletMethodMap} from '@web3mq/dapp-connect';

import ss from './index.module.css';

enum AppTypeEnum {
  'pc' = 'pc',
  'h5' = 'h5',
  'mobile' = 'mobile',
}

export const DappConnectModalExample = () => {
  const [client, setClient] = useState<DappConnect>();
  const [walletAddress, setWalletAddress] = useState('');
  const [signRes, setSignRes] = useState('');
  const [appType, setAppType] = useState(
      window.innerWidth <= 600 ? AppTypeEnum['h5'] : AppTypeEnum['pc']
  );

  useEffect(() => {
    document.body.setAttribute('data-theme', 'light');
    window.addEventListener('resize', () => {
      setAppType(
          window.innerWidth <= 600 ? AppTypeEnum['h5'] : AppTypeEnum['pc']
      );
    });
  }, []);

  const init = async () => {
    const dappConnect = new DappConnect({ dAppID: 'SwapChat:im'}, () => {});
    setClient(dappConnect);
  };
  const handleModalSuccess = async (event: any) => {
    const { method, result } = event
    if (method === WalletMethodMap.providerAuthorization) {
      console.log('connect success, wallet address is : ', result?.address);
      setWalletAddress(result?.address || '');
    }
    if (method === WalletMethodMap.personalSign) {
      console.log('sign success: ', result?.signature);
      setSignRes(result?.signature || '');
    }
  }
  const sign = async () => {
    await client?.sendSign({
      signContent: 'test sign out',
      address: walletAddress || '',
      password: 'test sign without react',
    });
  };

  useEffect(() => {
    console.log(signRes, 'signRes')
  }, [signRes]);

  return (
      <div id='dappConnectContainer' className={ss.appContainer}>
        <div style={{color: '#18181b', marginBottom: '6px', textAlign: 'center'}}>
          Step1: you should create client of DappConnect.
        </div>
        <Button onClick={init}>init DappConnectModal</Button>
        <div style={{height: '1px', width: '100%', margin: '6px 0px', backgroundColor: '#a1a1aa'}} />
        {(client) && (
            <div>
              <DappConnectModal
                  containerId='dappConnectContainer'
                  client={client}
                  appType={appType}
                  handleSuccess={handleModalSuccess}
                  signBtnNode={
                    <Button onClick={sign}>sign</Button>}
              />
            </div>
        )}
        <div>{walletAddress && <p>{'connect success, wallet address is : ' + walletAddress}</p>}</div>
        <div>{signRes && <p>{'sign success, signature is : ' + signRes}</p>}</div>
      </div>
  );
}
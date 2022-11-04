import React, { useEffect, useMemo, useState } from "react";
import { Client, KeyPairsType } from 'web3-mq'
import { CommonButton } from '../CommonButton';
import ss from './index.module.css';

export const SignMetaMaskButton = () => {
  const hasKeys = useMemo(() => {
    const PrivateKey = localStorage.getItem('PRIVATE_KEY') || '';
    const PublicKey = localStorage.getItem('PUBLICKEY') || '';
    const userid = localStorage.getItem("USERID") || "";
    if (PrivateKey && PublicKey && userid) {
      return { PrivateKey, PublicKey, userid };
    }
    return null;
  }, []);
  const [keys, setKeys] = useState<KeyPairsType | null>(hasKeys);

  const init = async () => {
    const fastUrl = await Client.init({
      connectUrl: localStorage.getItem('FAST_URL'),
      app_key: 'vAUJTFXbBZRkEDRE',
      env: 'dev',
    });
    localStorage.setItem('FAST_URL', fastUrl);
  };

  const sign = async() => {
    const { PrivateKey, PublicKey, userid } = await Client.register.signMetaMask({
      signContentURI: 'https://www.web3mq.com'
    });
    localStorage.setItem('PRIVATE_KEY', PrivateKey);
    localStorage.setItem('PUBLICKEY', PublicKey);
    localStorage.setItem("USERID", userid);
    setKeys({ PrivateKey, PublicKey, userid });
  }
  useEffect(() => {
    init();
  }, [])

  return (
    <div className={ss.signMetaMaskContent}>
      <CommonButton text="signMetaMask" onClick={sign} />
      <div className={ss.userId}>your userid: {keys && keys.userid}</div>
    </div>
  )
}
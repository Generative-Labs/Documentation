import React, { useEffect, useMemo, useState } from "react";
import { Client, KeyPairsType } from "web3-mq";
import { AppTypeEnum, LoginModal } from "web3-mq-react";
import { CommonButton } from "../CommonButton";
import ss from './index.module.css';
import "web3-mq-react/dist/css/index.css";
import useLogin from "../hooks/useLogin";

export const SignMetaMaskButton = () => {
  const { keys, init, handleLoginEvent } = useLogin();

  useEffect(() => {
    init().then();
    document
      .getElementsByTagName("body")[0]
      .setAttribute("data-theme", "light");
  }, []);

  if (!keys) {
      let mainKeys = null;
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
          return <LoginModal
              keys={mainKeys}
              handleLoginEvent={handleLoginEvent}
              appType={AppTypeEnum.pc}
              loginBtnNode={
                  <CommonButton text="Register or login" onClick={() => {
                  }}/>
              }
              containerId={''}/>
  }


  return (
    <div className={ss.signMetaMaskContent} id="register-demo">
      <div className={ss.userId}>your userid: {keys && keys.userid}</div>
    </div>
  );
};

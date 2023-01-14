import React, { useEffect, useMemo, useState } from "react";
import { Client, KeyPairsType } from "web3-mq";
import { AppTypeEnum, LoginModal } from "web3-mq-react";
import { CommonButton } from "../CommonButton";
import ss from "./index.module.css";
import "web3-mq-react/dist/css/index.css";
import useLogin from "../hooks/useLogin";

export const SignMetaMaskButton = () => {
  const { login, getEthAccount, register, keys, init } = useLogin();

  useEffect(() => {
    init().then();
    document
      .getElementsByTagName("body")[0]
      .setAttribute("data-theme", "light");
  }, []);

  return (
    <div className={ss.signMetaMaskContent} id="register-demo">
      {keys ? (
        <div className={ss.userId}>your userid: {keys && keys.userid}</div>
      ) : (
        <LoginModal
          appType={AppTypeEnum.pc}
          register={register}
          login={login}
          getEthAccount={getEthAccount}
          loginBtnNode={
            <CommonButton text="Register or login" onClick={() => {}} />
          }
        />
      )}
    </div>
  );
};

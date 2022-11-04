import React from "react";
import { Client } from 'web3-mq'
import { CommonButton } from '../CommonButton';

export const InitClientButton = () => {
  const getInstance = () => {
    const PrivateKey = localStorage.getItem('PRIVATE_KEY') || '';
    const PublicKey = localStorage.getItem('PUBLICKEY') || '';
    const userid = localStorage.getItem("USERID") || "";
    if(PrivateKey &&  PublicKey && userid) {
      const client = Client.getInstance({ PrivateKey, PublicKey, userid });
      console.log("Client Instance: ", client)
    } else {
      alert('You should execute the signMetaMask method first')
    }
  }
  
  return (
    <div>
      <CommonButton text="get Client instance" onClick={getInstance} />
    </div>
  )
}
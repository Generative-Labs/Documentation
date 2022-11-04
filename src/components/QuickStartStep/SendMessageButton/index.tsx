import React, { useState } from "react";
import { Client } from 'web3-mq'
import { CommonButton } from '../CommonButton';


export const SendMessageButton = () => {
  let client: Client;
  const [ value, setValue ] = useState('');
  const getInstance = () => {
    const PrivateKey = localStorage.getItem('PRIVATE_KEY') || '';
    const PublicKey = localStorage.getItem('PUBLICKEY') || '';
    const userid = localStorage.getItem("USERID") || "";
    if(PrivateKey &&  PublicKey && userid) {
      client = Client.getInstance({ PrivateKey, PublicKey, userid });
    } else {
      alert('You should execute the signMetaMask method first')
    };
  }
  const sendMessage = async () => {
    getInstance();
    if(client) {
      await client.message.sendMessage(value);
      setValue('')
    }
  };
  
  return (
    <div>
      <input
        style={{
          padding: '12px'
        }} 
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
      />
      <CommonButton text="send message" onClick={sendMessage} />
    </div>
  )
}
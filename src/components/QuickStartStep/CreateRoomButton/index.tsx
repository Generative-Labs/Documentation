import React from "react";
import { Client } from 'web3-mq'
import { CommonButton } from '../CommonButton';


export const CreateRoomButton = () => {
  let client: Client;

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
  const createRoom = async () => {
    getInstance();
    await client.channel.createRoom({});
    console.log('create Chat Room successful')
  };
  
  return (
    <div>
      <CommonButton text="create Room" onClick={createRoom} />
    </div>
  )
}
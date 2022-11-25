import React, { useEffect, useState } from "react";
import { Client, EventTypes } from 'web3-mq'
import { CommonButton } from '../CommonButton';

type IProps = {
  client: Client
}
export const SendMessageButton = (props: IProps) => {
  const { client } = props
  const [ value, setValue ] = useState('');
  const [ message, setMessage ] = useState<any>('');
  const sendMessage = async () => {
    if(client) {
      if(client.channel.channelList?.length) {
        client.channel.setActiveChannel(client.channel.channelList[0]);
      } else {
        alert('You should create Chat Room')
      }
      await client.message.sendMessage(value);
      setValue('');
      setMessage(client.message.msg_text);
    }
  };

  const handleEvent = (props: { type: EventTypes }) => {
    const { type } = props;
    const { msg_text } = client.message;
    if (type === 'message.delivered') {
      setMessage(msg_text);
    }
  }
  useEffect(() => {
    client.on('channel.activeChange', handleEvent);
    client.on('message.delivered', handleEvent);
    () => {
      client.off('message.delivered', handleEvent);
      client.off('channel.activeChange', handleEvent)
    }
  }, [])
  return (
    <div style={{width: '100%'}}>
      <input
        style={{
          padding: '12px',
          marginRight: '5px'
        }} 
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
      />
      <CommonButton text="send message" onClick={sendMessage} />
      <div>
        your current message: {message}
      </div>
    </div>
  )
}
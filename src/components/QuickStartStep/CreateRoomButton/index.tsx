import React, { useState, useEffect, useMemo } from "react";
import { Client, EventTypes } from 'web3-mq'
import { CommonButton } from '../CommonButton';
import ss from './index.module.css';

type IProps = {
  client?: Client
}
export const CreateRoomButton = (props: IProps) => {
  const { client } = props;
  const [channels, setChannels] = useState<any>([]);
  const createRoom = async () => {
    await client?.channel.createRoom({});
    console.log('create Chat Room successful');
    setChannels(client?.channel.channelList)
  };
  const getChannelList = async() => {
    await client?.channel.queryChannels({page: 1, size: 20});
  };
  const handleEvent = (props: { type: EventTypes }) => {
    const { channelList } = (client as any).channel;
  }

  useEffect(() => {
    client?.on('channel.getList', handleEvent);
    getChannelList();
    () => {
      client?.off('channel.getList', handleEvent)
    }
  }, []);

  return (
    <div className={ss.createRoomContent}>
      <CommonButton text="create Room" onClick={createRoom} />
      <div className={ss.text}>your create Room currently: {channels[0]?.chatid}</div>
    </div>
  )
}
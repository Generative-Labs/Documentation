import React, { useEffect } from 'react';
import { Client } from 'web3-mq';
import { AppTypeEnum, Chat, DashBoard } from 'web3-mq-react';

import useLogin from '../ChatExample/hooks/useLogin';

import ss from './index.module.css';

const MobileTabMaps = [
  {
    title: 'Tab1',
    icon: null,
    type: 'Tab1',
    component: <div>Tab1</div>,
  },
  {
    title: 'Tab2',
    icon: null,
    type: 'Tab2',
    component: <div>Tab2</div>,
  },
  {
    title: 'Tab3',
    icon: null,
    type: 'Tab3',
    component: <div>Tab3</div>,
  },
]
const CustomChannelHead = () => {
  return (
    <div style={{height: '50px', borderBottom: '1px solid black', lineHeight: '50px', textAlign: 'center'}}>
      this is Custom Head
    </div>
  )
}
export const DashBoardExample: React.FC = (props: any) => {
  const { type } = props;
  const { keys, init, fastestUrl, logout } = useLogin();
  
  useEffect(() => {
    init();
  }, [])

  if (!keys) {
    return (
      <div>
        <button className={ss.link_btn}><a href="/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Chat#basic-usage">请先在Chat部分进行登录操作</a></button>
      </div>
    );
  }
  if (!fastestUrl) {
    return null;
  }

  const client = Client.getInstance(keys);

  return (
    <div id='box' style={{position: 'relative', border: '1px solid #f2f2f2',  width: '100%',height: '600px',overflow: 'auto'}}>
      <Chat containerId='box' client={client} appType={AppTypeEnum['h5']} logout={logout}>
        <DashBoard 
          defaultType = {type === 'custom' ? 'Tab1' : 'room'}
          MobileTabMaps = {type === 'custom' ? MobileTabMaps : undefined}
          ChannelHead = {type === 'custom' ? CustomChannelHead : undefined}
        />
      </Chat>
    </div>
  );
};
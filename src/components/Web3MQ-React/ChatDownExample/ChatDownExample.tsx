import React from 'react';
import { ChatDown } from '@web3mq/react-components';


export const ChatDownExample: React.FC = (props: any) => {
  
  return (
    <>
      <ChatDown 
        type={props.type === 'custom' ? 'success' : 'Error'} 
        image={props.type === 'custom' ? 'https://img1.baidu.com/it/u=3142555664,1849943442&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500' : ''}
        text={props.type === 'custom' ? 'submit successfully' : ''}
      />
    </>
  );
}; 
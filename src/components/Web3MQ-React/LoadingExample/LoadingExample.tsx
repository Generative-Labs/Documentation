import React from 'react';
import { Loading } from 'web3-mq-react';

export const LoadingExample: React.FC = () => {
 
  return (
    <div style={{display: 'flex', width: '100%'}}>
      <Loading />
      <Loading type='spin'/>
    </div>
  );
}; 
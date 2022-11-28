import React from 'react';
import { toast } from 'web3-mq-react';

export const ToastExample: React.FC = () => {

  return (
    <div style={{width: '100%'}}>
      <button 
        onClick={() => toast.success('success')} 
        style={{
          marginRight: '16px', 
          width: '100px', 
          height: '30px', 
          borderRadius: '30px',
          border: 'none',
          color:' #FFFFFF',
          background: '#337DCF',
          fontWeight: 'bold',
          fontSize: '14px',
          cursor: 'pointer'
        }}
      >
        success
      </button>
      <button 
        onClick={() => toast.error('error')}
        style={{
          width: '100px', 
          height: '30px', 
          borderRadius: '30px',
          border: 'none',
          color:' #FFFFFF',
          background: '#337DCF',
          fontWeight: 'bold',
          fontSize: '14px',
          cursor: 'pointer'
        }}
      >
        error
      </button>
    </div>
  );
}; 
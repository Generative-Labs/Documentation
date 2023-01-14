import React, { useEffect } from 'react';
import { Popover } from 'web3-mq-react';


export const PopoverExample: React.FC = () => {
  useEffect(() => {
    document.getElementsByTagName('body')[0].setAttribute('data-theme', 'light');
  }, [])
  return (
    <div style={{display: 'flex', width: '100%', padding: '20px 10px'}}>
      <Popover content='content'>
        <div 
          style={{
            width: '195px',
            height: '48px',
            borderRadius: '49px',
            border: 'none',
            color:' #FFFFFF',
            background: '#337DCF',
            fontWeight: 'bold',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          Hover me
        </div>
      </Popover>
    </div>
  );
}; 
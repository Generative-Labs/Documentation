import React, { useEffect } from 'react';
import { Button } from '@web3mq/react-components';

import ss from './index.module.css';


export const ButtonExample: React.FC = () => {
  useEffect(() => {
    document.getElementsByTagName('body')[0].setAttribute('data-theme', 'light');
  }, [])
  return (
    <div className={ss.buttonExample}>
      <div className={ss.group}>
        <span>default button</span><Button>Button</Button>
      </div>
      <div className={ss.group}>
        <span>disabled</span>
        <Button disabled>disabled</Button>
      </div>
      <div className={ss.group}>
        <span>different size</span>
        <Button size='small'>small</Button>
        <Button>default</Button>
        <Button size='large'>large</Button>
      </div>
      <div className={ss.group}>
        <span>different type</span>
        <Button type='primary'>primary</Button>
        <Button>default</Button>
        <Button type='danger'>danger</Button>
        <Button type='ghost'>ghost</Button>
      </div>
    </div>
  );
}; 
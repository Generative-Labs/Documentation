import React, { useState, useEffect } from 'react';
import { Button, Modal } from '@web3mq/react-components';

import ss from './index.module.css';

export const ModalExample: React.FC = () => {
  const [ visible, setVisible ] = useState(false);

  useEffect(() => {
    document.getElementsByTagName('body')[0].setAttribute('data-theme', 'light');
  }, [])
  return (
    <>
      <Button type='ghost' onClick={() => setVisible(true)}>Open Modal</Button>
      <Modal 
        containerId='modalBox'
        dialogClassName={ss.dialogClassName}
        visible={visible}
        closeModal={() => setVisible(false)}
        title='title'
      >
        <>
          <div>Basic Usage</div>
          <div>Basic Usage</div>
          <div>Basic Usage</div>
          <div>Basic Usage</div>
        </>
      </Modal>
    </>
  );
}; 
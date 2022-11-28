import React, { useState } from 'react';
import { Modal } from 'web3-mq-react';


export const ModalExample: React.FC = () => {
  const [ visible, setVisible ] = useState(false);
  return (
    <>
      <button style={{
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
      }} onClick={() => setVisible(true)}>Open Modal</button>
      <Modal 
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
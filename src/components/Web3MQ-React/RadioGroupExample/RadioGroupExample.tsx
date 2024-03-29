import React, { useEffect } from 'react';
import { RadioGroup } from '@web3mq/react-components';

const values = [
  {
    id: '1',
    name: 'A',
  },
  {
    id: '2',
    name: 'B',
  },
  {
    id: '3',
    name: 'C',
  },
  {
    id: '4',
    name: 'D',
  }
]
export const RadioGroupExample: React.FC = () => {
  useEffect(() => {
    document.getElementsByTagName('body')[0].setAttribute('data-theme', 'light');
  }, [])
  const handleChange = (value) => {
    console.log(value, 'value')
  }
  return (
    <div style={{display: 'flex', width: '100%', padding: '20px 10px'}}>
      <RadioGroup value={values} onChange={handleChange} />
    </div>
  );
}; 
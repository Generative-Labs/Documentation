import React from 'react';
import { RadioGroup } from 'web3-mq-react';

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
  const handleChange = (value) => {
    console.log(value, 'value')
  }
  return (
    <div style={{display: 'flex', width: '100%', padding: '20px 10px'}}>
      <RadioGroup value={values} onChange={handleChange} />
    </div>
  );
}; 
import React, { useEffect, useRef, useState } from 'react';
import { ChannelListMessenger } from '@web3mq/react-components';

export const ChannelListMessengerExample: React.FC = () => {
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);
  const [ list, setList ] = useState<Array<string>>([]);
  const listref = useRef<HTMLDivElement | null>(null);

  const getList = () => {
    new Promise((resolve) => {
      setLoading(true);
      setTimeout(() => {
        const data = new Array(10).fill(0).map((item, index) => `web3mq content - ${index}`)
        setList(data);
        resolve(data)
      }, 1500);
    }).then(() => {
      setLoading(false);
    }).catch(() => {
      setError(true)
    });
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <div ref={listref} style={{position: 'relative', width: '100%', overflow: 'auto'}}>
      <ChannelListMessenger error={error} loading={loading} listRef={listref}>
        {list.map((item, index) => {
          return <div key={index} style={{padding: '5px 0px' ,borderBottom: '1px solid rgba(0,0,0,.06)', color: 'rgba(0,0,0,.45)', fontSize: '14px'}}>{item}</div>
        })}
      </ChannelListMessenger>
    </div>
  );
};
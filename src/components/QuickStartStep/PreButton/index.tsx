import React, { useEffect } from "react";
import { Client } from 'web3-mq'
import useLogin from '../hooks/useLogin';


export const PreButton = (props: any) => {
  const { keys, init, fastestUrl } = useLogin();
  
  useEffect(() => {
    init();
  }, [])

  if(!keys) {
    return (
      <div style={{color: 'red'}}>You should execute the signMetaMask method first</div>
    )
  };
  if (!fastestUrl) {
    return null;
  }
  const client: Client = Client.getInstance(keys);
  
  return (
    <>
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {
          'client': client
        })
        // return child
      })}
    </>
  )
}
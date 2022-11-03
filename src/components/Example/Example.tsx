import React from "react";
import { IosNotch } from './icons/IosNotch';
import ss from './index.module.css';

type IProps = {
  src: string
}

export const Example = (props: IProps) => {
  const { src } = props
  return(
    <div className={ss['docs-demo-device']}>
      <IosNotch className={ss['docs-demo-device__ios-notch']} />
      <iframe src={src} loading="lazy"></iframe>
    </div>
  )
}
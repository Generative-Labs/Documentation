import React, { FC } from "react";
import ss from './index.module.css';

type IProps = {
  text: string,
  onClick: () => void
};

export const CommonButton: FC<IProps> = (props) => {
  const { text, onClick } = props;

  return (
    <button className={ss.commonButton} onClick={onClick}>{text}</button>
  )
}
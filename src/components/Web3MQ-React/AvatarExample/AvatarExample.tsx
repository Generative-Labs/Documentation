import React from 'react';
import { Avatar } from 'web3-mq-react';

import ss from './index.module.css';


export const AvatarExample: React.FC = () => {
 
  return (
    <div className={ss.avatarExample}>
      <div className={ss.group}>
        <span>默认头像</span><Avatar />
      </div>
      <div className={ss.group}>
        <span>带url的头像</span><Avatar image='https://joeschmoe.io/api/v1/random' />
      </div>
      <div className={ss.group}>
        <span>不同尺寸的头像</span>
        <Avatar size={42} />
        <Avatar />
        <Avatar size={22} />
      </div>
      <div className={ss.group}>
        <span>不同轮廓的头像</span>
        <Avatar image='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F14%2F20210614155250_6f356.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672067359&t=89ba6eacae54d348b4f39f94692223d3' />
        <Avatar shape='rounded' image='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F14%2F20210614155250_6f356.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672067359&t=89ba6eacae54d348b4f39f94692223d3' />
        <Avatar shape='square' image='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F14%2F20210614155250_6f356.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672067359&t=89ba6eacae54d348b4f39f94692223d3' />
      </div>
    </div>
  );
}; 
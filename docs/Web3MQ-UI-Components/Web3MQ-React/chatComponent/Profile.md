
# Profile
`Profile`是展示个人信息页的组件，组件内会通过ChatContext获取logout方法，需要在配合`Chat`使用。

## Basic Usage
`Profile`组件在AvatarNode是否存在情况下是两种风格不同的组件，在AvatarNode存在会展示头像，通过点击头像显示modal里面展示信息；AvatarNode不存在则直接展示页面里面渲染信息；`Profile`默认从`chatcontext`获取用户信息并展示，也可以通过props传入userInfo来展示。

import { Layout } from '@site/src/components/Layout'
import { ProfileExample } from '@site/src/components/Web3MQ-React/ProfileExample';
import ProfileMdx from '@site/src/components/Web3MQ-React/ProfileExample/ProfileExample.mdx';
import 'web3-mq-react/dist/css/index.css';

<Layout
title='Example'
description='This is the Profile example'
code={<ProfileMdx />}>
<ProfileExample />
</Layout>

## API

| Property     | Description                            | Type                | Default    |
| ------------ | -------------------------------------- | ------------------- | ---------- |
|  AvatarNode  | 显示自定义头像组件，用于appType为'pc'状态下 | ReactNode           |    -       |
|  isTab       | 显示返回按钮，用于appType为'h5'状态下      | Boolean             |    -       |
|  hasLogout   | 用于显示退出按钮                          | Boolean             |    -       |
|  userInfo    | 设置用户信息                             | [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse)      |    -       |
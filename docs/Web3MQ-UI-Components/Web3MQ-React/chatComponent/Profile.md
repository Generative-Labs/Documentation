
# Profile
`Profile` is a component that displays display userinfo. 

## Basic Usage
By default, `Profile` gets userinfo through `useChatcontext` and displays it. You can also display it by passing the userInfo as props.

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
|  AvatarNode  | set the custom avatar part when appType is 'pc' | ReactNode           |    -       |
|  isTab       | sets the display of the back button   | Boolean             |    -       |
|  hasLogout   | set the display of exit button        | Boolean             |    -       |
|  userInfo    | set userinfo                          | [SearchUsersResponse](/docs/Web3MQ-SDK/JS-SDK/types/#searchusersresponse)      |    -       |
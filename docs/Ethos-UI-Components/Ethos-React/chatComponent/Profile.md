
# Profile
`Profile` is a component that displays display userinfo. 

## Basic Usage
By default, `Profile` gets userinfo through `useChatcontext` and displays it. You can also display it by passing the userInfo as props.

import { Layout } from '@site/src/components/Layout'
import { ProfileExample } from '@site/src/components/Web3MQ-React/ProfileExample';
import ProfileMdx from '@site/src/components/Web3MQ-React/ProfileExample/ProfileExample.mdx';
import '@web3mq/react-components/dist/css/index.css';

<Layout
title='Example'
description='This is the Profile example'
code={<ProfileMdx />}>
<ProfileExample />
</Layout>

## API
### Profile
| Property     | Description                            | Type                | Default    | required |
| ------------ | -------------------------------------- | ------------------- | ---------- | -------- |
|  AvatarNode  | set the custom avatar part when appType is 'pc' | ReactNode           |    -       |  false  |
|  isTab       | sets the display of the back button   | Boolean             |    -       |  false  |
|  hasLogout   | set the display of exit button        | Boolean             |    -       |  false  |
|  userInfo    | set userinfo                          | [CommonUserInfoType](/docs/Ethos-UI-Components/Ethos-React/chatComponent/Chat#commonuserinfotype)  |    -       |  false  |
---
sidebar_position: 0
---

# Tutorial

## Prerequisites

#### You need to install metamask on your device first

> Download Address： https://metamask.io/download/

#### Install web3-mq

```shell
npm install web3-mq
or
yarn add web3-mq
```

## Official start

### Connect MetaMask

```typescript
import Web3 from "web3";

const getEthAccount = async () => {
    //@ts-ignore
    const web3 = new Web3(window.ethereum);
    let address = "";
    // @ts-ignore
    const permissionRes = await web3.currentProvider
        // @ts-ignore
        .request({
            method: "wallet_requestPermissions",
            params: [{eth_accounts: {}}],
        })
        .catch((e: any) => {
            console.log(e);
        });
    if (permissionRes) {
        const accounts = await web3.eth.requestAccounts();
        address = accounts[0];
        console.log("连接的地址", address);
    }
    return address;
};
```

### Register Web3MQ user

```typescript
import {PLATFORM_ENUM, register} from "web3-mq";


const registerUser = async () => {
    const address = await getEthAccount();
    const data = await register({
        platform: PLATFORM_ENUM.OPENSEA,
        user_name: address,
    });
    console.log(data, "data");
    // response
    // const res = {
    //   user_id: "61f1323bfa9373fc26460471",
    //   nick_name: "zhaowei62583836",
    //   twitter_username: "zhaowei62583836",
    //   twitter_avatar:
    //     "https://pbs.twimg.com/profile_images/1473570954345390080/YkQ8AuHu_normal.png",
    //   instagram_username: "",
    //   instagram_avatar: "",
    //   facebook_username: "",
    //   facebook_avatar: "",
    //   discord_username: "",
    //   discord_avatar: "",
    //   opensea_username: "zhaoweiHouseChan",
    //   opensea_avatar:
    //     "https://storage.googleapis.com/opensea-static/opensea-profile/8.png",
    //   eth_wallet_address: "0x9b6a5a1dd55ea481f76b782862e7df2977dffe6c",
    //   ens_name: "",
    //   status: "0100001",
    //   created_at: 0,
    // };

    return data;
};

```

### Create Web3MQ client connection

```typescript
import {MetaMask, PLATFORM_ENUM, register} from "web3-mq";


const getLoginToken = async () => {
    const token = await MetaMask.signMetaMask();
    console.log(token, "token");

    return token;
};

const initClient = async () => {
    const token = await getLoginToken();
    const client = Web3MQ.getInstance(token as string);

    client.on('channel.created', (event: any) => {
        console.log(event)
        console.log('create channel')
    })
    client.on('channel.activeChange', (event: any) => {
        console.log(event)
        console.log('channel activeChange')
    })
    client.on('channel.updated', (event: any) => {
        console.log(event)
        console.log('channel.updated')
    })
    client.on('message.getList', (event: any) => {
        console.log(event)
        console.log('message.getList')
    })
    console.log(client);
    return client;
};
```

### Create Web3MQ chat room and send message

```typescript

const sendMessage = async () => {
    const client = await initClient();
    // 1st: Find a person you want to talk to
    // Eg: SwapChatNFT's twitter
    const receiver = await register({
        platform: PLATFORM_ENUM.OPENSEA,
        user_name: "0x7236b0f4f1409afdc7c9fc446943a7b84b6513a1",
    });
    console.log(receiver.data.user_id);
    // 2nd: Create room and set avtive room
    await client.channel.createRoom({
        user_id: receiver.data.user_id,
    });
    // 3rd: Get active room from client context
    const activeChannel = client.channel.activeChannel;
    // 4th: send a message to active room
    const messageData = {
        to: activeChannel?.room_id, // active room id
        msg_type: MsgTypeEnum.text, // message type
        msg_contents: 'hello world', // message content
        from_uid: client.user.userInfo.user_id, // from user id
    }
    client.send(messageData);
};
```

### React Demo

```typescript jsx
import {MetaMask, MsgTypeEnum, PLATFORM_ENUM, register, Web3MQ} from "web3-mq";
import Web3 from "web3";

const App: React.FC = () => {
    // request permissions and get your wallet address
    const getEthAccount = async () => {
        //@ts-ignore
        const web3 = new Web3(window.ethereum);
        let address = "";
        // @ts-ignore
        const permissionRes = await web3.currentProvider
            // @ts-ignore
            .request({
                method: "wallet_requestPermissions",
                params: [{eth_accounts: {}}],
            })
            .catch((e: any) => {
                console.log(e);
            });
        if (permissionRes) {
            const accounts = await web3.eth.requestAccounts();
            address = accounts[0];
            console.log("连接的地址", address);
        }
        return address;
    };

    const registerUser = async () => {
        const address = await getEthAccount();
        const data = await register({
            platform: PLATFORM_ENUM.OPENSEA,
            user_name: address,
        });
        console.log(data, "data");
        // response
        // const res = {
        //   user_id: "61f1323bfa9373fc26460471",
        //   nick_name: "zhaowei62583836",
        //   twitter_username: "zhaowei62583836",
        //   twitter_avatar:
        //     "https://pbs.twimg.com/profile_images/1473570954345390080/YkQ8AuHu_normal.png",
        //   instagram_username: "",
        //   instagram_avatar: "",
        //   facebook_username: "",
        //   facebook_avatar: "",
        //   discord_username: "",
        //   discord_avatar: "",
        //   opensea_username: "zhaoweiHouseChan",
        //   opensea_avatar:
        //     "https://storage.googleapis.com/opensea-static/opensea-profile/8.png",
        //   eth_wallet_address: "0x9b6a5a1dd55ea481f76b782862e7df2977dffe6c",
        //   ens_name: "",
        //   status: "0100001",
        //   created_at: 0,
        // };

        return data;
    };

    const getLoginToken = async () => {
        const token = await MetaMask.signMetaMask();
        console.log(token, "token");

        return token;
    };

    const initClient = async () => {
        const token = await getLoginToken();
        const client = Web3MQ.getInstance(token as string);

        client.on('channel.created', (event: any) => {
            console.log(event)
            console.log('create channel')
        })
        client.on('channel.activeChange', (event: any) => {
            console.log(event)
            console.log('channel activeChange')
        })
        client.on('channel.updated', (event: any) => {
            console.log(event)
            console.log('channel.updated')
        })
        client.on('message.getList', (event: any) => {
            console.log(event)
            console.log('message.getList')
        })
        console.log(client);
        return client;
    };

    const sendMessage = async () => {
        const client = await initClient();
        // 1st: Find a person you want to talk to
        // Eg: SwapChatNFT's twitter
        const receiver = await register({
            platform: PLATFORM_ENUM.OPENSEA,
            user_name: "0x7236b0f4f1409afdc7c9fc446943a7b84b6513a1",
        });
        console.log(receiver.data.user_id);
        // 2nd: Create room and set avtive room
        await client.channel.createRoom({
            user_id: receiver.data.user_id,
        });
        // 3rd: Get active room from client context
        const activeChannel = client.channel.activeChannel;
        // 4th: send a message to active room
        const messageData = {
            to: activeChannel?.room_id, // active room id
            msg_type: MsgTypeEnum.text, // message type
            msg_contents: 'hello world', // message content
            from_uid: client.user.userInfo.user_id, // from user id
        }
        client.send(messageData);
    };

    const testPrint = () => {
        console.log("测试按钮");
    };
    return (
        <div>
            <div style={{marginTop: "20px"}}>
                <button onClick={getEthAccount}>Get Eth Account Address</button>
            </div>
            <div style={{marginTop: "20px"}}>
                <button onClick={registerUser}>Register User</button>
            </div>
            <div style={{marginTop: "20px"}}>
                <button onClick={initClient}>Init Client</button>
            </div>
            <div style={{marginTop: "20px"}}>
                <button onClick={sendMessage}>Send Message</button>
            </div>
            <div style={{marginTop: "20px"}}>
                <button onClick={testPrint}>测试按钮</button>
            </div>
        </div>
    );
};

export default App;

```

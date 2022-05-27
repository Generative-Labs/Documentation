# Utils

### register()

> Register Web3MQ user

#### Code

```typescript
import { register } from "web3-mq";

const data = await register({
  platform: "opensea",
  username: "0x000000000",
});
```

#### Params

| name      | type   | Parameters Description |
| --------- | ------ | ---------------------- |
| platform  | String | Web3MQ platform        |
| user_name | String | username               |

> #### platform
>
> | platform | username(value)                                                         |
> | -------- | ----------------------------------------------------------------------- |
> | twitter  | twitter_username (twitter's user Handle)                                |
> | discord  | discord_username (discord's username and id Eg: HousechanWeiTest1#3111) |
> | opensea  | address (eth wallet Eg: 0x4a650684f2287bb0ad50da92f64f3970315ca276)     |

#### Response

```typescript
{
        "user_id":"628b88cd053b232c0101e***",
        "nick_name":"elonmusk", // web3-mq username
        "twitter_username":"elonmusk",
        "twitter_avatar":"",
        "instagram_username":"",
        "instagram_avatar":"",
        "facebook_username":"",
        "facebook_avatar":"",
        "discord_username":"",
        "discord_avatar":"",
        "opensea_username":"",
        "opensea_avatar":"",
        "eth_wallet_address":"", // eth wallet
        "ens_name":"",
        "status":"0000000", // user verfiy platform status
        /**
         * (0: Not verify  1: verified)
         * status:  0000000 | 1111111
         * 1: eth_wallet
         * 2: twitter
         * 3: instagram
         * 4: facebook
         * 5: discord
         * 6: opensea
         * 7: swapchat invite code
         * js String should start at 0
         **/
        "created_at":1653311693648421880
}
```

### getLoginRandomSecret()

> Get a random secret for eth personal sign

#### Code and Response

```typescript
import { getLoginRandomSecret } from "web3-mq";

const data = await getLoginRandomSecret({
  wallet_address: "0x0000000000",
});
// data: bfe3e4162187a5336baf034714a7****
```

#### Params

| name           | type   | Parameters Description |
| -------------- | ------ | ---------------------- |
| wallet_address | String | eth wallet             |

### login()

#### Code

```typescript
import { login } from "web3-mq";
const data = await login();
```

#### Params

| name                | type   | Parameters Description            |
| ------------------- | ------ | --------------------------------- |
| login_random_secret | String | getLoginRandomSecret api response |
| signature           | String | metamask personal_sign result     |
| wallet_address      | String | eth wallet                        |

#### Response

```typescript
{
  access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2....." // a JWT token
  user_info: {...} // see register response
}
```

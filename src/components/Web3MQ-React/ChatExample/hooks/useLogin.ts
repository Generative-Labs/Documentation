import { useMemo, useState } from "react";
import { Client, KeyPairsType } from "web3-mq";

const useLogin = () => {
  const hasKeys = useMemo(() => {
    const PrivateKey = localStorage.getItem("PRIVATE_KEY") || "";
    const PublicKey = localStorage.getItem("PUBLIC_KEY") || "";
    const userid = localStorage.getItem("userid") || "";
    if (PrivateKey && PublicKey && userid) {
      return { PrivateKey, PublicKey, userid };
    }
    return null;
  }, []);

  const [keys, setKeys] = useState<KeyPairsType | null>(hasKeys);
  const [fastestUrl, setFastUrl] = useState<string | null>(null);
  const [userAccount, setUserAccount] = useState<{
    userid: string;
    address: string;
  }>();

  const init = async () => {
    const tempPubkey = localStorage.getItem("PUBLIC_KEY") || "";
    const walletAddress = localStorage.getItem("WALLET_ADDRESS");
    const didKey = walletAddress ? `eth:${walletAddress}` : "";
    const fastUrl = await Client.init({
      connectUrl: localStorage.getItem("FAST_URL"),
      app_key: "vAUJTFXbBZRkEDRE",
      env: "dev",
      didKey,
      tempPubkey,
    });
    localStorage.setItem("FAST_URL", fastUrl);
    setFastUrl(fastUrl);
  };

  const getEthAccount = async () => {
    const { address } = await Client.register.getEthAccount();
    const { userid, userExist } = await Client.register.getUserInfo({
      did_value: address,
      did_type: "eth",
    });
    localStorage.setItem("userid", userid);
    setUserAccount({
      userid,
      address,
    });
    return {
      address,
      userid,
      userExist,
    };
  };

  const login = async (password: string) => {
    if (!userAccount) {
      return;
    }

    const localMainPrivateKey = localStorage.getItem("MAIN_PRIVATE_KEY") || "";
    const localMainPublicKey = localStorage.getItem("MAIN_PUBLIC_KEY") || "";

    const { userid, address } = userAccount;
    const {
      TempPrivateKey,
      TempPublicKey,
      pubkeyExpiredTimestamp,
      mainPrivateKey,
      mainPublicKey,
    } = await Client.register.signMetaMask({
      password,
      userid,
      did_value: address,
      mainPublicKey: localMainPublicKey,
      mainPrivateKey: localMainPrivateKey,
    });
    localStorage.setItem("PRIVATE_KEY", TempPrivateKey);
    localStorage.setItem("PUBLIC_KEY", TempPublicKey);
    localStorage.setItem("MAIN_PRIVATE_KEY", mainPrivateKey);
    localStorage.setItem("MAIN_PUBLIC_KEY", mainPublicKey);
    localStorage.setItem("WALLET_ADDRESS", address);
    localStorage.setItem(
      "PUBKEY_EXPIRED_TIMESTAMP",
      String(pubkeyExpiredTimestamp)
    );
    setKeys({
      PrivateKey: TempPrivateKey,
      PublicKey: TempPublicKey,
      userid,
    });
  };

  const register = async (password: string) => {
    if (!userAccount) {
      return;
    }
    const { address, userid } = userAccount;
    const { mainPrivateKey, mainPublicKey } =
      await Client.register.registerMetaMask({
        password,
        did_value: address,
        userid,
        avatar_url: `https://cdn.stamp.fyi/avatar/${address}?s=300`,
      });
    localStorage.setItem("MAIN_PRIVATE_KEY", mainPrivateKey);
    localStorage.setItem("MAIN_PUBLIC_KEY", mainPublicKey);
  };

  const logout = () => {
    localStorage.setItem("PRIVATE_KEY", "");
    localStorage.setItem("PUBLIC_KEY", "");
    localStorage.setItem("WALLET_ADDRESS", "");
    localStorage.setItem("userid", "");
    setKeys(null);
  };

  return { keys, fastestUrl, init, login, logout, getEthAccount, register };
};

export default useLogin;

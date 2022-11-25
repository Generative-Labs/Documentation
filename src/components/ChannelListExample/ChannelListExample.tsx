import React, { useEffect, PropsWithChildren } from 'react';
import { Client } from 'web3-mq';
import { AppTypeEnum, Avatar, Chat, ChannelList, ChannelListMessengerProps, ChannelPreviewUIComponentProps, Loading } from 'web3-mq-react';
import cx from 'classnames';

import useLogin from '../ChatExample/hooks/useLogin';

import ss from './index.module.css';

const CustomList = (props: PropsWithChildren<ChannelListMessengerProps>) => {
  const {
    children,
    listRef,
    error,
    loading,
  } = props;
  if (error) {
    return <div style={{display: 'flex', height: '100%', justifyContent: 'center', alignItems:'center', fontWeight: '800'}}>Load Error</div>
  };
  if (loading) {
    return <div style={{display: 'flex', height: '100%', justifyContent: 'center', alignItems:'center', fontWeight: '800'}}>Loading...</div>;
  }
  return (
    <div ref={listRef} style={{height: '100%', overflowY: 'auto'}}>{children}</div>
  )
}

const CustomDefaultEmptyStateIndicator = () => {
  return <div style={{textAlign: 'center'}}>You have no Channels currently</div>
}

const CustomPreview = (props: ChannelPreviewUIComponentProps) => {
  const {
    displayTitle,
    setActiveChannel,
    channel,
    active,
  } = props;

  const onSetActiveChannel = () => {
    setActiveChannel && setActiveChannel(channel);
  };

  return (
    <div
      className={cx(ss.customPreviewContainer, {
        [ss.selected]: active,
      })}
      onClick={onSetActiveChannel}
    >
      <Avatar
        name="user"
        image={channel?.avatar_base64 || channel.avatar_url || ''}
        size={30} 
      />
      <div>{displayTitle}</div>
    </div>
  )
};

const CustomPaginator = (props) => {
  const { 
    element, 
    showLoading = false,
    loadNextPage, 
    children,
    useCapture = true,
    reverse = false,
  } = props;
  const handleScroll = async () => {
    if (element && element.current) {
      const el = element.current;
      const { scrollHeight, clientHeight, scrollTop } = el;
      if (reverse && scrollTop === 0) {
        await loadNextPage();
        setTimeout(() => {
          el.scrollTop = getCurrentHeight(el) - scrollHeight;
        });
      }
      if (!reverse && scrollHeight - scrollTop - 0.5 === clientHeight) {
        loadNextPage();
      }
    }
  }
  const getCurrentHeight = (el: HTMLDivElement) => {
    return el.scrollHeight;
  };
  useEffect(() => {
    if (!element || !element.current) {
      return;
    }
    const scrollElement = element.current;
    scrollElement.addEventListener('scroll', handleScroll, useCapture);
    return () => {
      scrollElement.removeEventListener('scroll', handleScroll, useCapture);
    };
  }, []);
  return (
    <div>
      {!reverse && children}
      {showLoading && <Loading />}
      {reverse && children}
    </div>
  )
}

export const ChannelListExample: React.FC = (props: any) => {
  const { type } = props;
  const { keys, init, fastestUrl, logout } = useLogin();

  useEffect(() => {
    init();
  }, [])

  if (!keys) {
    return (
      <div>
        <button className={ss.link_btn}><a href="/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/Chat#basic-usage">请先在Chat部分进行登录操作</a></button>
      </div>
    );
  }
  if (!fastestUrl) {
    return null;
  }

  const client = Client.getInstance(keys);
  const handleClear = () => {
    client.channel.channelList = [];
    client.emit('channel.getList', { type: 'channel.getList' })
  }

  return (
    <div id='box' style={{position: 'relative', border: '1px solid #f2f2f2', width: '100%',height: '300px',overflow: 'auto'}}>
      <Chat client={client} appType={AppTypeEnum['h5']} logout={logout}>
        <ChannelList 
          List={type === 'List' ? CustomList :  undefined}
          DefaultEmptyStateIndicator={type === 'DefaultEmptyStateIndicator' ? CustomDefaultEmptyStateIndicator : undefined}
          Preview={type === 'Preview' ? CustomPreview : undefined}
          Paginator={CustomPaginator}
        />
        { type === 'DefaultEmptyStateIndicator' && <div style={{margin: '5px auto'}}><button className={ss.clear_btn} onClick={handleClear}>clear Channel</button></div>}
      </Chat>
    </div>
  );
};
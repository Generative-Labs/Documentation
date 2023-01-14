import React, { useEffect, PropsWithChildren, useState, useRef } from 'react';
import { Client } from 'web3-mq';
import { 
  AppTypeEnum, 
  Avatar,
  Button,
  Chat, 
  ChannelList, 
  ChannelListMessengerProps, 
  ChannelPreviewUIComponentProps, 
  Loading
} from 'web3-mq-react';
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
  const [ err, setErr ] = useState(false);
  const [ load, setLoad ] = useState(false);

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-evenly', padding: '10px 0px', borderBottom: '1px solid rgb(242, 242, 242)'}}>
        <Button type='ghost' onClick={() => {
          if (load) {
            setLoad(!load)
          }
          setErr(!err);
        }}>setError</Button>
        <Button type='ghost' onClick={() => {
          if (err) {
            setErr(!err);
          }
          setLoad(!load)
        }}>setLoad</Button>
      </div>
      <div ref={listRef} style={{height: '100%', textAlign: 'center', fontWeight: '800', overflowY: 'auto'}}>
        {err || load ? (err ? 'Load Error' : load ? 'Loading...' : null) : (error ? 'Load Error' : loading ? 'Loading...' : children)}
      </div>
    </>
  )
}

const CustomDefaultEmptyStateIndicator = () => {
  return <div style={{textAlign: 'center'}}>No Reasult...</div>
}

const CustomPreview = (props: ChannelPreviewUIComponentProps) => {
  const {
    active,
    avatarUrl,
    channel,
    lastMessage,
    displayTitle,
    setActiveChannel,
    unread,
    updatedAt,
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
        image={avatarUrl}
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
  const ref = useRef<Array<any>>([]);

  useEffect(() => {
    init();
    document.getElementsByTagName('body')[0].setAttribute('data-theme', 'light');
  }, [])

  if (!keys) {
    return (
      <Button size='large' type='ghost'><a href="/docs/Web3MQ-UI-Components/Web3MQ-React/chatComponent/LoginModal#basic-usage" style={{textDecoration: 'none'}}>Please login first</a></Button>
    );
  }
  if (!fastestUrl) {
    return null;
  }

  const client = Client.getInstance(keys);
  const handleClear = () => {
    if (client.channel.channelList?.length) {
      ref.current = client.channel.channelList;
    }
    client.channel.channelList = [];
    client.emit('channel.getList', { type: 'channel.getList' })
  }
  const handleRestore = () => {
    if (ref.current.length) {
      client.channel.channelList = ref.current;
      client.emit('channel.getList', { type: 'channel.getList' })
    }
  }

  return (
    <div id='box' style={{position: 'relative', border: '1px solid #f2f2f2', width: '100%',height: '300px',overflow: 'auto'}}>
      <Chat client={client} appType={AppTypeEnum['h5']} logout={logout}>
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
          { type === 'DefaultEmptyStateIndicator' && (
            <div style={{margin: '5px auto'}}>
              <Button type='ghost' onClick={handleClear} style={{marginRight: '10px'}}>clear Channel</Button>
              <Button type='ghost' onClick={handleRestore}>query Channel</Button>
            </div>
          )}
          <ChannelList 
            List={type === 'List' ? CustomList :  undefined}
            DefaultEmptyStateIndicator={type === 'DefaultEmptyStateIndicator' ? CustomDefaultEmptyStateIndicator : undefined}
            Preview={type === 'Preview' ? CustomPreview : undefined}
            Paginator={CustomPaginator}
          />
        </div>
      </Chat>
    </div>
  );
};
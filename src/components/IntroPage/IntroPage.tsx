import React, { useEffect } from 'react';
import Link from '@docusaurus/Link';
import { Button } from '@web3mq/react-components';

import { NekworkIcon, UploadIcon, UserGroupIcon } from '../../Icons';
import ss from './index.module.css';

const cardList = [
  {
    title: 'DAppMQ',
    icon: <NekworkIcon style={{height: '40px'}} />,
    description: 'Sovereign reach between decentralized applications (including Wallets, DIDs, GameFi, and other dapps) enabled by a fully open and trustless network',
    href: '/docs/Ethos-SDK/JS-SDK/dappConnect/',
  },
  {
    title: 'SocialMQ',
    icon: <UploadIcon />,
    description: 'Actionable social connections among users of decentralized applications to de-fragmentize the current Web3 social ecosystem',
    href: '/docs/Tutorials/ethos/',
  },
  {
    title: 'PushMQ',
    icon: <UserGroupIcon />,
    description: 'Boost and monetize engagement and retention via personalized notifications',
    href: '/docs/Tutorials/PubSub/',
  }
];

export const IntroPage = () => {
  useEffect(() => {
    document.body.setAttribute('data-theme', 'light');
  }, [])
  return (
    <div className={ss.introContainer}>
      <div className={ss.introHead}>
        <div className={ss.title}>Ethos Documentation</div>
        <div className={ss.caption}>Web3-native decentralized communication protocol. Encrypted, efficient and borderless.</div>
      </div>
      <div className={ss.introMain}>
        <div className={ss.titleOfWeb3MQ}>
          Learn about Ethos
        </div>
        <p className={ss.descriptOfWeb3MQ}>
          Ethos is currently the fastest and most scalable social L1 & messaging network. Ethos, as a Web3 native communication protocol, fully embodies the fundamental characteristics of encryption by being decentralized and supporting distributed sovereignty. These characteristics empower Ethos to be a truly trustless network, which upholds the open and inclusive spirit of open source. Anyone can run the node, and the network will ultimately be governed by the community, minimizing the risk of a single point of failure resulting from centralized governance.
        </p>
        <p className={ss.descriptOfWeb3MQ}>
          WebMQ‘s sub-protocols (DAppMQ, PushMQ, and SocialMQ) outline and complete the Web3 communication infrastructure landscape in different aspects. DAppMQ bridges decentralized applications, supporting signature routing and authentication; PushMQ links decentralized applications to users, supporting one-way notifications to users; SocialMQ connects users to users, supporting encrypted messaging via direct messages (DMs) or group chat without a third party.
        </p>

        <div className={ss.titleOfGetStart}>Getting started</div>
        <div className={ss.quickStartTip}>
          <div className={ss.tipBody}>
            <div className={ss.title}>Quick Start</div>
            <div className={ss.description}>A technical introduction to the features and ecosystem of Ethos to get you up and running in minutes</div>
          </div>
          <Link to='/docs/Ethos-SDK/JS-SDK/quickStart/'><Button type='primary'>Quick Start</Button></Link>
        </div>

        <div className={ss.cardContainer}>
          {cardList.map(card => (
            <div className={ss.cardBox}>
              <div className={ss.cardhead}>
                {card.icon}
                <div className={ss.cardTitle}>{card.title}</div>
              </div>
              <div className={ss.cardDescription}>
                {card.description}
              </div>
              <div style={{display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'end', marginTop: '16px'}}>
                <Link className={ss.cardLink} to={card.href}>Get Started with {card.title} &#8594;</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

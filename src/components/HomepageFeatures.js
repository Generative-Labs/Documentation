import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'ID-to-ID Chat',
    Svg: require('../../static/img/ID_to_IDChat.svg').default,
    description: (
      <>
        Cross-platform&Cross-chain: Use 1 Web3MQ UserID to communicate with 
        users from any chain on any platform.
      </>
    ),
  },
  {
    title: 'Actionable Social Connection',
    Svg: require('../../static/img/ActionableSocialConnection.svg').default,
    description: (
      <>
        Web3MQ is compatible with a wide range of social identities and social graph protocols, 
        unlocking the potential of every social relationship in dynamic communication.
      </>
    ),
  },
  {
    title: 'Real-Time Notifications',
    Svg: require('../../static/img/Real-TimeNotifications.svg').default,
    description: (
      <>
        Provide true real-time notifications via "Push”, ensuring important information reaches every real user.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

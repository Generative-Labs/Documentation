import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import { NekworkIcon, UploadIcon, UserGroupIcon } from "../Icons";
import ss from "./IntroPage/index.module.css";

// const FeatureList = [
//   {
//     title: 'ID-to-ID Chat',
//     Svg: require('../../static/img/ID_to_IDChat.svg').default,
//     description: (
//       <>
//         Cross-platform&Cross-chain: Use 1 Web3MQ UserID to communicate with
//         users from any chain on any platform.
//       </>
//     ),
//   },
//   {
//     title: 'Actionable Social Connection',
//     Svg: require('../../static/img/ActionableSocialConnection.svg').default,
//     description: (
//       <>
//         Web3MQ is compatible with a wide range of social identities and social graph protocols,
//         unlocking the potential of every social relationship in dynamic communication.
//       </>
//     ),
//   },
//   {
//     title: 'Real-Time Notifications',
//     Svg: require('../../static/img/Real-TimeNotifications.svg').default,
//     description: (
//       <>
//         Provide true real-time notifications via "Push”, ensuring important information reaches every real user.
//       </>
//     ),
//   },
// ];

const cardList = [
  {
    title: "DAppMQ",
    icon: <NekworkIcon style={{ height: "40px" }} />,
    description:
      "Sovereign reach between decentralized applications (including Wallets, DIDs, GameFi, and other dapps) enabled by a fully open and trustless network",
    href: "/docs/Ethos-SDK/JS-SDK/dappConnect/",
  },
  {
    title: "SocialMQ",
    icon: <UploadIcon />,
    description:
      "Actionable social connections among users of decentralized applications to de-fragmentize the current Web3 social ecosystem",
    href: "/docs/Tutorials/ethos/",
  },
  {
    title: "PushMQ",
    icon: <UserGroupIcon />,
    description:
      "Boost and monetize engagement and retention via personalized notifications",
    href: "/docs/Tutorials/PubSub/",
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
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
      {cardList.map((card) => (
        <div className={styles.cardBox}>
          <div className={styles.cardhead}>
            {card.icon}
            <div className={styles.cardTitle}>{card.title}</div>
          </div>
          <div className={styles.cardDescription}>{card.description}</div>
          <div
            style={{
              display: "flex",
              height: "100%",
              flexDirection: "column",
              justifyContent: "end",
              marginTop: "16px",
            }}
          >
            <a className={styles.cardLink} href={card.href}>
              Get Started with {card.title} &#8594;
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

---
position: 1
---

# QuickStart

**This quick start tutorial uses examples to teach you the easiest way to register and connect to web3mq using reacthooks.**

## Installation

> Install Web3MQ's react hooks using a package manager of your choice

```bash
npm install @web3mq/react-hooks
or
yarn add @web3mq/react-hooks
```

## Usage

### index.tsx

```tsx index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChatProvider } from "@web3mq/react-hooks";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChatProvider appKey={"YOUR_APP_KEY"}>
      <App />
    </ChatProvider>
  </React.StrictMode>
);
```

### App.tsx

```tsx App.tsx
import React from "react";
import { useChat } from "@web3mq/react-hooks";
import "./app.css";

const password = "123456";
const walletType = "metamask";

const App: React.FC = () => {
  const { connectToWeb3MQ } = useChat();
  const connectWeb3MQFollow = async () => {
    await connectToWeb3MQ({
      walletType,
      password,
    });
  };

  return (
    <div className="app">
      <div className="btns">
        <button onClick={connectWeb3MQFollow}>connect web3mq </button>
      </div>
    </div>
  );
};

export default App;
```

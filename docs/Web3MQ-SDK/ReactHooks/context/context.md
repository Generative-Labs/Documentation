---
position: 2
---

# ChatProvider

> ChatProvider is a react context provider, hooks that use web3mq must be within a subcomponent of the chatProvider for it to work properly

## properties

### ChatProvider

**The properties of the Chat are described as follows:**

| Property | Description                                      | Type   | required |
| -------- | ------------------------------------------------ | ------ | -------- |
| appKey   | temporary authorization key obtained by applying | string | true     |

## useChat Data

| name            | type                                                               |
| --------------- | ------------------------------------------------------------------ |
| client          | Client                                                             |
| init            | function: [init](/docs/Web3MQ-SDK/ReactHooks/auth/#init)           |
| checkUser       | function: [checkUser](/docs/Web3MQ-SDK/ReactHooks/auth/#checkuser) |
| connectToWeb3MQ | function                                                           |

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
    <ChatProvider appKey={"vAUJTFXbBZRkEDRE"}>
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

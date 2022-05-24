---
sidebar_position: 1
---

# Quickstart
___

## Install

```bash
pip intall web3mq
```

## Init web3mq client

```python
from web3mq.client import Web3mqClient

# default env is prod
prod_client = Web3mqClient()

# Specify test environment
test_client = Web3mqClient(env='test')
```

## Register

```python
from web3mq.client import Web3mqClient

client = Web3mqClient()

result = client.do_register(
    "your wallet address", # User's ETH wallet address, get it by MetaMask's API
    'twitter', # platform options twitter/instagram/facebook/discord
    'your username in twitter'
)
```

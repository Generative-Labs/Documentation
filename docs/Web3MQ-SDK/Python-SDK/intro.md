---
sidebar_position: 0
---

# Intro

> web3mq is official web3mq python sdk

## Feature

- User API
    - User register
    - User login
    - Get User info
    - Search users
    - Get my contact list
    - Add user to my contact
- Room API
    - Create chat room
    - Get my room list
    - Get room info
- Message API
    - Get history messages

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

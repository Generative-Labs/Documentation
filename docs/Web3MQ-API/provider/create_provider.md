---
title: Create Provider
order: 1
group:
  title: Provider
  order: 7
---

# Create Provider

> **POST** `/api/create_provider/`

| Parameters in Body json | Type   | Required | Parameters Description                               |
| ----------------------- | ------ | -------- | ---------------------------------------------------- |
| creator_id              | string | Yes      | userid                                               |
| provider_id             | string | Yes      | provider_id                                          |
| provider_name           | string | Yes      | Web3MQ email service                                 |
| provider_description           | string | Yes      | provider description                               |
| provider_type           | string | Yes      | email or other type                                  |
| provider_pubkey         | string | Yes      | provider ed25519 pubkey                              |
| timestamp               | int    | Yes      | timestamp milliseconds                               |
| webhook_url             | string | Yes      | https://provider.domain.com/api/webhook_url/         |
| web3mq_signature        | string | Yes      | use ed25519 [see signing detail](/apidocs/signature) |

_web3mq_signature signing rule_

> web3mq_signature = ed25519 private key signing(creator_id + providerid + provider_type + provider_name + provider_pubkey + webhook_url + timestamp)

_Body json params_

```json
{
  "creator_id": "userid",
  "provider_id": "web3mq:email",
  "provider_type": "email",
  "provider_name": "Web3mqEmail",
  "provider_description": "Web3mqEmail is an email service provider",
  "provider_pubkey": "ed25519 pubkey",
  "webhook_url": "https://provider.domain.com/api/webhook_url/",
  "timestamp": 1632432434,
  "web3mq_signature": "web3mq_signature"
}
```

**response**

| Parameters | Type   | Always Return | Parameters Description                                      |
| ---------- | ------ | ------------- | ----------------------------------------------------------- |
| code       | int    | Yes           | result code, 0 means success, other code see msg's contents |
| msg        | string | Yes           | result description                                          |

```json
{
  "code": 0,
  "msg": "ok"
}
```
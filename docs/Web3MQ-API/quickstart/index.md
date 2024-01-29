---
title: Overview
order: 1
sidebar_position: 2
group:
  title: Quickstart
---

# Quickstart

> Let's start how to use and successfully send the first message in the chat room we created

## Usage Steps

1. **Register Web3MQ Account**

   - Type your password
   - Generate Wallet signature
     Signing secret data(your password and other info) with Wallet (MetaMask/StarkNet)
   - Generate Ed25519 key pair use wallet signature which call `Main KeyPair`
   - Signing register info use MetaMask or StarkNet and Call register api

2. **User login**

   - Generate login key pair
   - Use `Main KeyPair` signing login key pair
   - Call login api

3. **Create a group (chat room)**

   - Create a group for next step

4. **Send Connect Command**, Web3MQ Command use protobuf v3

   - Send connect command to server

5. **Send a message in Group (chat room)**
   - Send a message in previou create group

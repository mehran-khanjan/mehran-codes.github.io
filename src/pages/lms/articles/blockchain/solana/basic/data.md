# Solana Basic

---

## Cluster in Solana

In Solana, a network is referred to as a cluster. There are four types of clusters:

1. **Devnet Cluster:** A public test network for developers to build and test applications. It is reset periodically, and users can obtain free tokens.
2. **Testnet Cluster:** A public network that mimics the mainnet environment but is used for testing. It is more stable than Devnet and allows for testing with real-world conditions.
3. **Mainnet Cluster:** The live Solana network where real transactions occur. It is fully operational and supports all applications and services.
4. **Localnet:** A local instance of the Solana blockchain that can be run on a developer's machine. It allows for quick testing without needing to connect to public networks.

---

## Receive Latest Solana Configuration

To view the current Solana configuration, use:

```bash
solana config get
```

Example output:

```bash
Config File: /root/.config/solana/cli/config.yml
RPC URL: https://api.devnet.solana.com 
WebSocket URL: wss://api.devnet.solana.com/ (computed)
Keypair Path: /root/.config/solana/id.json
Commitment: confirmed 
```

Explanation:
- **Config File:** The location of the Solana CLI configuration file.
- **RPC URL:** The endpoint for connecting to the cluster.
- **WebSocket URL:** The endpoint for WebSocket connections to the cluster.
- **Keypair Path:** The path to the default wallet used by Solana tools for network interactions.
- **Commitment:** The level of transaction confirmation (e.g., confirmed or finalized).

---

## Change the Configuration

To switch to a different cluster, use the following commands and verify with 
`solana config get`

```bash
# for Devnet
solana config set --url https://api.devnet.solana.com

# for Testnet
solana config set --url https://api.testnet.solana.com

# for Mainnet
solana config set --url https://api.mainnet-beta.solana.com

# for Localnet
solana config set --url http://localhost:8899
```

---

## Keypair

To interact with a Solana cluster, you need a wallet (also known as an account), 
which consists of a public key and a private key (collectively called a keypair). 
Create a new keypair with:

```bash
solana-keygen new -o ~/keypair-sample.json 
```

The output includes the private key, for example:
```json
[45, 132, 78, 23, 189, 67, 12, 234, 56, 199, 88, 145, 67, 23, 90, 175, 200, 11, 67, 150, 34, 78, 245, 123, 67, 89, 12, 45, 67, 234, 199, 56, 78, 145, 23, 67, 90, 175, 200, 11, 67, 150, 34, 78, 245, 123, 67, 89, 12, 45, 67, 234, 199, 56, 78, 145, 23, 67, 90, 175, 200, 11]
```

---

## Retrieve the Public Key

Retrieve the public key using either of these commands:

```bash
# 1
solana-keygen publickey ./publickey-file.json

# 2
solana address -k ./publickey-file.json
```

---

## Scanners

Solana offers two blockchain explorers:

1. [SolScan](https://solscan.io/?cluster=devnet)
2. [Solana Explorer](https://explorer.solana.com)

---

## Balance

To check an account’s balance, use one of these commands. Ensure the configuration 
matches the desired cluster (`solana config get`), or specify the cluster explicitly:

```bash
# Option 1
solana balance <your-publickey>

# Option 2
solana balance $(solana address -k ./publickey-file.json)

# Option 3: Specify the cluster
solana balance $(solana address -k ./publickey-file.json) --url https://api.mainnet-beta.solana.com
```

To airdrop free SOL on Devnet or Testnet, use:

```bash
solana airdrop 1 $(solana address -k ./publickey-file.json)
```

The command returns a transaction signature, which can be verified on Solana Explorer.

---

## Transfer

To transfer SOL to another account:

- **--allow-unfunded-recipient:** Allows the sender to pay a one-time rent fee if the recipient lacks sufficient SOL.

- **--fee-payer:** Specifies whether the sender or receiver pays the transaction fee.

```bash
solana transfer --from <keypair-privatekey-sender> <publickey-receiver> value options

solana transfer --from ./publickey-file.json $(solana address -k ./publickey-file2.json) 1 --allow-unfunded-recipient --fee-payer ./publickey-file.json
```

---

## Localnet Cluster

Run a local Solana cluster with, then availe on localhost:8899:

```bash
solana-test-validator

# another option
anchor localnet
```

To reset previous data
```bash
solana-test-validator -r
```

To run the Localnet with generated wallets:

```bash
solana-test-validator -r --account <publicAddr1> wallet1.json --account <publicAddr2> wallet2.json --account <publicAddr3> wallet3.json
```

Example wallet.json structure:

```json
{
  "pubkey": "9on95coWwbYJpDkFWv35koXWpGcEA4WyB4gwG7nUo2yi",
  "account": {
    "lamports": 500000000000000000,
    "data": [
      "",
      "base64"
    ],
    "owner": "11111111111111111111111111111111",
    "executable": false,
    "rentEpoch": 0,
    "space": 0
  }
}
```

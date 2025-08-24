# Introduction to Solana

---

## Solana Blockchain

The Solana network is a third-generation, high-performance, permissionless blockchain and an open-source project maintained by the Solana Foundation. Anatoly Yakovenko published the Solana whitepaper in November 2017, and the first block was created in 2020. The network can process over 50,000 transactions per second (TPS) with an average transaction cost of $0.00025. This efficiency results from a unique combination of Proof of Stake (PoS) and Proof of History (PoH) consensus mechanisms.

---

## Solana and Anchor

Unlike Ethereum Virtual Machine (EVM)-based blockchains using Solidity, Solana requires developers to handle low-level operations such as memory management and pointers. This contributes to Solana’s high performance but increases development complexity.

The Anchor Framework simplifies Solana smart contract development by abstracting these low-level complexities, allowing developers to focus on business logic. Anchor streamlines the creation of secure and efficient smart contracts for the Solana blockchain.

---

## Prerequisites

To develop smart contracts for the Solana blockchain, you need the following tools:

1. The Rust Programming Language
2. NodeJS
3. The Solana Tool Suite
4. Anchor Framework
5. Phantom Wallet
6. Solana Playground (Optional)

**1. The Rust Programming Language**

Install Rust using `rustup`. Verify the installation with:

```bash
rustc --version
```

Update Rust using:
```bash
rustup update
```


**2. NodeJS**

After installing Node.js, verify the installation with:

```bash
node -v
```

**3. The Solana Tool Suite**

This is a collection of tools for interacting with the Solana network. Follow the 
installation instructions at 
[Solana's official documentation](https://solana.com/docs/intro/installation). 
Verify the installation with:

```bash
solana --version
```

Expected output:
```bash
Installed Versions:
Rust: rustc 1.86.0 (05f9846f8 2025-03-31)
Solana CLI: solana-cli 2.2.12 (src:0315eb6a; feat:1522022101, client:Agave)
Anchor CLI: anchor-cli 0.31.1
Node.js: v23.11.0
Yarn: 1.22.1
```

**4. Anchor Framework**

Install Anchor using Rust’s package manager, Cargo. Additionally, install the Anchor 
Version Manager (AVM). Verify the installation with:

```bash
anchor --version
avm --version
```

**5. Phantom Wallet**

Install the Phantom Wallet browser extension from [phantom.app](https://phantom.com).

**6. Solana Playground**

To dive into Solana development with minimal setup, [Solana Playground](https://beta.solpg.io/) is an excellent starting point. This web-based IDE allows you to write, compile, and deploy Solana programs (smart contracts) without complex local installations. While it doesn't provide access to full project files, its simplicity and browser-based environment make it ideal for beginners and rapid prototyping.


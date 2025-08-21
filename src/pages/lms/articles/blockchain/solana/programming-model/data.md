# Programming Model

---

## Storing and Accounts

In EVM-based languages, we store the on-chain data in the smart contract fields but in 
Solana it is different. In Solana, we use accounts to store on-chain data. Each account
has 32 Bytes (256 bits) address to identify.

Types of Accounts in Solana:
- **Program Accounts:** These accounts execute code on-chain. They are also known as Solana 
programs. A program is the owner of all accounts. The owner of a program is another 
program called **system program**. This program creates new accounts (all three types),
allocation account data, ownership assignment and rent related task.

- **Storage Accounts:** These accounts function like separate files with a shared structure 
defined by a Solana program. They store the data or state of a program and can include 
metadata such as access restrictions.

- **Token Accounts:** These accounts track the balances of tokens and allow for the transfer
of tokens.

```bash
System Program (parent) (type of program account)
                          || 
                          || create and manage
                          ||
program account (child) - storage account - token account
```

## Accounts Communication On-Chain

On Solana, the program account, the storage account and the token account are 
completely separate on–chain entities, so you need a defined way to pass data back 
and forth. 

How do these entities connect to each other in a transaction?
1. The client (JS/TS) builds an instruction specifying:
   - The program’s public key (so Solana knows which code to run).
   - A list of accounts (including your storage account).
   - Any serialized instruction data (e.g. the u64 for set).
2. Solana loads your program account’s code, plus the raw byte buffers of each 
listed account.
3. Anchor’s generated entrypoint:
   - Deserializes each account buffer into the structs you declared in your `Context<…>`.
   - Calls your handler function (`initialize`, `increase`, etc.).
   - Serializes any modified structs back into the raw account buffers.
4. Modified bytes persist in the storage account’s data field.

```bash
program account             storage account
(address123)                (address456)
       ||                          ||
       ||                          ||
       ||                          ||
  Communication with serialization and deserialization.
  DApp needs to know both address for both accounts.
```

---

## Rent

Stroing data in Solana is not free of charge. When we create a new account on Solana,
we need to pay **rent** to keep the data stored on the network. The unit of the rent
is **lamports** (1,000,000,000 lamports = 1 SOL). If an account runs out of rent, it 
will delete from the network with its own data. 

**Rent Exemption:** It means that if an account holds at least two years of rent, it 
will not remove from the network. All the accounts that create with default mechanism
should me **rent-exempt**

---

## Calculate Rent

If we want to create an account holding 32 bytes of data, we can calculate the rent with
this command:

```bash
solana rent 64

# Output
# Rent per byte-year: 0.00000689 SOL
# Rent per epoch: 0.000003158 SOL
# Rent-exempt minimum: 0.0042158 SOL
```

To be rent-exempt, you need to pay at least 0.0011136 SOL.

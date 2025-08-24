# Front-End Application for Hello World

---

## Start The Front-End Project

Compile the Solana program to generate the `idl.json` file and integrate it into the React project. Additionally, create a types.ts file to define TypeScript types for the project, as TypeScript is required.

```bash
npx create-next-app solana-dapp

npm i @coral-xyz/anchor@0.29.0 @solana/wallet-adapter-base @solana/wallet-adapter-react @solana/wallet-adapter-react-ui @solana/wallet-adapter-wallets @solana/web3.js
```

**Note:** we need to use this version of this package to avoid conflict in IDL file:

```bash
"@coral-xyz/anchor": "^0.29.0",
```

We need two files:
- IDL: export from the SOLpg
- Types for TypeScript: create from IDL file

`idl.json` file:

```json
{
  "version": "0.1.0",
  "name": "example",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "counter",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "increment",
      "accounts": [
        {
          "name": "counter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "Counter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "count",
            "type": "u64"
          },
          {
            "name": "authority",
            "type": "publicKey"
          }
        ]
      }
    }
  ]
}
```

`types.ts` file:

```typescript
export type example = {
    "version": "0.1.0",
    "name": "example",
    "instructions": [
        {
            "name": "initialize",
            "accounts": [
                {
                    "name": "payer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "counter",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": []
        },
        {
            "name": "increment",
            "accounts": [
                {
                    "name": "counter",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": true,
                    "isSigner": true
                }
            ],
            "args": []
        }
    ],
    "accounts": [
        {
            "name": "Counter",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "count",
                        "type": "u64"
                    },
                    {
                        "name": "authority",
                        "type": "publicKey"
                    }
                ]
            }
        }
    ]
}
```

---

## Connect to Cluster and Get Program Data

To interact with an Anchor program using `@coral-xyz/anchor`, you'll need to create a `Program` instance using the program's IDL file.

Creating an instance of the `Program` requires the program's IDL and an `AnchorProvider`. An `AnchorProvider` is an abstraction that combines two things:
- `Connection`: the connection to a Solana cluster (i.e. localhost, devnet, mainnet)
- `Wallet`: a default wallet used to pay for and sign transactions

The following diagram illustrates the relationships between these concepts:

```bash
+-----------------+
| Cluster(Solana) |
+-----------------+
         |
         v
+-----------------+   +-----------------+
|   Connection    |   |     Wallet      |
+-----------------+   +-----------------+
         |                    |
         v                    v
+---------------------------------------+          +-----------------+
|                Provider               |          |   IDL (anchor)  |
+---------------------------------------+          +-----------------+
         |                                                  |
         v                                                  v 
+--------------------------------------------------------------------+
|                                Program                             |
+--------------------------------------------------------------------+
```

To implement with our React app, we have:

```tsx
const Content: React.FC = () => {
  const { connection } = useConnection();
  const wallet = useAnchorWallet();

  console.log("wallet:", wallet?.publicKey.toBase58());

  return <WalletMultiButton />;
}

const Context: React.FC<{ children: ReactNode }> = ({ children }) => {
    const network = WalletAdapterNetwork.Devnet;

    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [new PhantomWalletAdapter(),],[]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

const Home: React.FC = () => {
  return (
    <Context>
      <Content />
    </Context>
  );
}

export default Home;
```

---

## Get Storage Accounts for Program Account and Wallet

In this section, we implement two key functions:

- `findPDAforAuthority`: Generates the PDA for the `Counter` account based on the user’s wallet and the program’s ID.
- `fetchAccount`: Retrieves the `Counter` account’s data (e.g., the current count) from the Solana blockchain using the PDA.

These functions allow the React front-end to locate and display the `Counter` account’s data, which is critical for showing the current counter value to the user.

```tsx
const Content: React.FC = () => {
  const connection = useConnection();
  const wallet = useAnchorWallet();

  const [program, setProgram] = useState<anchor.Program<example>>(null!);
  const [account, setAccount] = useState<{publicKey: anchor.web3.PublicKey, dataset: any}>(null!);
  const [setValue, setSetValue] = useState<number>(0);

  console.log('account is: ', account);

  const findPDAforAuthority = async (_program?: anchor.Program<example>): Promise<anchor.web3.PublicKey> => {

        const [pda, _bump] = await anchor.web3.PublicKey.findProgramAddressSync(
          [new TextEncoder().encode('account'), wallet!.publicKey.toBytes()],
          (typeof(_program) !== 'undefined' ? _program.programId : program.programId)
        );
        console.log('pda is: ', pda);
        return pda;
  }
        
  const fetchAccount = async (_program?: anchor.Program<example>) => { 
        if(typeof(_program) !== 'undefined'){
            const pda = await findPDAforAuthority(_program);
            return await _program.account.counter.fetch(pda);
        } else{
            const pda = await findPDAforAuthority();
            return await program.account.counter.fetch(pda);
        }
  }

  useEffect(() => {
        if(wallet && connection){

            const anchorConnection = new anchor.web3.Connection(
                connection.connection.rpcEndpoint,
                connection.connection.commitment
            );

            const anchorProvider = new anchor.AnchorProvider(
                anchorConnection,
                wallet,
                {"preflightCommitment" : connection.connection.commitment}
            );
            
            const _program = new anchor.Program<example>(
                JSON.parse(JSON.stringify(idl)),
                "2ZhxsERLkcxYuuUnHWA9K7btyzT4SyWAAcr1XZuAHaRc",
                anchorProvider
            );

            console.log('program is: ', _program);

            setProgram(_program);

            /*** search for existing MyAccount account */
            fetchAccount(_program)
            .then((result) => {
                if(result){
                    findPDAforAuthority(_program)
                    .then((pda) => {
                        setAccount({publicKey: pda, dataset: result});
                    })
                }
            })
            .catch((reason) => console.log(reason));
        }
    }, [wallet, connection]);

  return(
    <>
      {/* <WalletMultiButton /> */}
    </>
  );
}
```

---

## Initialize the Storage Account

We need to create a new `Counter` storage account for our current wallet address. Next, we can increment the value stored in the `Counter` account. After initialization, the Solana program returns the following response. The `publicKey` is the PDA and the `authority` is the wallet address.

```json
[
  {
    "publicKey": "EHKGEgJemPfykeY4QTaX5Wr6FYjuxsH1szuADfGQobRq",
    "account": {
      "count": "0",
      "authority": "AFM2Lr7WUFVVydyDfijsMengB2CThY7J7fxEwp2GS9os"
    }
  }
]
```

```tsx
const Content: React.FC = () => {
  const connection = useConnection();
  const wallet = useAnchorWallet();

  console.log('wallet is: ', wallet);

  const [program, setProgram] = useState<anchor.Program<example>>(null!);
  const [account, setAccount] = useState<{publicKey: anchor.web3.PublicKey, dataset: any}>(null!);
  const [setValue, setSetValue] = useState<number>(0);

  console.log('account is: ', account);

  const findPDAforAuthority = async (_program?: anchor.Program<example>): Promise<anchor.web3.PublicKey> => {

        const [pda, _bump] = await anchor.web3.PublicKey.findProgramAddressSync(
          [new TextEncoder().encode('counter'), wallet!.publicKey.toBytes()],
          (typeof(_program) !== 'undefined' ? _program.programId : program.programId)
        );
        console.log('pda is: ', pda);
        return pda;
  }
        
  const fetchAccount = async (_program?: anchor.Program<example>) => { 
        if(typeof(_program) !== 'undefined'){
            const pda = await findPDAforAuthority(_program);
            return await _program.account.counter.fetch(pda);
        } else{
            const pda = await findPDAforAuthority();
            return await program.account.counter.fetch(pda);
        }
  }

  const initAccount = async () => {
        try {
            const pda = await findPDAforAuthority();
            const tx = await program.methods
            .initialize()
            .accounts({
                counter: pda,
                payer: wallet!.publicKey, 
                systemProgram: anchor.web3.SystemProgram.programId,
            })
            .signers([]) 
            .rpc();

            setAccount({
                publicKey: pda, 
                dataset: await program.account.counter.fetch(pda)
            });
        } catch (e) {
          console.log('Initialization Error: ', e);
        }
    };

  useEffect(() => {
        if(wallet && connection){

            const anchorConnection = new anchor.web3.Connection(
                connection.connection.rpcEndpoint,
                connection.connection.commitment
            );

            const anchorProvider = new anchor.AnchorProvider(
                anchorConnection,
                wallet,
                {"preflightCommitment" : connection.connection.commitment}
            );
            
            const _program = new anchor.Program<example>(
                JSON.parse(JSON.stringify(idl)),
                "2ZhxsERLkcxYuuUnHWA9K7btyzT4SyWAAcr1XZuAHaRc",
                anchorProvider
            );

            console.log('program is: ', _program);

            setProgram(_program);

            /*** search for existing MyAccount account */
            fetchAccount(_program)
            .then((result) => {
                if(result){
                    findPDAforAuthority(_program)
                    .then((pda) => {
                        setAccount({publicKey: pda, dataset: result});
                    })
                }
            })
            .catch((reason) => console.log(reason));
        }
    }, [wallet, connection]);

  return(
    <>
      {wallet && connection
          ?
            account 
              ? 
              `Counter: ${account.dataset.count.toString()}` 
              : 
              <><button onClick={initAccount}>Initialize</button><br/></> 
          :
          ''
      }
      <WalletMultiButton />
    </>
  );
}
```

---

## Increase Value for the Storage Account

The `has_one = authority` constraint in the `Counter` account struct prevents unauthorized wallets from updating the `counter` value.

The result of Solana blockchain after increasing: 
```json
[
  {
    "publicKey": "EHKGEgJemPfykeY4QTaX5Wr6FYjuxsH1szuADfGQobRq",
    "account": {
      "count": "1",
      "authority": "AFM2Lr7WUFVVydyDfijsMengB2CThY7J7fxEwp2GS9os"
    }
  }
]
```

```tsx
const increaseAccountCounter = async () => {
        await program.methods.increment()
        .accounts({
            counter: account!.publicKey, 
            authority: wallet!.publicKey
        })
        .rpc();

        setAccount({
          publicKey: account.publicKey, 
          dataset: await fetchAccount()
        });
    }
```

---

## The Complete Code

```tsx
import React, {useEffect, useMemo, useState, type ReactNode} from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

import * as anchor from '@coral-xyz/anchor';
import { clusterApiUrl } from '@solana/web3.js';

import { type example } from "../assets/types";
import idl from "../assets/idl.json";

require('@solana/wallet-adapter-react-ui/styles.css');

const Content: React.FC = () => {
  const connection = useConnection();
  const wallet = useAnchorWallet();

  console.log('wallet is: ', wallet);

  const [program, setProgram] = useState<anchor.Program<example>>(null!);
  const [account, setAccount] = useState<{publicKey: anchor.web3.PublicKey, dataset: any}>(null!);
  const [setValue, setSetValue] = useState<number>(0);

  console.log('account is: ', account);

  const findPDAforAuthority = async (_program?: anchor.Program<example>): Promise<anchor.web3.PublicKey> => {

        const [pda, _bump] = await anchor.web3.PublicKey.findProgramAddressSync(
          [new TextEncoder().encode('counter'), wallet!.publicKey.toBytes()],
          (typeof(_program) !== 'undefined' ? _program.programId : program.programId)
        );
        console.log('pda is: ', pda);
        return pda;
  }
        
  const fetchAccount = async (_program?: anchor.Program<example>) => { 
        if(typeof(_program) !== 'undefined'){
            const pda = await findPDAforAuthority(_program);
            return await _program.account.counter.fetch(pda);
        } else{
            const pda = await findPDAforAuthority();
            return await program.account.counter.fetch(pda);
        }
  }

  const initAccount = async () => {
        try {
            const pda = await findPDAforAuthority();
            const tx = await program.methods
            .initialize()
            .accounts({
                counter: pda,
                payer: wallet!.publicKey, 
                systemProgram: anchor.web3.SystemProgram.programId,
            })
            .signers([]) 
            .rpc();

            setAccount({
                publicKey: pda, 
                dataset: await program.account.counter.fetch(pda)
            });
        } catch (e) {
          console.log('Initialization Error: ', e);
        }
    };

    const increaseAccountCounter = async () => {
        await program.methods.increment()
        .accounts({
            counter: account!.publicKey, 
            authority: wallet!.publicKey
        })
        .rpc();

        setAccount({
          publicKey: account.publicKey, 
          dataset: await fetchAccount()
        });
    }

  useEffect(() => {
        if(wallet && connection){

            const anchorConnection = new anchor.web3.Connection(
                connection.connection.rpcEndpoint,
                connection.connection.commitment
            );

            const anchorProvider = new anchor.AnchorProvider(
                anchorConnection,
                wallet,
                {"preflightCommitment" : connection.connection.commitment}
            );
            
            const _program = new anchor.Program<example>(
                JSON.parse(JSON.stringify(idl)),
                "2ZhxsERLkcxYuuUnHWA9K7btyzT4SyWAAcr1XZuAHaRc",
                anchorProvider
            );

            console.log('program is: ', _program);

            setProgram(_program);

            /*** search for existing MyAccount account */
            fetchAccount(_program)
            .then((result) => {
                if(result){
                    findPDAforAuthority(_program)
                    .then((pda) => {
                        setAccount({publicKey: pda, dataset: result});
                    })
                }
            })
            .catch((reason) => console.log(reason));
        }
    }, [wallet, connection]);

  return (
  <>
    {wallet && connection 
    ? 
    (
      account 
      ? 
      (
        <>
          {`Counter: ${account.dataset.count.toString()}`} <br />
          <>
            <button onClick={increaseAccountCounter}>Increase</button>
            <br />
          </>
        </>
      ) 
      : 
      (
        <>
          <button onClick={initAccount}>Initialize</button>
          <br />
        </>
      )
    ) 
    :
     null
    }
    <WalletMultiButton />
  </>
);
}

const Context: React.FC<{ children: ReactNode }> = ({ children }) => {
    const network = WalletAdapterNetwork.Devnet;

    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [new PhantomWalletAdapter(),],[]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

const Home: React.FC = () => {
  return (
    <Context>
      <Content />
    </Context>
  );
}

export default Home;
```

# Solana Hello World

---

## Hello World Project

We want to create a simple program in Solana. This app includes a 
**numeric value** and **authority information** to identify who can modify the 
account data.

---

## Init Anchor Project

To create a new project, we can use this command:
```bash
anchor init project_name
anchor init hello_world
```

After creating new project with Anchor, we will get these files. Anchor uses two technologies for development. First is Rust for smart contract development
and Node.js for testing and front-end development:

```bash
Anchor.toml   # specify network and wallet
Cargo.toml    # define the dependencies for the project
app/          # front-end Dapp source code
migrations/   # scripting for deploying the program to the Solana blockchain
node_modules/ # contains dependencies installed by npm or Yarn
package.json  # defines Node.js project metadata and dependencies
programs/     # contains Solana programs source code in lib.rs
tests/        # contains test files for the Solana program
tsconfig.json # configuration for TypeScript compiler options
yarn.lock     # locks dependency versions for consistent Yarn installs
.gitignore    # specifies files and directories to be ignored by Git
```

---

## First Solana Program

```rust
Line 01: use anchor_lang::prelude::*;

Line 03: declare_id!("36a8aY2SjQczY5167wDFi4PFqN2YWzehPtD29XbvBvhR");

Line 05: #[program]
Line 06: pub mod example {
Line 07:    use super::*;

Line 09:    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
Line 10:       msg!("Greetings from: {:?}", ctx.program_id);
Line 11:       Ok(())
Line 12:    }
Line 13:}
```

**Line 1:** `anchor_lang` is a crate and `prelude` is a module. We import all the 
codes of the `prelude` module in our program to use them.

**Line 3:** The macro `declare_id` from crate `anchor_lang` is used to define the 
address (or public key) of the program. You remember that the program is some kind 
of account and has a public key, right? Also, in the Anchor.toml file, you can find it:

```bash
## Anchor.toml
[programs.localnet]
example = "36a8aY2SjQczY5167wDFi4PFqN2YWzehPtD29XbvBvhR"
```

Both values need to match when we deploy the program to a target cluster. 
Anchor will use this address for security checks and makes the address accessible to other crates.

**Lines 5-6:** We define a new public module `example` on line 6 and define this module as a Solana program by attaching the attribute macro `#[program]` from crate `anchor_lang` to it.

**Line 9:** the program's first **endpoint** function that takes at least one argument (off-chain and on-chain). An `endpoint` is declared as a public function in this context, and the function has access to all accounts that a required anchor lang crate.

With this function we can access to all the accounts for example account with Initialize struct which pass as a context to Context (the deserialized struct will pass through the context). An endpoint always returns a `Result` enum. Using the `Result` enum for returning from functions is a fundamental concept of Rust development. Here the function returns nothing. `Ok(())` means successful and returns 
nothing.

---

## Serialization and Deserialization in Solana

If you came from JS, I wrote an article about [Serialization and Deserialization in JS](https://mehran.codes/lms/articles/javascript/serialization), you can read that first.

In desktop or server Rust programs you don’t manually serialize every struct to
bytes just to work with it in memory, your code and data share the same process.

As we know from the previous article:
On Solana, the program account, the storage account and the token account are
completely separate on–chain entities, so you need a defined way to pass data back
and forth.
```bash
program account             storage account
(address123)                (address456)
       ||                          ||
       ||                          ||
       ||                          ||
  Communication with serialization and deserialization.
  DApp needs to know both address for both accounts.
```

Solana programs run in a restricted, no-std Rust environment there’s no built-in runtime reflection or dynamic typing. You must explicitly define how your types map to raw bytes. In Solana, every byte counts, and Anchor leverages traits like `BorshSerialize`/`BorshDeserialize` (under the hood) so you get deterministic, compact layouts. You as the developer pick or derive which serializer, so you control size, alignment, and performance.

In the Solana/Anchor context, whenever you read an account’s data field you’re deserializing those bytes into your `Counter` type, and whenever you write back you’re serializing it.

---

## Adding Storage Account

```rust
Line 01: #[account]
Line 02: #[derive(Default)]
Line 03: pub struct Counter {
Line 04:     authority: Pubkey,
Line 05:     count: u64
Line 06: }
```

This code will store the numeric value and the account's authority information. This authority will be only entity that can apply changes to this data value via endpoints. `count` can hold 64-bit unsigned integer of data.

By assigning the `#[account]` macro to this structure, we implicitly add certain 
functions (like serializers and deserializers) to it that are required to reference 
this structure in the context of an account.

`#[derive(Default)]` ensures that all fields of this structure are initialized with 
default values whenever a new instance of the structure is created.

---

## Initialize Account Struct

```rust
Line 01: #[derive(Accounts)]
Line 02: pub struct Initialize<'info> {

Line 04:     #[account(mut)]
Line 05:     pub payer: Signer<'info>,

Line 07:     #[account(init, payer = payer, space = 8 + 32 + 8)]
Line 08:     pub counter: Account<'info, Counter>,

Line 10:     pub system_program: Program<'info, System>,
Line 11: }
```

On this line we define an empty structure called Initialize that is passed to the context of our initialize endpoint. By adding the macro `#[derive(Accounts)]`, we add a deserializer that converts this struct into the `anchor_lang::Accounts trait`. This ensures requisite constraint checks on the accounts we need to use in the context of an endpoint. Later, we will have structures that hold account information that we then can access within an endpoint through the context field `ctx.accounts`.

The first change made when we compare this code with the minimal version of the 
base program is that we added the **lifetime annotation** info to the structure itself and all of its fields. This is another basic concept of Rust called generic 
lifetimes. In the context of our structure, this means that an instance of this 
structure cannot go out of scope before all the components it refers to 
(that are also assigned to that lifetime parameter) are out of scope.

Next, we have our first account information via the field authority, which is of 
the type `anchor_lang::accounts::Signer`. Signer is just an extension of the general account wrapper type Account (`anchor_lang::accounts::Account`) that adds some 
validation to ensure that this account signed the transaction of the corresponding function call. 

By adding the macro #[account(mut)] to our authority account, we are adding the constraint that this account is mutable. This constraint is required for our authority account since it will also pay for the rent of the new account that will be created. Therefore, the account must be mutable to transfer the rent out of the authority account (aka to modify its SOL balance).

The field `counter` is a reference to the new account that should be created. It is of type Account with our data structure `Counter` as its underlying generic data type. We trigger the initialization of this new account by adding the account macro with an init constraint applied to it. 

When we apply the init constraint, we must provide further information regarding the initialization of the account. Via payer, we specify who is paying the rent for the new account. As already briefly touched on above, we specify that the signer of the transaction, our authority account, will pay the rent for the new account. Furthermore, we need to specify how much space (in bytes) is required to store the account’s data. To store an account with an instance of our new type `Counter`, we need a total of 48 bytes (8 + 32 + 8). The first 8 bytes.

---

## Account Struct

The struct defined between the module and the storage account is known as an Accounts struct. This struct is crucial for defining the accounts that your program will interact with. Each function in your program can have its own Accounts struct, which specifies the accounts that need to be passed in when the function is called.

Purpose of the Accounts Struct:

- **Account Management:** The Accounts struct allows you to manage multiple accounts in a single function call. It specifies which accounts are required, their mutability (whether they can be modified), and any initialization requirements.

- **Validation:** Anchor automatically validates the accounts based on the struct definition. For example, it checks if the authority is a signer and if my_account is initialized correctly.

- **Context:** The struct provides context for the function, allowing you to access the accounts easily within the function.

---

## The Complete Code

```rust
use anchor_lang::prelude::*;
 
declare_id!("6khKp4BeJpCjBY1Eh39ybiqbfRnrn2UzWeUARjQLXYRC");
 
#[program]
pub mod example {
    use super::*;
 
    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        let counter = &mut ctx.accounts.counter; // Use mutable reference since we're initializing
        counter.authority = ctx.accounts.payer.key(); // Set the authority to the payer's public key
        counter.count = 0; // Initialize count to 0
        msg!("Counter account created! Current count: {}", counter.count);
        Ok(())
    }
 
    pub fn increment(ctx: Context<Increment>) -> Result<()> {
        let counter = &mut ctx.accounts.counter;
        msg!("Previous counter: {}", counter.count);
        
        // Optional: Validate that the signer is the authority
        if ctx.accounts.authority.key() != counter.authority {
            return Err(ProgramError::InvalidAccountData.into());
        }
 
        counter.count += 1;
        msg!("Counter incremented! Current count: {}", counter.count);
        Ok(())
    }
}
 
#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(mut)]
    pub payer: Signer<'info>,
 
    #[account(
        init,
        payer = payer,
        space = 8 + 8 + 32
    )]
    pub counter: Account<'info, Counter>,
    
    pub system_program: Program<'info, System>,
}
 
#[derive(Accounts)]
pub struct Increment<'info> {
    #[account(mut)]
    pub counter: Account<'info, Counter>,
    
    #[account(mut)]
    pub authority: Signer<'info>,
}
 
#[account]
pub struct Counter {
    pub count: u64,
    pub authority: Pubkey,
}
```

---

## Build and Deployment

We can build and deploy the smart contract with this command:

```bash
anchor build
anchor deploy
```

---

## Solidity equivalent

Here is the equivalent implementation of this contract with Solidity:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    struct Counter {
        address authority;
        uint64 count;
    }

    mapping(address => Counter) private accounts;

    modifier onlyAuthority() {
        require(msg.sender == accounts[msg.sender].authority, "Not authorized");
        _;
    }

    function initialize() external {
        require(accounts[msg.sender].authority == address(0), "Account already initialized");
        
        accounts[msg.sender] = Counter({
            authority: msg.sender,
            count: 0
        });
    }

    function increase() external onlyAuthority {
        accounts[msg.sender].count += 1;
    }

    function getData() external view returns (uint64) {
        return accounts[msg.sender].data;
    }
}

```
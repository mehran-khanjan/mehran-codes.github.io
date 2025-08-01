# Solana Hello World

---

## Hello World Project

We want to create a simple hello world app in Solana. This app includes a **numeric counter** 
and **authority information** to identify who can modify the account data. Also, we have 
three functions increase, decrease and set.

---

## Init Anchor Project

To create a new project, we can use this command:
```bash
anchor init project_name
anchor init hello_world
```

After creating new project with Anchor, we will get these files:
```bash
Anchor.toml   # specify network and wallet
Cargo.toml    # define the dependencies for the project
app/          # front-end Dapp source code
migrations/   # scripting for deploying the program to the Solana blockchain
node_modules/
package.json
programs/     # contains Solana programs source code in lib.rs
tests/
tsconfig.json
yarn.lock
.gitignore
```

Anchor uses two technologies for development. First is Rust for smart contract development
and Node.js for testing and front-end development.

---

## First Solana Program

```rust
Line 01: use anchor_lang::prelude::*;

Line 03: declare_id!("36a8aY2SjQczY5167wDFi4PFqN2YWzehPtD29XbvBvhR");

Line 05: #[program]
Line 06: pub mod test_solana_article {
Line 07:    use super::*;

Line 09:    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
Line 10:        msg!("Greetings from: {:?}", ctx.program_id);
Line 11:       Ok(())
Line 12:    }
Line 13:}

Line 15: #[derive(Accounts)]
Line 16: pub struct Initialize {}

```

**Line 1:** anchor_lang is a crate and prelude is a module. We import all the codes of the
prelude module in our program to use them.

**Line 3:** The macro declare_id from crate anchor_lang is used to define the address 
(or public key) of the program. You remember that the program is some kind of account
and has a public key, right? Also, in the Anchor.toml file, you can find it:

```bash
## Anchor.toml
[programs.localnet]
test_solana_article = "36a8aY2SjQczY5167wDFi4PFqN2YWzehPtD29XbvBvhR"
```

Both values need to match when we deploy the program to a target cluster. 
Anchor will use this address for security checks and makes the address accessible to 
other crates.

**Lines 5-6:**: We define a new public module test_solana_article on line 6 and define 
this module as a Solana program by attaching the attribute macro #[program] 
from crate anchor_lang to it.

**Line 9:** the program's first **endpoint** function that takes at least one argument 
(off-chain and on-chain). An endpoint is declared as a public function in this 
context, and the function has access to all accounts that a required anchor lang crate.
With this function we can access to all the accounts for example account with Initialize
struct which pass as a context to Context. An endpoint always returns a Result enum. 
Using the Result enum for returning from functions is a fundamental concept of Rust 
development. Here the function returns nothing. Ok(()) means successful and returns nothing.

**Line 15-16:** On this line we define an empty structure called Initialize that is 
passed to the context of our initialize endpoint on line 9. By adding the 
macro #[derive(Accounts)], we add a deserializer that converts this struct into 
the anchor_lang::Accounts trait. This ensures requisite constraint checks on the 
accounts we need to use in the context of an endpoint. Later, we will have structures
that hold account information that we then can access within an endpoint through the
context field ctx.accounts.

---

## Adding Storage Account

This code will store the numeric value and the account's authority information. This
authority will be only entity that can apply changes to this data value via endpoints.

data can hold 64-bit unsigned integer of data.

By assigning the #[account] macro to this structure, we implicitly add certain 
functions (like serializers and deserializers) to it that are required to reference 
this structure in the context of an account.

#[derive(Default)] ensures that all fields of this structure are initialized with 
default values whenever a new instance of the structure is created.

```rust
#[account]
#[derive(Default)]
pub struct MyAccount {
    authority: Pubkey,
    data: u64
}
```

---

## Initialize Account Struct

The first change made when we compare this code with the minimal version of the 
base program is that we added the lifetime annotation info to the structure itself 
and all of its fields. This is another basic concept of Rust called generic 
lifetimes. In the context of our structure, this means that an instance of this 
structure cannot go out of scope before all of the components it refers to 
(that are also assigned to that lifetime parameter) are out of scope.

Next, we have our first account information via the field authority, which is of 
the type **anchor_lang::accounts::Signer**. Signer is just an extension of the general 
account wrapper type Account (anchor_lang::accounts::Account) that adds some 
validation to ensure that this account signed the transaction of the 
corresponding function call. By adding the macro #[account(mut)] to our authority 
account, we are adding the constraint that this account is mutable. This constraint 
is required for our authority account since it will also pay for the rent of the 
new account that will be created. Therefore, the account must be mutable to transfer 
the rent out of the authority account (aka to modify its SOL balance).

The field my_account is a reference to the new account that should be created. 
It is of type Account with our data structure MyAccount as its underlying generic 
data type. We trigger the initialization of this new account by adding the account 
macro with an init constraint applied to it. When we apply the init constraint, we 
must provide further information regarding the initialization of the account. 
Via payer, we specify who is paying the rent for the new account. As already 
briefly touched on above, we specify that the signer of the transaction, our 
authority account, will pay the rent for the new account. Furthermore, we need to 
specify how much space (in bytes) is required to store the account’s data. To 
store an account with an instance of our new type MyAccount, we need a total of 
48 bytes (8 + 32 + 8). The first 8 bytes.

```rust
#[derive(Accounts)]
pub struct Initialize<'info> {

    #[account(mut)]
    pub authority: Signer<'info>,

    #[account(init, payer = authority, space = 8 + 32 + 8)]
    pub my_account: Account<'info, MyAccount>,

    pub system_program: Program<'info, System>,
}
```

---

## Solidity equivalent

Here is the equivalent implementation of this contract with Solidity:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    struct MyAccount {
        address authority;
        uint64 data;
    }

    mapping(address => MyAccount) private accounts;

    modifier onlyAuthority() {
        require(msg.sender == accounts[msg.sender].authority, "Not authorized");
        _;
    }

    function initialize() external {
        require(accounts[msg.sender].authority == address(0), "Account already initialized");
        
        accounts[msg.sender] = MyAccount({
            authority: msg.sender,
            data: 0
        });
    }

    function increase() external onlyAuthority {
        accounts[msg.sender].data += 1;
    }

    function decrease() external onlyAuthority {
        require(accounts[msg.sender].data > 0, "Cannot decrease value of 0");
        accounts[msg.sender].data -= 1;
    }

    function set(uint64 value) external onlyAuthority {
        accounts[msg.sender].data = value;
    }

    function getData() external view returns (uint64) {
        return accounts[msg.sender].data;
    }
}

```
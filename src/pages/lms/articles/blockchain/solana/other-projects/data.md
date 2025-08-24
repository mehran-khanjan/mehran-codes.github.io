## Token Transfer

```rust
#[program]
pub mod token_mint {
    use super::*;

    pub fn mint_token(ctx: Context<MintToken>, amount: u64) -> Result<()> {
        let token_account = &mut ctx.accounts.token_account;
        token_account.amount += amount;
        Ok(())
    }

    pub fn transfer_token(ctx: Context<TransferToken>, amount: u64) -> Result<()> {
        let sender = &mut ctx.accounts.sender;
        let receiver = &mut ctx.accounts.receiver;

        if sender.amount < amount {
            return Err(ErrorCode::InsufficientFunds.into());
        }

        sender.amount -= amount;
        receiver.amount += amount;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct MintToken<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,
    #[account(init, payer = authority, space = 8 + 8)]
    pub token_account: Account<'info, TokenAccount>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct TransferToken<'info> {
    #[account(mut)]
    pub sender: Account<'info, TokenAccount>,
    #[account(mut)]
    pub receiver: Account<'info, TokenAccount>,
}

#[account]
#[derive(Default)]
pub struct TokenAccount {
    amount: u64,
}

```

## Voting System

```rust
#[program]
pub mod voting_system {
    use super::*;

    pub fn create_poll(ctx: Context<CreatePoll>, question: String, options: Vec<String>) -> Result<()> {
        let poll = &mut ctx.accounts.poll;
        poll.question = question;
        poll.options = options;
        poll.votes = vec![0; options.len()]; // Initialize votes
        Ok(())
    }

    pub fn vote(ctx: Context<Vote>, option_index: usize) -> Result<()> {
        let poll = &mut ctx.accounts.poll;
        if option_index >= poll.options.len() {
            return Err(ErrorCode::InvalidOption.into());
        }
        poll.votes[option_index] += 1;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct CreatePoll<'info> {
    #[account(init, payer = authority, space = 8 + 64 + 4 * 32)]
    pub poll: Account<'info, Poll>,
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Vote<'info> {
    #[account(mut)]
    pub poll: Account<'info, Poll>,
}

#[account]
#[derive(Default)]
pub struct Poll {
    question: String,
    options: Vec<String>,
    votes: Vec<u64>,
}

```

---

## Escrow Service

```rust
#[program]
pub mod escrow_service {
    use super::*;

    pub fn create_escrow(ctx: Context<CreateEscrow>, amount: u64) -> Result<()> {
        let escrow = &mut ctx.accounts.escrow;
        escrow.amount = amount;
        escrow.is_fulfilled = false;
        Ok(())
    }

    pub fn release_funds(ctx: Context<ReleaseFunds>) -> Result<()> {
        let escrow = &mut ctx.accounts.escrow;
        if escrow.is_fulfilled {
            return Err(ErrorCode::AlreadyFulfilled.into());
        }
        // Logic to release funds
        escrow.is_fulfilled = true;
        Ok(())
    }

    pub fn refund(ctx: Context<Refund>) -> Result<()> {
        let escrow = &mut ctx.accounts.escrow;
        if escrow.is_fulfilled {
            return Err(ErrorCode::AlreadyFulfilled.into());
        }
        // Logic to refund funds
        Ok(())
    }
}

#[account]
#[derive(Default)]
pub struct Escrow {
    amount: u64,
    is_fulfilled: bool,
}

```

---

## NFT Marketplace

```rust
#[program]
pub mod nft_marketplace {
    use super::*;

    pub fn mint_nft(ctx: Context<MintNFT>, metadata: String) -> Result<()> {
        let nft = &mut ctx.accounts.nft;
        nft.metadata = metadata;
        nft.owner = *ctx.accounts.owner.key;
        Ok(())
    }

    pub fn list_nft(ctx: Context<ListNFT>, price: u64) -> Result<()> {
        let nft = &mut ctx.accounts.nft;
        nft.price = price;
        nft.is_for_sale = true;
        Ok(())
    }

    pub fn purchase_nft(ctx: Context<PurchaseNFT>) -> Result<()> {
        let nft = &mut ctx.accounts.nft;
        if !nft.is_for_sale {
            return Err(ErrorCode::NotForSale.into());
        }
        // Logic to transfer funds and ownership
        nft.is_for_sale = false;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct MintNFT<'info> {
    #[account(init, payer = owner, space = 8 + 64 + 32)]
    pub nft: Account<'info, NFT>,
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct ListNFT<'info> {
    #[account(mut)]
    pub nft: Account<'info, NFT>,
}

#[derive(Accounts)]
pub struct PurchaseNFT<'info> {
    #[account(mut)]
    pub nft: Account<'info, NFT>,
    pub buyer: Signer<'info>,
}

#[account]
#[derive(Default)]
pub struct NFT {
    metadata: String,
    owner: Pubkey,
    price: u64,
    is_for_sale: bool,
}

```

---

## DeFi Lending

```rust
#[program]
pub mod lending_protocol {
    use super::*;

    pub fn lend(ctx: Context<Lend>, amount: u64) -> Result<()> {
        let lender = &mut ctx.accounts.lender;
        lender.amount += amount;
        // Logic to calculate interest
        Ok(())
    }

    pub fn borrow(ctx: Context<Borrow>, amount: u64) -> Result<()> {
        let borrower = &mut ctx.accounts.borrower;
        // Logic to check collateral
        borrower.amount += amount;
        Ok(())
    }

    pub fn repay(ctx: Context<Repay>, amount: u64) -> Result<()> {
        let borrower = &mut ctx.accounts.borrower;
        borrower.amount -= amount;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Lend<'info> {
    #[account(mut)]
    pub lender: Account<'info, Lender>,
}

#[derive(Accounts)]
pub struct Borrow<'info> {
    #[account(mut)]
    pub borrower: Account<'info, Borrower>,
}

#[derive(Accounts)]
pub struct Repay<'info> {
    #[account(mut)]
    pub borrower: Account<'info, Borrower>,
}

#[account]
#[derive(Default)]
pub struct Lender {
    amount: u64,
}

#[account]
#[derive(Default)]
pub struct Borrower {
    amount: u64,
    collateral: u64,
}

```

---

## Multi Signature Wallet
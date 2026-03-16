# ScoreTracker – Soroban Smart Contract

## Project Description

ScoreTracker is a decentralized smart contract built using **Soroban on the Stellar blockchain**.
The contract provides a simple on-chain system for **tracking and updating player scores** in a transparent and tamper-proof manner.

The project demonstrates how Soroban smart contracts can be used to store, retrieve, and update structured data on-chain.

ScoreTracker can be used as a foundational component for applications such as **blockchain games, competitions, leaderboards, and reward systems**.

---

## What It Does

ScoreTracker allows users or applications to manage player scores directly on the Stellar blockchain.

The smart contract enables:

* Storing player scores
* Retrieving player scores
* Incrementing scores when players earn points

All data is stored on-chain using **Soroban contract storage**, ensuring integrity and transparency.

---

## Features

* Decentralized score storage on blockchain
* Add or update player scores
* Retrieve score for any player
* Increment score with additional points
* Simple and efficient Soroban smart contract
* Built using **Rust and Soroban SDK**

---

## Smart Contract Functions

### `set_score(player, score)`

Stores or updates the score for a specific player.

### `get_score(player)`

Returns the current score of a player.

### `add_points(player, points)`

Adds points to an existing player's score.

---

## Tech Stack

* **Blockchain:** Stellar
* **Smart Contract Platform:** Soroban
* **Programming Language:** Rust
* **Framework:** soroban-sdk
* **Compilation Target:** WebAssembly (WASM)

---

## Project Structure

```
scoretracker
│
├── src
│   └── lib.rs
│
├── Cargo.toml
├── README.md
└── target
```

---

## How to Build the Contract

Clone the repository and run:

```
cargo build --target wasm32-unknown-unknown --release
```

The compiled contract will be generated in:

```
target/wasm32-unknown-unknown/release/scoretracker.wasm
```

---

## Deployment

Deploy the contract to the Stellar **testnet** using Soroban CLI.

Example command:

```
soroban contract deploy \
--wasm target/wasm32-unknown-unknown/release/scoretracker.wasm \
--source alice \
--network testnet
```

After deployment you will receive a **Contract ID**.

---

## Deployed Smart Contract Link

ScoreTracker Contract:

(Add your deployed contract link here)

Example:

https://stellar.expert/explorer/testnet/contract/YOUR_CONTRACT_ID

---

## Example Usage

Set player score:

```
soroban contract invoke \
--id CONTRACT_ID \
--source alice \
--network testnet \
-- \
set_score --player Alice --score 10
```

Get player score:

```
soroban contract invoke \
--id CONTRACT_ID \
--network testnet \
-- \
get_score --player Alice
```

---

## Future Improvements

* Global leaderboard functionality
* Player ranking system
* Frontend dashboard
* Wallet integration
* Multi-player game support

---

## License

MIT License
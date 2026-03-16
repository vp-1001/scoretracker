#![no_std]

use soroban_sdk::{contract, contractimpl, Env, Symbol};

#[contract]
pub struct ScoreTracker;

#[contractimpl]
impl ScoreTracker {

    pub fn set_score(env: Env, player: Symbol, score: u32) {
        env.storage().instance().set(&player, &score);
    }

    pub fn get_score(env: Env, player: Symbol) -> u32 {
        env.storage().instance().get(&player).unwrap_or(0)
    }

    pub fn add_points(env: Env, player: Symbol, points: u32) {
        let score: u32 = env.storage().instance().get(&player).unwrap_or(0);
        env.storage().instance().set(&player, &(score + points));
    }
}
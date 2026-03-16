import { rpc, Contract } from "@stellar/stellar-sdk";

const server = new rpc.Server("https://soroban-testnet.stellar.org");

export const contractId = "CC6D222KLETOT34MHYFRPSXZGHNTIXJ2RQXCMNGHHUPWX5TRX2BJ4JAM";

export const contract = new Contract(contractId);

export { server };
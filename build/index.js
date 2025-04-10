#!/usr/bin/env node
import { ACTIONS, SolanaAgentKit, startMcpServer } from 'solana-agent-kit';
import * as dotenv from 'dotenv';
import { getTokenAddressBySymbolAction } from './actions.js';
dotenv.config();
function validateEnvironment() {
    const requiredEnvVars = {
        SOLANA_PRIVATE_KEY: process.env.SOLANA_PRIVATE_KEY,
        RPC_URL: process.env.RPC_URL,
    };
    const missingVars = Object.entries(requiredEnvVars)
        .filter(([_, value]) => !value)
        .map(([key]) => key);
    if (missingVars.length > 0) {
        throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
    }
}
async function main() {
    try {
        validateEnvironment();
        const agent = new SolanaAgentKit(process.env.SOLANA_PRIVATE_KEY, process.env.RPC_URL, {
            OPENAI_API_KEY: process.env.OPENAI_API_KEY || '',
            PERPLEXITY_API_KEY: process.env.PERPLEXITY_API_KEY || '',
        });
        const mcp_actions = {
            FETCH_PRICE_ACTION: ACTIONS.FETCH_PRICE_ACTION,
            WALLET_ADDRESS_ACTION: ACTIONS.WALLET_ADDRESS_ACTION,
            BALANCE_ACTION: ACTIONS.BALANCE_ACTION,
            TRANSFER_ACTION: ACTIONS.TRANSFER_ACTION,
            TRADE_ACTION: ACTIONS.TRADE_ACTION,
            GET_TOKEN_ADDRESS_BY_SYMBOL_ACTION: getTokenAddressBySymbolAction,
        };
        await startMcpServer(mcp_actions, agent, {
            name: 'solana-agent',
            version: '0.0.1',
        });
    }
    catch (error) {
        console.error('Failed to start MCP server:', error instanceof Error ? error.message : String(error));
        process.exit(1);
    }
}
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});
main();

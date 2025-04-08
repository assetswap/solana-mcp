#!/usr/bin/env node

import { ACTIONS, SolanaAgentKit, startMcpServer } from 'solana-agent-kit';
import * as dotenv from 'dotenv';

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
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
  }
}

async function main() {
  try {
    validateEnvironment();

    const agent = new SolanaAgentKit(
      process.env.SOLANA_PRIVATE_KEY!,
      process.env.RPC_URL!,
      {
        OPENAI_API_KEY: process.env.OPENAI_API_KEY || '',
        PERPLEXITY_API_KEY: process.env.PERPLEXITY_API_KEY || '',
      }
    );

    const mcp_actions = {
      GET_ASSET: ACTIONS.GET_ASSET_ACTION,
      DEPLOY_TOKEN: ACTIONS.DEPLOY_TOKEN_ACTION,
      GET_PRICE: ACTIONS.FETCH_PRICE_ACTION,
      WALLET_ADDRESS: ACTIONS.WALLET_ADDRESS_ACTION,
      BALANCE: ACTIONS.BALANCE_ACTION,
      TRANSFER: ACTIONS.TRANSFER_ACTION,
      MINT_NFT: ACTIONS.MINT_NFT_ACTION,
      TRADE: ACTIONS.TRADE_ACTION,
      REQUEST_FUNDS: ACTIONS.REQUEST_FUNDS_ACTION,
      RESOLVE_DOMAIN: ACTIONS.RESOLVE_DOMAIN_ACTION,
      GET_TPS: ACTIONS.GET_TPS_ACTION,
    };

    await startMcpServer(mcp_actions, agent, {
      name: 'solana-agent',
      version: '0.0.1',
    });
  } catch (error) {
    console.error(
      'Failed to start MCP server:',
      error instanceof Error ? error.message : String(error)
    );
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

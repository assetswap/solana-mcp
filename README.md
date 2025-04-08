# Solana MCP Server

A Model Context Protocol (MCP) server that provides onchain tools, allowing it to interact with the Solana blockchain through a standardized interface. This implementation is based on the Solana Agent Kit and enables AI agents to perform blockchain operations seamlessly.

## Overview

This MCP server extends agent capabilities by providing tools to:

- Interact with Solana blockchain
- Execute transactions
- Query account information
- Manage Solana wallets

The server implements the Model Context Protocol specification to standardize blockchain interactions for AI agents.

## Prerequisites

- Node.js (v16 or higher)
- pnpm (recommended), npm, or yarn
- Solana wallet with private key
- Solana RPC URL (mainnet, testnet, or devnet)

## Configuration

### Environment Setup

Create a `.env` file with your credentials:

```env
# Solana Configuration
SOLANA_PRIVATE_KEY=your_private_key_here
RPC_URL=your_solana_rpc_url_here
OPENAI_API_KEY=your_openai_api_key # OPTIONAL
```

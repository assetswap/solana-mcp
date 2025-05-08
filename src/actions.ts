// No longer using axios since we removed CoinMarketCap
import { z } from 'zod';
import { Action, SolanaAgentKit } from 'solana-agent-kit';

// Direct implementation of getTokenAddressFromTicker function
async function getTokenAddressFromTicker(ticker: string): Promise<string | null> {
  try {
    const response = await fetch(
      `https://api.dexscreener.com/latest/dex/search?q=${ticker}`,
    );
    const data = await response.json();

    if (!data.pairs || data.pairs.length === 0) {
      return null;
    }

    // Filter for Solana pairs only and sort by FDV
    let solanaPairs = data.pairs
      .filter((pair: any) => pair.chainId === "solana")
      .sort((a: any, b: any) => (b.fdv || 0) - (a.fdv || 0));

    solanaPairs = solanaPairs.filter(
      (pair: any) =>
        pair.baseToken.symbol.toLowerCase() === ticker.toLowerCase(),
    );

    // Return the address of the highest FDV Solana pair
    return solanaPairs[0]?.baseToken.address || null;
  } catch (error) {
    console.error("Error fetching token address from DexScreener:", error);
    return null;
  }
}

const tokens = new Map(
  Object.entries({
    SOL: 'So11111111111111111111111111111111111111112',
    USDC: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    USDT: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
  })
);

export const getTokenAddressBySymbolAction: Action = {
  name: 'GET_TOKEN_ADDRESS_BY_SYMBOL',
  similes: [
    'get token address',
    'get token details',
    'get token info',
    'get token address by symbol',
    'get token mint address',
    'get token mint address by symbol',
  ],
  description:
    'Get the token address by symbol. Used for trading (buying/selling) tokens.',
  examples: [
    [
      {
        input: {
          symbol: 'SOL',
        },
        output: {
          status: 'success',
          result: 'So11111111111111111111111111111111111111112',
          message:
            'Token address for SOL: So11111111111111111111111111111111111111112',
        },
        explanation: 'Get the token address for SOL',
      },
    ],
  ],
  schema: z.object({
    symbol: z.string().min(1, 'Token symbol is required'),
  }),
  handler: async (agent: SolanaAgentKit, _input: Record<string, any>) => {
    const symbol = _input.symbol;
    const normalizedSymbol = symbol.toUpperCase();

    // First check our local cache for common tokens
    if (tokens.has(normalizedSymbol)) {
      const tokenAddress = tokens.get(normalizedSymbol);
      return {
        status: 'success',
        result: tokenAddress,
        message: `Token address for ${normalizedSymbol}: ${tokenAddress}`,
      };
    }

    // Try to get the token address using DexScreener
    try {
      console.log(`Fetching token address for ${normalizedSymbol} using DexScreener...`);
      const tokenAddress = await getTokenAddressFromTicker(normalizedSymbol);
      
      if (tokenAddress) {
        // Cache the result for future use
        tokens.set(normalizedSymbol, tokenAddress);
        
        return {
          status: 'success',
          result: tokenAddress,
          message: `Token address for ${normalizedSymbol}: ${tokenAddress}`,
        };
      }
    } catch (error: any) {
      console.error('Error fetching token address from DexScreener:', error);
      // Continue to fallback methods
    }

    // No longer using CoinMarketCap as fallback
    // If DexScreener didn't find the token, return error

    return {
      status: 'error',
      message: `Token details not found for symbol: ${normalizedSymbol}`,
    };
  },
};

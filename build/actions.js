import axios from 'axios';
import { z } from 'zod';
const tokens = new Map(Object.entries({
    SOL: 'So11111111111111111111111111111111111111112',
    USDC: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    USDT: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
}));
export const getTokenAddressBySymbolAction = {
    name: 'GET_TOKEN_ADDRESS_BY_SYMBOL',
    similes: [
        'get token address',
        'get token details',
        'get token info',
        'get token address by symbol',
        'get token mint address',
        'get token mint address by symbol',
    ],
    description: 'Get the token address by symbol. Used for trading (buying/selling) tokens.',
    examples: [
        [
            {
                input: {
                    symbol: 'SOL',
                },
                output: {
                    status: 'success',
                    result: 'So11111111111111111111111111111111111111112',
                    message: 'Token address for SOL: So11111111111111111111111111111111111111112',
                },
                explanation: 'Get the token address for SOL',
            },
        ],
    ],
    schema: z.object({
        symbol: z.string().min(1, 'Token symbol is required'),
    }),
    handler: async (agent, _input) => {
        const symbol = _input.symbol;
        const normalizedSymbol = symbol.toUpperCase();
        if (tokens.has(normalizedSymbol)) {
            const tokenAddress = tokens.get(normalizedSymbol);
            return {
                status: 'success',
                result: tokenAddress,
                message: `Token address for ${normalizedSymbol}: ${tokenAddress}`,
            };
        }
        if (!process.env.COINMARKETCAP_API_KEY) {
            return {
                status: 'error',
            };
        }
        try {
            const response = await axios.get('https://pro-api.coinmarketcap.com/v2/cryptocurrency/info', {
                headers: {
                    'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY,
                },
                params: {
                    symbol: normalizedSymbol,
                },
            });
            if (response.data &&
                response.data.data &&
                response.data.data[normalizedSymbol]) {
                const tokenData = response.data.data[normalizedSymbol];
                for (const platformData of tokenData) {
                    if (platformData.platform &&
                        (platformData.platform.name.toLowerCase() === 'solana' ||
                            platformData.platform.symbol.toLowerCase() === 'sol')) {
                        const mintAddress = platformData.platform.token_address;
                        tokens.set(normalizedSymbol, mintAddress);
                        return {
                            status: 'success',
                            result: mintAddress,
                            message: `Token address for ${normalizedSymbol}: ${mintAddress}`,
                        };
                    }
                }
            }
        }
        catch (error) {
            console.error('Error fetching token details:', error);
            return {
                status: 'error',
                message: `Failed to fetch token details: ${error?.message}`,
            };
        }
        return {
            status: 'error',
            message: `Token details not found for symbol: ${normalizedSymbol}`,
        };
    },
};

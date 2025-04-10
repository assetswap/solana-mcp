import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

const test = async () => {
  const transport = new StdioClientTransport({
    command: 'node',
    args: ['build/index.js'],
  });

  const client = new Client({
    name: 'solana-agent-test-client',
    version: '0.0.1',
  });

  await client.connect(transport);

  const result = await client.callTool({
    name: 'GET_TOKEN_ADDRESS_BY_SYMBOL',
    arguments: {
      symbol: 'TRUMP',
    },
  });

  console.log('result:', result);
};

test().catch(console.error);

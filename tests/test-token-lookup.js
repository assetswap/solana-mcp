// Test script for getTokenAddressFromTicker function

// Direct implementation of getTokenAddressFromTicker function
async function getTokenAddressFromTicker(ticker) {
  try {
    console.log(`Searching for token: ${ticker}`);
    const response = await fetch(
      `https://api.dexscreener.com/latest/dex/search?q=${ticker}`,
    );
    const data = await response.json();

    if (!data.pairs || data.pairs.length === 0) {
      console.log('No pairs found');
      return null;
    }

    console.log(`Total pairs found: ${data.pairs.length}`);

    // Filter for Solana pairs only and sort by FDV
    let solanaPairs = data.pairs
      .filter((pair) => pair.chainId === "solana")
      .sort((a, b) => (b.fdv || 0) - (a.fdv || 0));

    console.log(`Solana pairs found: ${solanaPairs.length}`);

    solanaPairs = solanaPairs.filter(
      (pair) =>
        pair.baseToken.symbol.toLowerCase() === ticker.toLowerCase(),
    );

    console.log(`Matching symbol pairs: ${solanaPairs.length}`);

    if (solanaPairs.length === 0) {
      return null;
    }

    // Show the top result details
    const topResult = solanaPairs[0];
    console.log('\nTop result details:');
    console.log(`Name: ${topResult.baseToken.name}`);
    console.log(`Symbol: ${topResult.baseToken.symbol}`);
    console.log(`Address: ${topResult.baseToken.address}`);
    console.log(`FDV: $${topResult.fdv || 'N/A'}`);
    console.log(`Price USD: $${topResult.priceUsd || 'N/A'}`);
    console.log(`DEX: ${topResult.dexId}`);
    console.log(`Pair address: ${topResult.pairAddress}`);

    // Return the address of the highest FDV Solana pair
    return solanaPairs[0].baseToken.address;
  } catch (error) {
    console.error("Error fetching token address from DexScreener:", error);
    return null;
  }
}

// Test the function with COQ coin
async function testTokenLookup() {
  console.log('Testing token lookup for COQ coin...\n');
  const address = await getTokenAddressFromTicker('COQ');
  
  if (address) {
    console.log(`\nSuccess! Found token address: ${address}`);
  } else {
    console.log('\nFailed to find token address for COQ');
  }

  // Test with another popular token for comparison
  console.log('\n\nTesting token lookup for BONK coin...\n');
  const bonkAddress = await getTokenAddressFromTicker('BONK');
  
  if (bonkAddress) {
    console.log(`\nSuccess! Found token address: ${bonkAddress}`);
  } else {
    console.log('\nFailed to find token address for BONK');
  }
}

// Run the test
testTokenLookup();

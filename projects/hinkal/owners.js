const ETHEREUM_OWNER = "0x2ea81946fF675d5Eb88192144ffc1418fA442E28";
const ARBITRUM_OWNER = "0x41658B0DaF59Bb2FbB2D9A5249207011d2B364De";
const OPTIMISM_OWNER = "0x41658B0DaF59Bb2FbB2D9A5249207011d2B364De";
const POLYGON_OWNER = "0xeEeeb52E36c78b153caaB2761c369a50b066cDD5";
const AVALANCHE_OWNER = "0x41658B0DaF59Bb2FbB2D9A5249207011d2B364De";
const BNB_OWNER = "0x0036E884Cab4F427193839788EDEBB4B92B9a069";
const BASE_OWNER = "0x41658B0DaF59Bb2FbB2D9A5249207011d2B364De";
const BLAST_OWNER = "0x9606ebb543972fd8aed764341ead8ec94888b7b7";
const BLAST_VOLATILE_OWNER = "0xba65d50cf4e6e739b2735338a964c3354faf9b19";

const ownerByChain = {
  ethereum: ETHEREUM_OWNER,
  arbitrum: ARBITRUM_OWNER,
  optimism: OPTIMISM_OWNER,
  polygon: POLYGON_OWNER,
  avax: AVALANCHE_OWNER,
  bsc: BNB_OWNER,
  base: BASE_OWNER,
  blast: {
    owner: BLAST_OWNER,
    volatileOwner: BLAST_VOLATILE_OWNER,
  },
};

module.exports = ownerByChain;

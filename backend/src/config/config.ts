import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
   alchemyProviderUrl: process.env.ALCHEMY_PROVIDER_URL,
    coralPayApiUrl: process.env.CORAL_PAY_API_URL || "",
    coralPayApiUrl2: process.env.CORAL_PAY_API_URL_2 || "",
    // coralPayApiKey: process.env.CORAL_PAY_API_KEY || "",
    contractAddress: "'0xB27a55FaB73d9e8c84dD9D0a3bD2694bb6571fbF’",
    network: process.env.NETWORK || "testnet",
};

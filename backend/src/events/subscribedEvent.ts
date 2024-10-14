import { ethers } from 'ethers';
import { config } from '../config/config';
import contractABI from '../abi/abi.json';
import { bundleValue } from '../api/data-bundle';
import { customerEnquiry } from '../api/customer-enquiry';

export const listenToSubscribedEvent = async () => {
  try {
    const provider = new ethers.JsonRpcProvider(config.alchemyProviderUrl);
    await provider.getBlockNumber();

    const contract = new ethers.Contract(config.contractAddress, contractABI, provider);

    contract.on("SubscriptionCreated", async (...args) => {
      try {
        const event = args[args.length - 1];
        const { paymentReference, phoneNumber, packageId, amount, customerName } = event.args;

        const CustomerEnquiryRequest = {
          customerId: phoneNumber,
          billerId: packageId,
          billerSlug: packageId,
          productName: packageId,
        };

        const vendValueRequest = {
          paymentReference,
          customerId: phoneNumber,
          packageId,
          channel: "WEB",
          amount,
          customerName,
          phoneNumber,
        };

        const customerResponse = await customerEnquiry(CustomerEnquiryRequest);
        console.log("Customer enquiry Response:", JSON.stringify(customerResponse, null, 2));

        const bundleResponse = await bundleValue(vendValueRequest);
        console.log("Bundle Value Response:", JSON.stringify(bundleResponse, null, 2));
      } catch (error: any) {
        console.error("Error in SubscriptionCreated handler:", error);
      }
    });

    console.log("Listening for SubscriptionCreated events...");
  } catch (error: any) {
    console.error("Error initializing event listener:", error);
  }
};

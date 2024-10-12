import axios from 'axios';
import { config } from '../config/config';
import { CustomerEnquiryRequest, CustomerEnquiryResponse } from '../models/model';

export const customerEnquiry = async (requestData: CustomerEnquiryRequest): Promise<CustomerEnquiryResponse> => {
    try {
        const response = await axios.post<CustomerEnquiryResponse>(config.coralPayApiUrl2, requestData, {
            headers: {
                "Content-Type": "application/json",
                // 'Authorization': `Bearer ${config.coralPayApiKey}`,
            },
        });
        console.log("Customer enquiry response from coralpay", response.data)
        return response.data;

    } catch (error: any) {
        throw new Error(`Error in customer enquiry request: ${error.message}`);
    }
};

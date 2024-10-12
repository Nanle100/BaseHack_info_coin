import axios from 'axios';
import { config } from '../config/config';
import { VendValueRequest, VendValueResponse } from '../models/model';

export const bundleValue = async (requestData: VendValueRequest): Promise<VendValueResponse> => {
    try {
        const response = await axios.post<VendValueResponse>(config.coralPayApiUrl, requestData, {
            headers: {
                "Content-Type": "application/json",
                // 'Authorization': `Bearer ${config.coralPayApiKey}`,
            },
        });
        console.log("Data bundle response from coralpay", response.data)
        return response.data;
    } catch (error: any) {
        throw new Error(`Error in data-bundle: ${error.message}`);
    }
};

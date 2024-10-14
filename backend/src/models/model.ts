export interface VendValueRequest {
    paymentReference: string;
    customerId: string;
    packageId: string;
    channel: string;
    amount: number;
    customerName: string;
    phoneNumber: string;
    email?: string;
    accountNumber?: string;
}

export interface CustomerEnquiryRequest {
    customerId: string;
    billerId: string;
    billerSlug: string;
    productName: string;
}

export interface CustomerEnquiryResponse {
    error: boolean;
    message: string;
    responseCode: string;
    responseData: {
        customer: {
            firstName: string,
            lastName: string,
            totalDue: number,
        };
    }
}

export interface VendValueResponse {
    error: boolean;
    status: string;
    message: string;
    responseCode: string;
    responseData: {
        packageName: string;
        paymentReference: string;
        transactionId: string;
        vendStatus: string;
        narration?: string;
        statusCode: number;
        amount: number;
        date: string;
        tokenData?: {
            stdToken: {
                amount: string;
                units: string;
            };
        };
    };
}

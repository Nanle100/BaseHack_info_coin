import express from 'express';
import { bundleValue } from './api/data-bundle';
import { listenToSubscribedEvent } from './events/subscribedEvent';
import { listenToSubscriptionRenewedEvent } from './events/subscriptionRenewedEvent';
import { customerEnquiry } from './api/customer-enquiry';

const app = express();
app.use(express.json());

app.get("/check", async (_, res) => {
    try {
       res.json("Ok")
    } catch (error: any) {
        res.status(500).send(`Error: ${error.message}`);
    }
});

app.post("/customer-enquire", async (req, res) => {
    try {
        const response = await customerEnquiry(req.body);
        res.json(response);
    } catch (error: any) {
        res.status(500).send(`Error fetching customer: ${error.message}`);
    }
});

app.post("/data-bundle", async (req, res) => {
    try {
        const response = await bundleValue(req.body);
        res.json(response);
    } catch (error: any) {
        res.status(500).send(`Error crediting customer: ${error.message}`);
    }
});

// Listen for Subscribed and SubscriptionRenewed events
listenToSubscribedEvent();
listenToSubscriptionRenewedEvent();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

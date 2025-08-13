import cron from "node-cron";
import { FoodContribution } from "../models/FoodContribution.js";
import { User } from "../models/User.js";

cron.schedule('0 0 * * *', async () => {
    try {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        const result = await FoodContribution.deleteMany({ createdAt: { $lt: yesterday } });

        console.log(`[CRON] Deleted ${result.deletedCount} food contributions older than 1 day.`);
         console.log("Resetting contributor flags...");
    await User.updateMany({ contributor: true }, { $set: { contributor: false } });
    } catch (error) {
        console.error('[CRON] Error deleting old contributions:', error);
    }
});

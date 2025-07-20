import mongoose from "mongoose"

const FoodContributionSchema = mongoose.Schema({
    quantity : {
        type : String,
        require : true
    },
    items : {
        type : String,
    },
    community: { type: mongoose.Schema.Types.ObjectId, ref: "Community" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true })

export const FoodContribution = mongoose.model("FoodContribution",FoodContributionSchema);
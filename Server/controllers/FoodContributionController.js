import { Community } from "../models/Community.js";
import { FoodContribution } from "../models/FoodContribution.js";

export const ContributeFood = async (req,res) =>{
    try {
        const userId = req.id;
        const { quantity, items, communityId } = req.body;

        if(!quantity || !items || !communityId){
            return res.status(400).json({
                message: "Please provide all required fields",
                success: false
            });
        }

        const community = await Community.findById(communityId);
        let temp = false;
        community.members.forEach((member) => {
            if(member.toString() === userId.toString()){
                temp = true;
            }
        });

        if(!temp){
            return res.status(403).json({
                message: "You are not a member of this community",
                success: false
            });
        }

        const food = await FoodContribution.create({
            quantity,
            items,
            community: communityId,
            user: userId
        });

        return res.status(201).json({
            message: "Food contributed successfully",
            success: true,
            food
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : "Internal Server Error",
            success: false
        })
    }
}

export const removeFoodContribution = async (req, res) => {
    try {
        const foodId = req.params.id;
        const foodContribution = await FoodContribution.findById(foodId);
        if (!foodContribution) {
            return res.status(404).json({
                message: "Food contribution not found",
                success: false
            });
        }

        if (foodContribution.user.toString() !== req.id) {
            return res.status(403).json({
                message: "You are not authorized to delete this contribution",
                success: false
            });
        }

        await FoodContribution.findByIdAndDelete(foodId);
        return res.status(200).json({
            message: "Food contribution deleted successfully",
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
}
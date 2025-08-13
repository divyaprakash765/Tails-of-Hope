import { Community } from "../models/Community.js";
import { User } from "../models/User.js";

export const createCommunity = async (req,res)=>{

   try {
    
        const userId = req.id;
        const {name, location} = req.body;

        const community_name = await Community.findOne({ name });
        if(community_name){
            return res.status(400).json({
                message : "Community already exists with this name",
                success : false
            })
        }
        const community = await Community.create({
            name: name,
            location: location,
            CreatedBy: userId
        })
        community.members.push(userId);
        await community.save();

        return res.status(201).json({
            message: "Community created successfully",
            success: true,
            community
        })

   } catch (error) {
       console.log(error);
       return res.status(500).json({
           message: "Internal server error",
           success: false
       });
   }
}

export const addMember = async (req,res)=>{
    try {
        
        const user = req.id;
        const { communityId } = req.body;
        const community = await Community.findOne({ _id: communityId });
        if(!community){
            return res.status(404).json({
                message: "Community not found",
                success: false
            });
        }

        if(community.members.includes(user)){
            return res.status(400).json({
                message: "User is already a member of this community",
                success: false
            });
        }

        community.members.push(user);
        await community.save();

        return res.status(200).json({
            message: "User added to community successfully",
            success: true,
            community
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

export const removeMember = async (req,res)=>{
    try {
        const user = req.id;
        const { userId } = req.body;
        const { communityId } = req.body;

        const community = await Community.findOne({ _id: communityId });
        if(!community){
            return res.status(404).json({
                message: "Community not found",
                success: false
            });
        }

        if(user === community.CreatedBy.toString()){
             community.members = community.members.filter(member => member.toString() !== userId);
             await community.save();
                return res.status(200).json({
                    message: "Member removed successfully",
                    success: true,
                    community
                });
        }
        else{
            return res.status(403).json({
                message: "Only the community creator can remove members",
                success: false
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

export const getAllCommunities = async (req,res)=>{
    try {
        const communities = await Community.find().populate("members", "name email");
        return res.status(200).json({
            message: "Communities fetched successfully",
            success: true,
            communities
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

export const getCommunityById = async (req,res)=>{
    try {
        const { communityId } = req.params;
        const community = await Community.findById(communityId);
        if(!community){
            return res.status(404).json({
                message: "Community not found",
                success: false
            });
        }
        return res.status(200).json({
            message: "Community fetched successfully",
            success: true,
            community
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

export const removeCommunity = async (req,res)=>{
    try {
        const communityId = req.params.communityId;
        const userId = req.id;
        const community = await Community.findById(communityId);

        if(!community){
            return res.status(404).json({
                message: "Community not found",
                success: false
            });
        }

        if(community.CreatedBy.toString() !== userId){
            return res.status(403).json({
                message : "Only the creator can delete the community",
                success: false
            })
        }

        await Community.findByIdAndDelete(communityId);
        return res.status(200).json({
            message: "Community deleted successfully",
            success: true
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

export const todays_contributor = async (req, res) => {
    try {
        const { userId } = req.body;
        const adminId = req.id; // Assuming this is verified admin
        
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false
            });
        }

        user.contributor = true;
        await user.save();

        return res.status(200).json({
            message: "Successfully made the contributor",
            success: true
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
};

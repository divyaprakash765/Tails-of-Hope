import { InjuryReport } from "../models/InjuryReport.js";

export const post_report = async (req, res) => {
    try {
        const userId = req.id;
        const { location, description, status = "pending", communityId } = req.body;

        if (!location || !description || !communityId) {
            return res.status(400).json({
                success: false,
                message: "Location, description, and communityId are required."
            });
        }

        const newReport = await InjuryReport.create({
            location,
            description,
            status,
            community: communityId,
            userId
        });

        return res.status(201).json({
            success: true,
            message: "Injury report submitted successfully",
            report: newReport
        });

    } catch (error) {
        console.error("Error in injury report:", error);
        return res.status(500).json({
            success: false,
            message: "Server error. Could not submit the report."
        });
    }
};

export const getAllreports = async (req,res)=>{
    try {
        const reports = await InjuryReport.find().sort({ createdAt: -1 });

        return res.status(200).json({
            message : "Injury reports fetched successfully",
            success : true,
            reports
        })
    } catch (error) {
        console.log(error);
    }
}

export const changeStatus = async (req,res)=>{
    try {
        const {status} = req.body;
        const {id} = req.params;
        const report = await InjuryReport.findById(id);;
        if(!report){
            return res.status(400).json({
                message : "not any report with this id",
                success : false
            })
        }
        report.status = status;
        await report.save();

        return res.status(200).json({
            message : "status change successfully",
            success : true
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteInjuryReports = async (req,res)=>{
    try {
        const {id} = req.params;
        const report = await InjuryReport.findById(id);
        if(!report){
            return res.status(400).json({
                message : "Injury is not find with this id",
                success : false
            })
        }

        if(report.status !== "treated"){
            return res.status(400).json({
                message : "Dog is not treated yet",
                success : false
            })
        }

        await report.deleteOne();

        return res.status(200).json({
            message : "report deleted successfully",
            success : true
        })
    } catch (error) {
        console.log(error);
    }
}
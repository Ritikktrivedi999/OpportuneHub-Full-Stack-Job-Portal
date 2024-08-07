import { Job } from "../models/job.model.js";
import { Application } from "../models/application.model.js";

// admin will post the Job
export const postJob = async (req, res) => {
    try {
        const {
            title,
            description,
            requirements,
            salary,
            location,
            jobType,
            experience,
            position,
            companyId,
        } = req.body;
        const userId = req.id;

        if (
            !title ||
            !description ||
            !requirements ||
            !salary ||
            !location ||
            !jobType ||
            !experience ||
            !position ||
            !companyId
        ) {
            return res.status(400).json({
                message: "Somethin is missing.",
                success: false,
            });
        }
        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: userId,
        });
        return res.status(201).json({
            message: "New job created successfully.",
            job,
            success: true,
        });
    } catch (error) {
        console.log(error);
    }
};
// For the Students
export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } }, 
                { description: { $regex: keyword, $options: "i" } },
            ],
        };
        const jobs = await Job.find(query)
            .populate({
                path: "company",
            })
            .sort({ createdAt: -1 });
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false,
            });
        }
        return res.status(200).json({
            jobs,
            success: true,
        });
    } catch (error) {
        console.log(error);
    }
};
// Get Job by Id
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path: "applications",             //populates the applications field of the job document with related data. The path option specifies the field to populate.
        });
        if (!job) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false,
            });
        }
        return res.status(200).json({ job, success: true });
    } catch (error) {
        console.log(error);
    }
};
// how many jobs are created by Admin

export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({ created_by: adminId }).populate({
            path: "company",
            createdAt: -1,
        });
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false,
            });
        }
        return res.status(200).json({
            jobs,
            success: true,
        });
    } catch (error) {
        console.log(error);
    }
};

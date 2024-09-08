import express, { application } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config({});
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: 'https://opportune-hub-full-stack-job-portal.vercel.app',  // Allow requests from your frontend
  credentials: true,                // Allow credentials (cookies, headers, etc.)
}));

const PORT = process.env.PORT || 3000;

//api connect
app.use("/api/v1/users", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/jobs", jobRoute)
app.use("/api/v1/application", applicationRoute)
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
  connectDB();
});

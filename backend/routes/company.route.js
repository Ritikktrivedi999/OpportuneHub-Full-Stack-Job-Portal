import express from "express";

import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
    getCompany,
    getCompanyById,
    registerCompany,
    updateCompany,
} from "../controllers/company.controller.js";
import { singleUpload } from "../middlewares/mutler.js";
const router = express.Router();

router.route("/register").post(isAuthenticated, registerCompany);
router.route("/get").get(isAuthenticated, getCompany);
router.route("/update/:id").put(isAuthenticated, updateCompany);
router.route("/get/:id").get(isAuthenticated,singleUpload, getCompanyById);

export default router;

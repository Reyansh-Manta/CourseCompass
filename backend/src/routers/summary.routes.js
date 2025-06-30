import { Router } from "express";
import { getTXTFile } from "../controllers/summary.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { textContent } from "../middlewares/readTXT.middleware.js";

const router = Router()

router.route("/get-file").post(upload.fields([
    {
        name: "chatFile"
    }
]),
    textContent,
    getTXTFile)

export default router
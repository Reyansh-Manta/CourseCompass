import { Summary } from "../models/summary.model.js";
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import fs, { readFileSync } from "fs"
import { summarizeChat } from "../utils/summarizeChat.js";

const getTXTFile = asyncHandler(async (req, res) => {

    const text = req.txtContent
    const summaryGen = async (req, res) => {

        try {
            const Summary = await summarizeChat(text)
            return res
                .status(200)
                .json(new ApiResponse(200, Summary, "Summary generated"))
        } catch (error) {
            throw new ApiError(502, "error generating th summary in the controller")
        }

    }
})


export {
    getTXTFile
}
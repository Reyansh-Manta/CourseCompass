import axios from "axios"
import { ApiError } from "./ApiError.js"

const COHERE_API_KEY = process.env.COHERE_API_KEY

export async function summarizeChat(chat){
    try {
        const response = await axios.post(
            "https://api.cohere.ai/v1/generate",
            {
                model: "command-r",
                prompt: `Summarize the following WhatsApp group chat:\n\n${chat}`,
                max_tokens: 4000,
                temperature: 0.3
            },
            {
                headers: {
                    Authorization: `Bearer ${COHERE_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        )
        return response.data.generations[0].text.trim()
    } catch (error) {
        throw new ApiError(501, error || `Error while generating summary`)
    }
}
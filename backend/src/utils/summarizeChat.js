import axios from "axios"
import { ApiError } from "./ApiError.js"

const COHERE_API_KEY = process.env.COHERE_API_KEY

export async function summarizeChat(chat){
    
    try {
        const response = await axios.post(
            "https://api.cohere.ai/v1/chat",
            {
                model: "command",
                message: `The first line of your response shold be the sentiment of this chat . The second line should tell us about the most frequent chatter and after that Summarize the following WhatsApp group chat:\n\n${chat}`,
                max_tokens: 1000,
                temperature: 0.3,
                stream: false
            },
            {
                headers: {
                    Authorization: `Bearer ${COHERE_API_KEY}`,
                    "Content-Type": "application/json"
                }
            }
        )
        return response.data.text.trim()
    } catch (error) {
        console.error('API request failed', error.response?.data)
        throw new ApiError(501, error || `Error while generating summary`)
    }
}
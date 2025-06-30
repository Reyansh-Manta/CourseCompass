import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import { lim } from "./constants.js"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit: "10000kb"}))
app.use(express.urlencoded({
    extended: true,
    limit: lim
}))
app.use(express.static("public"))
app.use(cookieParser())

import summaryRouter from "./routers/summary.routes.js"

app.use("/api/v1/summary", summaryRouter)

export {app}
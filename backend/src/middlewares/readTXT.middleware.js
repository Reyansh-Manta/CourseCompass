import fs, { readFileSync } from "fs"

const textContent = (req,res,next)=>{
const txtContent = readFileSync(req.files?.chatFile[0]?.path, "utf8")
req.txtContent = txtContent
next()
}


export { textContent }



import express from "express"
import router from "./rotas"
import { scriptsLoadPage } from "./scripts"

const app = express()
const host = "127.0.0.1"

app.set("view engine", "html")
app.use(express.static(`${__dirname}\\..\\public`))
app.use(router)

app.listen(3000, host, () => {
    console.log("Server is running: " + String(__dirname))
})


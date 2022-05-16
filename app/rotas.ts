import { Router } from "express";
import { scriptsLoadPage } from "./scripts";
import { queryDB } from "./db/db";
import fs from "fs"

const script = new scriptsLoadPage()
const db = new queryDB().connecting()
const router = Router()

router.get("/", (request, response) => {
    fs.readFile(`${__dirname}\\..\\public\\templates\\index.html`, async(err, file) => {
        if (err) throw err;
        db.all("SELECT * FROM verduras", (err, data) => {
            if (err) throw err
            let content = ""
            for (let c=0;c<data.length;c++) {
                content += script.addingVerdura(data[c].name, data[c].localImg, data[c].id)
            }
            response.status(200)
            response.send(file + script.settingVariables() + content)
        })
        //response.send(file + String(script.addingVerdura()))
    })
})

router.get("/verduras", (request, response) => {
    if (!request.query.id) {
        response.status(200)
        response.send("errdo")
        //response.send("<script>window.location.href='/' </script>")
    } else {
        const id = request.query.id
        db.all("SELECT * FROM verduras WHERE id=?", id, (err, data) => {
            if (err) throw err
            fs.readFile(`${__dirname}\\..\\public\\templates\\alimento.html`, (err, file) => {
                if (err) throw err
                response.status(200)
                response.send(file + script.addingVerduraDetails(data[0].name, data[0].localImg))
            })
        })
    }
})

router.get("/about", (request, response) => {
    response.status(200)
    response.sendFile("about.html", {root: `${__dirname}\\..\\public\\templates`})
})

router.get("*", (request, response) => {
    response.status(404)
    response.send("Não encontrei o que você busca")
})

export default router
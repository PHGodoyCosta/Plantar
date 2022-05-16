import sqlite3 from "sqlite3"

class queryDB {

    public connecting() {
        var sqlite = sqlite3.verbose()
        var db = new sqlite.Database("./app/db/database.sqlite")
        console.log("Connection to DB")
        return db
    }
    
    public closeConnection(database: sqlite3.Database) {
        database.close()
    }
}

export {queryDB}
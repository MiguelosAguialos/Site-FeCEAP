const sqlite3 = require("sqlite3").verbose()
const bd = new sqlite3.Database("./siteFeceap.bd")

//Create Table
//Insert data
//bring data
//Delete data *DELETE sem WHERE *


bd.serialize(function(){
    bd.run(`
        CREATE TABLE IF NOT EXISTS projetos(
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        img TEXT, 
        title TEXT, 
        category TEXT, 
        url TEXT);
        `)
        const values = ["teste","teste","teste","teste"];
        const query = `
                        INSERT INTO projetos(
                            img,
                            title,
                            category,
                            url
                            ) VALUES (?,?,?,?);
                    `;
        bd.run(query, values, function(err){
            if (err) return console.log(err);
            console.log(this);
        })
        bd.all("SELECT * FROM projetos", function(err, rows){
            if (err) return console.log(err);
            console.log(rows);
        })
        //bd.run("DELETE FROM projetos WHERE id=?", 1)
})

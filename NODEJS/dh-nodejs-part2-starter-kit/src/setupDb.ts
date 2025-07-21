import db from "./db.js";

export default async function setupDb(){
    await db.none(`
        DROP TABLE IF EXISTS planets;

        CREATE TABLE planets (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL
        );
    `);

    await db.none(`INSERT INTO planets (name) VALUES ('Earth'), ('Mars')`);
    // await db.none(`INSERT INTO planets (name) VALUES ('Mars')`)

    console.log("Set Db completato")
}

//SERIAL perchè va ad autoincrementarsi, quindi capisce che è un numero di conseguenza
//NOT NULL cioè è required
//.none perchè non ci stiamo aspettando nulla, stiamo creando ora

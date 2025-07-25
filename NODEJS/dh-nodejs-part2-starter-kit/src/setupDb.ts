import db from "./db.js";

export default async function setupDb(){
    await db.none(`
        DROP TABLE IF EXISTS planets;

        CREATE TABLE planets (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        image TEXT
        );

        DROP TABLE IF EXISTS users;

        CREATE TABLE users (
        id SERIAL PRIMARY KEY NOT NULL,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        token TEXT
        );

    `);

    await db.none(`INSERT INTO planets (name) VALUES ('Earth'), ('Mars')`);
    // await db.none(`INSERT INTO planets (name) VALUES
    await db.none(`INSERT INTO users (username, password) VALUES ('test','test')`);

    console.log("Set Db completato")
}

//SERIAL perchè va ad autoincrementarsi, quindi capisce che è un numero di conseguenza
//NOT NULL cioè è required
//.none perchè non ci stiamo aspettando nulla, stiamo creando ora

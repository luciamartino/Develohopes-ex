import express from "express";
import morgan from "morgan";
import "express-async-errors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT;
app.use(express.json())
app.use(morgan("dev"))

type Planet = {
id: number,
name: string,
};

type Planets = Planet[];

let planets: Planets = [
{
    id: 1,
    name: "Earth",
},
{
    id: 2,
    name: "Mars",
},
];

app.listen(port, () => {
    console.log(`App listening on the port ${port}`)
})

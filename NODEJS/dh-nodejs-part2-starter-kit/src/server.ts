
    // Write a router with the following routes:
    //     GET /api/planets: return all planets (JSON) with 200
    //     GET /api/planets/:id: return a planet (JSON) by id with 200
    //     POST /api/planets: create a planet, return only 201 code and a success JSON with key msg
    //         Make sure every planet is created with id and name.
    //     PUT /api/planets/:id: update a planet by id, return only 200 code and a success JSON with key msg
    //     DELETE /api/planets/:id: delete a planet by id, return only 200 code and a success JSON with key msg
    // Validate planet fields where appropriate.


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

app.get("/api/planets", (req, res) => {
    res.status(200).json(planets)
})

app.get("/api/planets/:id", (req, res) => {
    const {id } = req.params;
    const planet = planets.find(p => p.id === Number(id));
    res.status(200).json(planet)

})

app.post("/api/planets", (req, res) => {
    const {id, name} = req.body;
    const newPlanet = {id, name}
    planets = [...planets, newPlanet]

    res.status(201).json({msg: "The planet was created"})
})

app.put("/api/planets/:id", (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    planets = planets.filter(p => p.id === Number(id) ? {...p, name} : p)

    res.status(200).json({msg: "The planet's name has been updated"})
})

app.delete("/api/planets/:id", (req, res) => {
    const {id} = req.params;
    planets = planets.filter(p => p.id !== Number(id));

    res.status(200).json({msg: "The planet has been deleted"})
})

app.listen(port, () => {
    console.log(`App listening on the port ${port}`)
})

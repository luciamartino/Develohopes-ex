import { Request, Response } from "express";
import db from "../db.js";

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

async function getAll(req: Request, res: Response){
    const planets = await db.many("SELECT * FROM planets")
    res.status(200).json(planets)
};

async function getOneByID(req: Request, res: Response){
    const {id} = req.params;
    const planet = await db.oneOrNone("SELECT * FROM planets WHERE id=$1", [id])
    // const planet = planets.find(p => p.id === Number(id));

    res.status(200).json(planet)
}

async function create(req: Request, res: Response){
    const {id, name} = req.body;
    const newPlanet = {id, name};
    await db.none("INSERT INTO planets (name) VALUES ($1), [name]")
    // planets = [...planets, newPlanet];

    res.status(200).json({msg: "The new planet has been created successfully!"})
}

async function updateById(req: Request, res: Response){
    const {id} = req.params;
    const {name} = req.body;
    await db.none("UPDATE planets SET name=$2 WHERE id=$1", [id, name])
    // planets = planets.map(p => p.id === Number(id) ? {...p, name} : p);

    res.status(200).json({msg: "The planet was updated!"})
}

async function deletedById(req: Request, res: Response){
    const {id} = req.params;
    await db.none("DELETE FROM planets WHERE id=$1", Number(id))

    // planets = planets.filter(p => p.id !== Number(id));

    res.status(200).json(planets)
}

async function createImage(req: Request, res: Response){
    const {id} = req.params;
    const fileName = req.file?.path;

    if(fileName){
        await db.none(`UPDATE planets SET image=$2 WHERE id=$1`, [id, fileName])
        res.status(201).json({msg: "The image was created!"})
    }else{
        res.status(400).json({msg: "There was an error"})
    }
}

export {
    getAll, getOneByID, create, updateById, deletedById, createImage
}

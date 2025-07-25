import { Request, Response } from "express";
import db from "../db.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const secret = process.env.SECRET || ""

async function logIn(req: Request, res: Response){

    const {username, password} = req.body;

    const user = await db.oneOrNone(`SELECT * FROM users WHERE username=$1`, [username])

    if(!user || user.password !== password){

        return res.status(400).json({msg: "Username or password not correct"})
    }

    const payload = {
        id: user.id,
        username: user.username
    }

    const token = jwt.sign(payload, secret, {expiresIn: "1h"})

    await db.none(`UPDATE users SET token=$1 WHERE id=$2`, [token, user.id])

    res.json({id: user.id, username: user.username, token})

}

async function logOut(req: Request, res: Response){
    const user: any = req.user;

    await db.oneOrNone(`UPDATE users SET token=$1 WHERE id=$2`, [null, user?.id])

    res.status(200).json({msg: "Logout effettuato con successo"})
}

async function signUp(req: Request, res: Response){
    const {username, password} = req.body;

    const user = await db.oneOrNone(`SELECT * FROM users WHERE username=$1`, [username]);

    if(user){
        res.status(409).json({msg: "This user arleady exist"})
    }else{
        const {id} = await db.one(`INSERT INT users (username, password) VALUES ($1, $2) RETURNING id`, [username, password])

        res.status(201).json({msg: "The user was crated successfully"})
    }
}

export {logIn, logOut, signUp}

import express from "express";
import { logIn, logOut, signUp } from "../controllers/users.js";
import authorize from "../authorize.js";
// import {logIn, logOut} from "../controllers/users.js";

export const router = express.Router();

router.post("/login", logIn);
router.get("/logout", authorize, logOut);
router.post("/signup", signUp)

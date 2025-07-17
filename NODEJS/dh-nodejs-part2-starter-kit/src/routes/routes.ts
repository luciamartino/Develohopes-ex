import express from "express";
import { getAll, getOneByID, create, updateById, deletedById } from "../controllers/planets.js";


export const router = express.Router();


router.get("/", getAll)

router.get("/:id", getOneByID)

router.post("/", create)

router.put("/:id", updateById)

router.delete("/:id", deletedById)

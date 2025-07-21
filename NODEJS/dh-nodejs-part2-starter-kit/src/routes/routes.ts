import express from "express";
import multer from "multer";
import { getAll, getOneByID, create, updateById, deletedById, createImage } from "../controllers/planets.js";

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, "./uploads")
    },

    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({storage})

export const router = express.Router();


router.get("/", getAll)

router.get("/:id", getOneByID)

router.post("/", create)

router.put("/:id", updateById)

router.delete("/:id", deletedById)

router.post("/:id/image", upload.single("image"), createImage)

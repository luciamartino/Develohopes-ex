import express from "express";
import morgan from "morgan";
import "express-async-errors";
import dotenv from "dotenv";
import { router } from "./routes/routes.js";

dotenv.config();

const app = express();

const port = process.env.PORT;
app.use(express.json())
app.use(morgan("dev"))

app.use("/api/planets", router)

app.listen(port, () => {
    console.log(`App listening on the port ${port}`)
})

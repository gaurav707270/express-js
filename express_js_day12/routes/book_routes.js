import express from "express";
import { addBook } from "../controllers/books_controllers.js";

// const app = express();

const router = express.Router();

router.post("/add",addBook)

export default router;
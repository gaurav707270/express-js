import express from "express";
import { addBook ,fetchBook} from "../controllers/books_controllers.js";

// const app = express();

const router = express.Router();

router.post("/add",addBook)
router.get("/fetch",fetchBook)

export default router;
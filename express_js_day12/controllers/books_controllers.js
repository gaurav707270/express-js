import book from "../models/book_models.js"

export const addBook = async (req, res) => {
    try {
        await book.create(req.body);
        res.status(201).json({
            status: true,
            message: "book inserted successfully"
        })
    } catch (err) {
        res.status().json({
            status: false,
            message: "book inserting faild",
            err: err.message
        })
    }
}

export const fetchBook = async (req, res) => {
    try {
        const result = await book.find();
        res.status(200).json({
            status: true,
            message: "book fetched successfully",
            data: result
        })
    } catch (err) {
        res.status(400).json({
            status: false,
            message: "book fetching failed",
            err: err.message
        })
    }
}

import book from "../models/book_models.js"

export const addBook = async (req, res) => {
    try {
        await book.create({
            title: "power now",
            auther: "khar5ate gaurav",
            price: 599
        });
        res.json({
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

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/currency" , async (req, res) => {
    try {
        const thb = req.body.thb
        const usd = parseFloat(thb) * 32.07
        return res.status(201).json({"data":usd})
    } catch (error) {
        return res.status(500).json({"message" : error})
    }
})

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
})
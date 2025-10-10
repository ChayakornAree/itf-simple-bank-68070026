const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json());

app.post("/currency" , async (req, res) => {
    try {
        const { type, amount } = req.body;
        let convert = 0;
        if (type == "usd") {
            convert = parseFloat(amount) * 32.07
        } else {
            convert = parseFloat(amount) / 32.07
        }
        return res.status(201).json({"data": convert})
    } catch (error) {
        return res.status(500).json({"message" : error})
    }
})

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
})
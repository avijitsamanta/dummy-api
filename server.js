const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.json({"status":200,"message":"OK"});
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

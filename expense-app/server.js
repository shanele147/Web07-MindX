require("dotenv").config();
const express = require("express");
const app= express();
const PORT = process.env.SERVER_PORT || 7777;
app.get("/", (req, res) => {
    res.send("Welcome to Expense app API");
});
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});




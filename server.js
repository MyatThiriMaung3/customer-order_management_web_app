const express = require("express")

const app = express()

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Customer Order Management API is running!");
})

app.get("/login", (req, res) => {
    res.render("login", { error: null });
});

app.listen(3000)
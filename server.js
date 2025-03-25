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

app.get("/staff-dashboard", (req, res) => {
    res.render("staff-dashboard");
});

app.get("/staff-menu", (req, res) => {
    res.render("staff-menu");
});

app.get("/staff-receipt", (req, res) => {
    res.render("staff-receipt");
});

app.get("/menu-create", (req, res) => {
    res.render("menu-create");
});

app.get("/staff-create", (req, res) => {
    res.render("staff-create");
});

app.listen(3000)
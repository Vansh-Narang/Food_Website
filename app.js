const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const path = require('path')
const port = 3000
app.use(express.static('public'))
app.post('/login', function (req, res) {
    console.log("Login");
    res.redirect('/')
})
// function Ordered() {
//     let quantity = document.getElementById("Name").innerText
//     console.log(quantity);
// }
app.post('/Addcart', function (req, res) {
    console.log("Order");
    res.redirect('/')
})
// app.post('/Addcart', function (req, res) {
//     console.log("Carted");
//     res.redirect('/')
// })
app.get('/', function (req, res) {
    res.send("hello")
});
app.listen(port, () => {
    console.log("listening");
})
let alert = require('alert');
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const path = require('path')
const port = 3000
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
// app.post('/login', (req, res) => {
//     console.log("Login");
//     res.redirect('/')
// })
app.post('/', function (req, res) {
    let value = Number(req.body.Quantity)
    value = value * 35
    console.log(value);
    res.send("Order Your Food For ? : $" + value)
})
app.post('/Addcart', (req, res) => {
    console.log("Order");
    res.redirect('/')

})
app.get('/', (req, res) => {
    res.sendFile(__dirname, "/public/index.ejs")
});
app.listen(port, () => {
    console.log("listening");
})
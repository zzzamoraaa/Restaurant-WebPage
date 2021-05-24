const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const port = 8000

app.use(express.static(path.join(__dirname, "static")));


app.get('/', (req,res)=>{
    res.sendFile("static/index.html", {root:__dirname});
})

app.get('/pizza1', (req, res) => {
    res.sendFile("static/pizza1.html", { root: __dirname });
})

app.get('/pizza2', (req, res) => {
    res.sendFile("static/pizza2.html", { root: __dirname });
})

app.get('/desert', (req, res) => {
    res.sendFile("static/desert.html", { root: __dirname });
})

app.get('/404', (req, res) => {
    res.sendFile("static/404.html", { root: __dirname });
})

app.get('/package', (req, res) => {
    res.sendFile("package.json", { root: __dirname });
})

app.post('/package', (req, res) => {
    let str = fs.readFileSync('package.json').toString().trim();
    let ratings = !str ? [] : JSON.parse(str);
    ratings.push(req.body);

    fs.writeFileSync('package.json', JSON.stringify(ratings));
    res.redirect('static/404.html');

})

app.get("*",(req,res) => {
    res.sendFile(__dirname + "/static/404.html")
})

app.listen(port, ()=>{
    console.log(`App listen at localhost:${port}`)
})


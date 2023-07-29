const express = require('express');
const path = require('path');
const hbs = require('hbs');
const bodyParser = require("body-parser");
const User = require('./models/userdetail');

require("./db/conn");


const app = express();
const port = process.env.PORT || 3000;

const staticpath = path.join(__dirname,"../public");
// const templatepath = path.join(__dirname,"../templates/views/index");
const partialspath = path.join(__dirname,"../views/templates/");

app.use('/css', express.static(path.join(__dirname,'../node_modules/bootstrap/dist/css/')));
app.use('/js', express.static(path.join(__dirname,'../node_modules/bootstrap/dist/js')));
app.use('/jq', express.static(path.join(__dirname,'../node_modules/jquery/dist')));
app.use(express.static(staticpath));
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.set('view engine', 'hbs');
// app.set('views ', templatepath);
hbs.registerPartials(partialspath);

app.get('/', (req,res)=>{
    res.render("index");
});

app.get('/contact', (req,res)=>{
    res.render("contact");
});

app.post('/contact',async(req,res) => {
    try {
        // alert("thanks for submitting query");
        const userData = new User(req.body);
        await userData.save();
        
        res.status(201).render("contact");
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(port, () =>{
    console.log(`server is connected to ${port} port`);
});
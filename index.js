const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello Node, You are awesome');
});

const users = [
    {id:1, name:"Kaium", email:"mailtokaium@gmail.com"},
    {id:2, name:"Shohan", email:"mailtoshohan@gmail.com"},
    {id:3, name:"Palas", email:"mailtopalas@gmail.com"},
    {id:4, name:"Bulbul", email:"mailtobulbul@gmail.com"},
    {id:5, name:"Sujan", email:"mailtosujan@gmail.com"},
]

app.get('/users', (req, res) => {
    if(req.query.name){
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched);
        // console.log(req.query);
    }
    else{
        res.send(users);
    }
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    // const id = req.params.id;
    const id = parseInt(req.params.id);
    // const user = users[id];
    // const user = users.find(u => u.id == id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('Request', req.body);
    user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
    console.log('Request Update', req.body);
})

app.listen(port, () => {
    console.log('Listening to port', port);
})
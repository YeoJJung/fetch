const express = require('express')
const app = express()

let id = 2;
const todoList = [
    {
        id: 1,
        text: "할일 1",
        done: false, // 안했다
    }
];
app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('api/todo', () => {
    return todoList;
})

app.post('api/todo', (req,res) => {
    const {text, done} = req.body; //body에 text와 done을 받아서 보내겠다. 받기위해서는 req.body에 들어있을 것이다.
})
app.listen(3000, () => {
    console.log('server start!!');
})
const express = require('express')
const app = express()
app.use(express.json())

let id = 2;
const todoList = [
    {
        id: 1,
        text: "할일 1",
        done: false, // 안했다
    },
];


app.get('/api/todo', (req, res) => {
    res.json(todoList); //json형태로 todolist를 보내준다
})

app.post('/api/todo', (req, res) => {
    const {text, done} = req.body; //body에 text와 done을 받아서 보내겠다. 받기위해서는 req.body에 들어있을 것이다.
    todoList.push({
        id: id++, // 겹치지 않게 (고유하게) ++해주기
        text,
        done,
    });
    return res.send('success');
})
app.listen(4000, () => {
    console.log('server start!!');
})
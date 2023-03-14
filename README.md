# Fetch

client폴더, server폴더 생성

- server 폴더 생성

    - 서버폴더로 이동

        `$ cd server`

    - package.json 설치

        `$ npm init`

    - 익스프레스 설치

        `$ npm i express`
    

    <br/>

    https://www.npmjs.com/search?q=express

    - 샘플코드 app.js 복붙

    ```
    const express = require('express')
    const app = express()

    app.get('/', function (req, res) {
    res.send('Hello World')
    })  

    app.listen(3000)
    ```

    - app.js 실행

        `$ node app.js`

    http://localhost:3000/

    - todoList API서버 만들기


        express에서 바디에서 데이터를 꺼내쓰려면 body-parser가 필요하다.
        


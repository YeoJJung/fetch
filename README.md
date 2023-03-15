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

    - Postman을 이용해 post, get 하기
        - post localhost:3000/api/todo
            
            postman에서 body에 삽입하고 post로 send요청

        ```
        {
        "text" : "todo2",
        "done" : true
        }
        ```

        
        ERROR => TypeError: Cannot destructure property 'text' of 'req.body' as it is undefined.

        ```
        app.use(express.json())
        ``` 

        위에것 삽입하고 나니 해결됨

        - get으로 변경하면 데이터 들어간 것을 확인 할 수 있음.

    - 프론트 코드 짜기 시작

        - 클라이언트 폴더로 이동해서 React 사용

        ```
        $ cd ../client
        $ npx create-react-app .
        ```
        
        - 밑 4개 폴더 삭제

            - App.css 
            - App.test.js
            -  index.css
            - logo.svg


        - 기본제공하는 api는 fetch이고, axios라는 라이브러리 둘다 사용해본다.


서버에서 데이터를 요청하려면 **서버주소**와 어떤 **HTTP Method**가 필요한지 알아야한다.

서버 post주소를 4000으로 바꾸어준다 

fetch 사용하기 방법
https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch

<img src="./img.CORS_Error.png">








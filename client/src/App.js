//fetch
//axios

import { useEffect, useState } from "react";
import axios from 'axios';

const SERVER_URL = 'http://localhost:4000/api/todo';

function App() {
  const [todoList, setTodoList] = useState(null); // 화면에 띄워주기

  const fetchData = async () => {
    const response = await axios.get(SERVER_URL);
    setTodoList(response.data);
  };

  // fetch('http://localhost:4000/api/todo').then((response) => response.json()).then((data) => setTodoList(data)); //첫번째 응답값은 json형태로 정제해줘야한다. 그러고 나오는 데이터가 우리가 알고싶은 투두 리스트 데이터이다. 투두리스트에 데이터 넣는다.
  // React APP가 서버에 요청을 한다. 이 코드를 읽고




useEffect(() => {
  fetchData();
}, []);

const onSubmitHandler = async (e) => {
  e.preventDefault(); // 기본동작 막기
  const text = e.target.text.value;
  const done = e.target.done.checked;

  await axios.post(SERVER_URL, { text, done }); //{text,done} (데이터 넣는곳)은 두번째 인자
  fetchData();
  // fetch("http://localhost:4000/api/todo",  //server에 body에 문자열로 직렬화 해서 보내준다
  //   // 아무것도 안하면 get요청  
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": 'application/json',
  //     },
  //     body: JSON.stringify({ // 직렬화
  //       text,
  //       done,
  //     })
  //   }
  // ).then(() =>
  //   fetchData()
  // );//fetch에서 요청이 끝났을 때
};

return (
  <div className="App">
    <h1>TODO LIST</h1>
    <form onSubmit={onSubmitHandler}>
      <input name="text" />
      <input name="done" type='checkbox' />
      <input type="submit" value="추가" />
    </form>
    {todoList?.map((todo) => ( //투두가 없을때는 undefined를 만들어서 렌더링 되지 않게한다.
      <div key={todo.id} style={{ display: "flex" }}>
        <div>{todo.id}</div>
        <div>{todo.text}</div>
        <div>{todo.done ? 'Y' : "N"}</div>
      </div>
    ))}
  </div>
);
}

export default App;


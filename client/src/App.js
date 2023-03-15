//fetch

import { useEffect, useState } from "react";

//axios
function App() {
  const [todoList, setTodoList] = useState(null); // 화면에 띄워주기



  useEffect(() => {
    fetch('http://localhost:4000/api/todo').then((response) => response.json()).then((data) => setTodoList(data)); //첫번째 응답값은 json형태로 정제해줘야한다. 그러고 나오는 데이터가 우리가 알고싶은 투두 리스트 데이터이다. 투두리스트에 데이터 넣는다.
    // React APP가 서버에 요청을 한다. 이 코드를 읽고
  }, []);

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form>
        <input name="text"/>
        <input name="done" type='checkbox' />
        <input type="submit" value="추가"/>
      </form>
      {todoList?.map((todo)=> ( //투두가 없을때는 undefined를 만들어서 렌더링 되지 않게한다.
        <div key={todo.id}>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done ? 'Y' : "N"}</div>
        </div>
      ))}
    </div>
  );
}

export default App;

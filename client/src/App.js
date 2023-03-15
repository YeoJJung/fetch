
function App() {
  fetch('http://localhost:4000/api/todo').then((response) => response.json()).then((data)=>console.log(data)); //첫번째 응답값은 json형태로 정제해줘야한다. 그러고 나오는 데이터가 우리가 알고싶은 투두 리스트 데이터이다.
  return (
    <div className="App">
      <h1>TODO LIST</h1>
    </div>
  );
}

export default App;

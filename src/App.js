import Backdrops from "./components/Backdrops";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title={"Eating sushi"}/>
      <Todo title={"Eating noodles"}/>
      <Modal/>
      <Backdrops/>
    </div>
  );
}

export default App;

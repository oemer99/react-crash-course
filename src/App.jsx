import './App.css';
import Todo from "./components/Todo.jsx"
import Title from "./components/Title.jsx"
import Modal from "./components/Modal.jsx"
function App() {
  return (
    <div >
      <Title />
      <div className='todo__wrapper'>
      <Todo 
      title="Finish Frontend Simplified"
      paragraph="Code along with Frontend Simplified step by step."
      />
      {/* if its not a string, then geschweifte klammern {} */}
      {/* <Todo title={2}/> */}
      <Todo 
      title="Finish Interview"
      paragraph="Finish every interview question in the next 6 weeks"/>
      <Todo 
      title="Land a 100k Job"
      paragraph="Apply to 100 Jobs"/> 
      </div>
      <Modal 
      title="Are you sure???"
      />
    </div>
  );
}
export default App;

// Min 35:00
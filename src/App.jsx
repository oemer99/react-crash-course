import './App.css';
import Todo from "./components/Todo.jsx"
import Title from "./components/Title.jsx"
import Modal from "./components/Modal.jsx"
import React, { useState } from "react";
import Counter2 from "./components/Counter2.jsx"

function App() {


  return <Counter2 />


  const [showModal, setShowModal] = useState(false)

  return (
    <div >
      <Title />

      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value);
        }}/>
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className='todo__wrapper'>
      <Todo 
      title="Finish Frontend Simplified"/>
      {/* if its not a string, then geschweifte klammern {} */}
      {/* <Todo title={2}/> */}

      <Todo 
      title="Finish Interview"/>
      <Todo 
      title="Land a 100k Job"/> 
      </div>
      {showModal && <Modal title="Are you sure???"/>}
    </div>
  );
}
export default App;
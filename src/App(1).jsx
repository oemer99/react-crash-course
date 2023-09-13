// import './App.css';
// import Todo from "./components/Todo.jsx"
// import Title from "./components/Title.jsx"
// import Modal from "./components/Modal.jsx"
// import React, { useState, useEffect } from "react";
// import Counter3 from "./components/Counter3.jsx"

// function App() {

//   // return <Counter3 />


//   const [showModal, setShowModal] = useState(false)
  
//   function onTodoDelete(){
//     setShowModal(true)
//     console.log("onTodoDelete()");
//   }
//   function btnCancel(){
//     setShowModal(!showModal)
//     console.log("test");
//   }

//   function btnConfirm(){
//     setShowModal(showModal)
//     console.log("test");
//   }


//   useEffect(() => {
//     console.log("on mount");
//   }, [])

//   return (
//     <div >
//       <Title />

//       <div>
//         <input type="text" onChange={(event) => {
//           console.log(event.target.value);
//         }}/>
//         <button onClick={() => setShowModal(true)}>Add todo</button>
//       </div>
//       <div className='todo__wrapper'>
//       <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified"/>
//       {/* if its not a string, then geschweifte klammern {} */}
//       {/* <Todo title={2}/> */}

//       <Todo onTodoDelete={onTodoDelete} title="Finish Interview"/>
//       <Todo onTodoDelete={onTodoDelete} title="Land a 100k Job"/> 
//       </div>
//       {showModal && <Modal btnCancel={btnCancel} btnConfirm={btnConfirm} title="Are you sure???"/>}
//     </div>
//   );
// }
// export default App;
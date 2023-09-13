import "./Todo.css"

function Todo({ title, onTodoDelete }){


    return (
    // in React wird eine Klasse mit "className" zugewiesen
        <div className="todo"> 
         <p>{title}</p>
        {/* <button onClick ={deleteTodo}>Delete</button></div> */}
                   {/* //hier deleteTodo OHNE klammern() */}
      <button onClick ={onTodoDelete}>Delete</button></div>
                // wenn klammern dann per porenticiys also () =>  
    )
}

export default Todo
import "./Todo.css"

function Todo({title}){
    function deleteTodo(id){
        console.log("deleted", title.toUpperCase());
    }

    return (
    // in React wird eine Klasse mit "className" zugewiesen
        <div className="todo"> 
         <p>{title}</p>
        {/* <button onClick ={deleteTodo}>Delete</button></div> */}
                   {/* //hier deleteTodo OHNE klammern() */}
      <button onClick ={() => deleteTodo(1)}>Delete</button></div>
                // wenn klammern dann per porenticiys also () =>  
    )
}

export default Todo
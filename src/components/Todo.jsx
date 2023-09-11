import "./Todo.css"

function Todo({title, paragraph}){
    console.log(title);
    return (
    // in React wird eine Klasse mit "className" zugewiesen
        <div className="todo"> 
         <h2>{title}</h2>
         <p>{paragraph}</p>
        <button>Delete</button></div>
    )
}

export default Todo
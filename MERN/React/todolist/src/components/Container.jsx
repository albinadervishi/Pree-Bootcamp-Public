import React, {useState} from "react";

const Container = () => {
    const [input, setInput] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleClick = () => {
        const id = todoList.length;
        setTodoList((prev) => [
          ...prev,
          {
            id: id,
            task: input,
            complete: false,
          },
        ]);
        setInput("");
      };

      const handleComplete = (id) => {
        let list = todoList.map((task) => {
         let item = {};
         if (task.id == id) {
            if (!task.complete) {
                item = { ...task, complete: true };
            } else {
                item = { ...task, complete: false };
            }
            } else {
            item = { ...task };
          }
          return item;
        });
        setTodoList(list);
      };

      const handleDelete = (id) => {
        const newList = todoList.filter((todo) => todo.id !== id);
        setTodoList(newList);
      };
      
    return (
        <div className="Container">
            <h2>Todo list:</h2>
            <input type="text" value={input} onInput={(e) =>setInput(e.target.value)}/>
            <button className="input" onClick={() => handleClick()}>Add</button> 
            <div>
                <ul>
                {todoList.map((todo) => {
                    return (
                        <li
                        complete={todo.complete}
                        id={todo.id}
                        style={{
                        listStyle: "none",
                        textDecoration: todo.complete && "line-through",
                        }}>
        {todo.task}
        <input type="checkbox" onClick={() => handleComplete(todo.id)}></input>
        <button onClick={() => handleDelete(todo.id)}>Delete</button>
      </li>
    );
  })}
                </ul>
            
           </div>
        </div>
    );
}

export default Container;
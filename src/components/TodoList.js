import React from 'react'
import Todo from './TodoComponent'

class TodoList extends React.Component {
   state={
     newTask:''
   }


  delete = (key) => {
    this.props.delete(key)
  }

  edit = (key, editedTask) => {
    this.props.edit(key, editedTask)

  }

  SetIsEditing = (boolean) =>{
    this.props.SetIsEditing(boolean)
  }



  render() {

    
    const TodoItems = this.props.entries.map((todo,index)=>(
    <Todo
    id={todo.key}
    taskText={todo.task}
    complete={todo.isCompleted}
    deleteTask={this.delete}
    editTask={this.edit}
    isEditing={this.props.isEditing}
    setEditing={this.SetIsEditing}
    />
  ))
 
    // let todoItems = this.props.entries
    return (
      <section>
       <ul>
         {TodoItems}
         {/* {todoItems.map((todo,index) => (
         <li key={todo.key}>{todo.task}
          <button onClick={()=> this.delete(todo.key)}>delete</button>
          <button>complete</button>
          <div class="edit-img-container">
            <img src={pic} id='edit-img' alt="edit"onClick={this.edit}></img>
          </div>
         </li>
         ))} */}
       </ul> 
      </section>
    )
  }
}

export default TodoList
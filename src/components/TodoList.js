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

  setIsCompleted = (key, boolean) => {
    this.props.setIsCompleted(key, boolean)
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
    setIsCompleted={this.setIsCompleted}
    />
  ))
 
    // let todoItems = this.props.entries
    return (
      <section>
       <ul>
         {TodoItems}
       </ul> 
      </section>
    )
  }
}

export default TodoList
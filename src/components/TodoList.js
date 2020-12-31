import React from 'react'
import pic from '../pencil.png'

class TodoList extends React.Component {


  delete = (key) => {
    this.props.delete(key)
  }

  edit = (event) => {
    console.log(event.target)
  }


  render() {
    let todoItems = this.props.entries
    return (
      <section>
       <ul>
         {todoItems.map((todo,index) => (
         <li key={todo.key}>{todo.task}
          <button onClick={()=> this.delete(todo.key)}>delete</button>
          <button>complete</button>
          <div class="edit-img-container">
            <img src={pic} id='edit-img' alt="edit"onClick={this.edit}></img>
          </div>
         </li>
         ))}
       </ul> 
      </section>
    )
  }
}

export default TodoList
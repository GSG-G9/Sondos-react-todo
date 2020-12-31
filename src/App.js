import React from "react";
import './App.css';
import TodoList from './components/TodoList'


class App extends React.Component {

  state ={
    todo :[],
  }
 
  addTodo = (event)=>{
    if (event.key === 'Enter'){
      if(event.target.value !== ""){
        console.log(event.target.value)
        let taskDetails = {
          task : event.target.value,
          isCompleted : false,
          key : Date.now()
        }
        event.target.value=""
        this.setState((prev)=>{
          return {
            todo: prev.todo.concat(taskDetails),
          }
        })
        console.log('hiii', this.state)
      }
    }
  }

  removeItem = (id) => {
    console.log(id)
    const newList = this.state.todo.filter((item)=>item.key !== id)
    this.setState((prev)=>{
      return {
        todo : newList
      }
    })
   }

  render() {
    const todoList = this.state.todo
    return (
     <div className="App">
       <header className="App-header">Todo List</header>
       <h1>My todo lits</h1>
       <input type="text" placeholder="add your todo" 
       // onBlur={this.setTodo}
       onKeyPress={this.addTodo}></input>
       <button type="submit" >Add</button>
       <TodoList entries={this.state.todo} delete={this.removeItem}/>
     </div>
    )
  }
}

export default App;

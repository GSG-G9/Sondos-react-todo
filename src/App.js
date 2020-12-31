import React from "react";
import './App.css';
import TodoList from './components/TodoList'


class App extends React.Component {

  state ={
    todo :[],
    isEditing :false
  }
 
  addTodo = (event)=>{
    if (event.key === 'Enter'){
      if(event.target.value !== ""){
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
      }
    }
  }

  removeItem = (id) => {
    const newList = this.state.todo.filter((item)=>item.key !== id)
    this.setState((prev)=>{
      return {
        todo : newList
      }
    })
   }

   editItem = (id, editedTask) => {
     const newList = this.state.todo.map((item)=>{
       if(id=== item.key){
         return {...item, task:editedTask}
       }
       return item;
     })
     this.setState({
       todo : newList,
     })

   }

   setIsEditing = (boolean) =>{
     this.setState({isEditing: boolean})
   }

   setIsCompleted = (id) =>{
     
   }


  render() {
    
    return (
     <div className="App">
       <header className="App-header">Todo List</header>
       <h1>My todo lits</h1>
       <input type="text" placeholder="add your todo" 
        onKeyPress={this.addTodo}>
       </input>
       <button type="submit" >Add</button>
       <TodoList
        entries={this.state.todo}
        delete={this.removeItem}
        edit={this.editItem}
        isEditing={this.state.isEditing}
        SetIsEditing={this.setIsEditing}
       />
     </div>
    )
  }
}

export default App;

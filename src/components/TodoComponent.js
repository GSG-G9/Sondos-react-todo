import React from 'react'
import pic from '../pencil.png'
import rubber from '../rubber.png'
import checkMark from '../check.png'

class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state ={
       editedTask:''
    }
  }
 
  render(){
    
    const setValue =(event)=>{
       this.setState({editedTask:event.target.value})
   
    }

    const view =(
      <li className="list-item">
        <span  style={{
          textDecoration: this.props.complete
            ? 'line-through'
            : 'none',
         }} className="task-text" > {this.props.taskText}
         </span>
         <div className="img-container todo-element">
           <img src={checkMark} alt="done" className='edit-img'
             onClick={()=>this.props.setIsCompleted(this.props.id,true)}
             onDoubleClick={()=>this.props.setIsCompleted(this.props.id,false)}>
           </img>
         </div>
         <div className="img-container todo-element">
           <img src={rubber} alt="delete" className='edit-img'
             onClick={()=> this.props.deleteTask(this.props.id)}>
           </img>
         </div>
         
         <div className="img-container todo-element">
           <img src={pic} className='edit-img' alt="edit"
             onClick={()=>this.props.setEditing(true)}>
           </img>
         </div>
      </li>
    )
  
    const edit = (
      <div>
      <input placeholder={this.props.taskText} onChange={setValue}></input>
      <button onClick={()=>{
        this.props.editTask(this.props.id,this.state.editedTask)
        this.props.setEditing(false)
      }}
        >save</button>
      <button onClick={()=>this.props.setEditing(false)}>cancel</button>
     </div>
    )

    return (
  
    <div >
      {this.props.isEditing ? edit : view}
    </div>
    )
  }
}

export default Todo
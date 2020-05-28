import React, { Component } from 'react'
import TodoInput from './component/TodoInput'
import TodoList from './component/TodoList'
import "bootstrap/dist/css/bootstrap.min.css"
import {v4 as uuid} from  'uuid'

export default class App extends Component {
  state={
    items:[],
    id: uuid(),
    item:'',
    editItem:false
  }

  handleChange = (e) =>{
    this.setState({
      item:e.target.value
    })
  }
  handleAddItem = (e) =>{
    e.preventDefault()
    const newItem={
      id:this.state.id,
      title:this.state.item
    }
    this.setState({
      items:[...this.state.items,newItem],
      item:'',
      id:uuid(),
      editItem:false
    },()=>console.log(this.state.items))

  }
  handleEditItem = (id) =>{
    const updatedItems=this.state.items.filter((item)=>item.id != id)
    const selectedItems=this.state.items.find(item=>item.id===id)
    this.setState({
      editItem:true,
      item:selectedItems.title,
      items:updatedItems
    })
  }
  handleDeleteItem = (id) =>{
    const updatedItems=this.state.items.filter((item)=>item.id != id)
    this.setState({
      items:updatedItems
    })
  }
  handleClearList = () =>{
    this.setState({
      items:[]
    })
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col-10 col-md-8 mt-5 mx-auto'>
              <TodoInput item={this.state.item} handleChange={this.handleChange} handleAddItem={this.handleAddItem} editItem={this.state.editItem}/>
              <TodoList items={this.state.items}  handleEditItem={this.handleEditItem} 
              handleDeleteItem={this.handleDeleteItem} handleClearList={this.handleClearList}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

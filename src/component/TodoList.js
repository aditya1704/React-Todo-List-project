import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        const {items,handleEditItem,handleDeleteItem,handleClearList}=this.props
        return (
            <div>
                <h2 className='text-capitalize text-center'>Todo List</h2>
                <ul className="list-group my-5">
                    {items.map((item)=>(<TodoItem key={item.id} item={item} handleEditItem={handleEditItem} handleDeleteItem={handleDeleteItem}/>))}
                </ul>
                <button className="btn btn-danger btn-block text-uppercase" onClick={handleClearList}>clear list</button>
            </div>
        )
    }
}

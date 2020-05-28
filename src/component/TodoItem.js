import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const {item,handleEditItem,handleDeleteItem}=this.props
        const {id,title}=item
        return (
            <li className='list-group-item text-capitalize d-flex justify-content-between my-2 '>
                <h5>{title}</h5>
                <i>
                    <i className="fas fa-pencil-alt text-success mx-2"  onClick={()=>handleEditItem(id)}></i>
                    <i className="fas fa-window-close text-danger mx-2" onClick={()=>handleDeleteItem(id)}></i>
                </i>
            </li>
        )
    }
}

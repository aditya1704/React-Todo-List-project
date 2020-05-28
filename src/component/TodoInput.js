import React, { Component } from 'react'
import TodoItem from './TodoItem'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default class TodoInput extends Component {
    render() {
    const {item,handleChange,handleAddItem,editItem}=this.props

        return (
            <div>
                <h2 className='text-capitalize text-center'>Todo Input</h2>
                <div className="card card-body my-5">
                    <form onSubmit={handleAddItem}>
                        <div className="form-group row">
                            <label className=" col-2 col-md-1 col-form-label bg-primary text-white text-center"><i className="fas fa-clipboard-list" ></i></label> 
                            <input onChange={handleChange} value={item} type="text" className="form-control col-9 col-md-11" placeholder="Add Todo Item" id="addItem" name="addItem"/>
                        </div> 
                        <div className="form-group row">
                            <button type='submit' disabled={item ? false:true} className={editItem ? 'btn btn-success col-md-12 text-uppercase':'btn btn-primary col-md-12 text-uppercase'}>{editItem ? 'Edit Item' : 'Add Item'}</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

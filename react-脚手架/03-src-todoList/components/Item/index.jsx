import React, {Component} from 'react';
import './index.css'
import PropTypes from "prop-types";

class Item extends Component {
    // 标识鼠标移入、移出
    state = {mouse:false}
    //鼠标移入、移出回调
    handleMouse =(flag)=>{
        return ()=>{
            console.log(flag)
            this.setState({mouse:flag})
        }
    }
    //勾选、取消勾选某一的回调
    handleCheck =(id)=>{
        return (event)=>{
            console.log(id,event.target.checked)
            this.props.updateTodo(id,event.target.checked)
        }
    }

    //删除一个Todo的回调
    handleDelete =(id)=>{
        //不用高阶函数实现
        if(window.confirm('确定删除')){
            this.props.deleteTodo(id)
        }
    }
    render() {
        const {id,name,done}=this.props
        const {mouse} = this.state
        return (
            //onMouseLeave 鼠标离开 onMouseEnter鼠标一如
            <li style={{backgroundColor:mouse ? '#ddd':'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                    {/* checked复选框打上对勾无法修改 defaultChecked默认勾选可以修改  */}
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
            </li>
        );
    }
}

export default Item
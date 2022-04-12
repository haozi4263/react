import React, {Component} from 'react';
import Item from "../Item";
import './index.css'
// yarn add prop-types 类型限制库
import PropTypes from 'prop-types';

class List extends Component {
    //对接受对props进行类型、必要性限制
    static propTypes = {
        todos:PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }
    render() {
        const {todos,updateTodo,deleteTodo} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((todo)=>{
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                    })
                }
            </ul>
        );
    }
}

export default List;
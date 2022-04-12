import React, {Component} from 'react';
// yarn add prop-types 类型限制库
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'


class Header extends Component {
    //对接受对props进行类型、必要性限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    // 获取用户输入name信息传递给父组件APP，需要传递todoObj对象
    handleKeyUp = (events)=>{
        // 解构复制获取keyCode,target
        const {keyCode,target} = events
        // 判断是否是回车按键
        if (keyCode !== 13 )return
        //准备一个todo对象,生成唯一uuid yarn add nanoid
        //添加的todo名字不能为空
        if(target.value.trim() === ''){
            alert('输入不能为空')
            return;
        }
        const todoObj = {id:nanoid(),name:target.value,done:false}
        //将todoObj传递给App
        this.props.addTodo(todoObj)
        //清空输入框页面数据
        target.value=''
    }
    render() {
        console.log('header ..')
        return (
            <div>
                <div className="todo-header">
                    <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
                </div>
            </div>
        );
    }
}

export default Header;
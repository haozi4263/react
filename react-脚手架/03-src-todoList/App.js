
//创建外壳组件App
// 这个文件默认暴露了React,分别暴露了Component
import React,{Component} from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import './App.css'

// 创建并暴露App外壳组件
export default class App extends Component{
    //初始化状态 状态在哪里，操作状态的方法就在哪里
    state = {todos:[
            {id:"001",name:"吃饭",done:true},
            {id:"002",name:"睡觉",done:true},
            {id:"003",name:"写代码",done:false},
            {id:"004",name:"旅游",done:false},
        ]}
    // 用于添加一个todo，接受的参数是todo对象
    addTodo = (todoObj)=>{
        console.log('App', todoObj)
        // 获取原来的todos数组
        const {todos}=this.state
        // 往前追加一条todo
        const newTodos = [todoObj, ...todos]
        // App更新状态调用render重新渲染页面
        this.setState({todos: newTodos})
    }
    //用于更新一个todo对像
    updateTodo = (id,done)=>{
        const {todos}=this.state
        // 匹配处理数据
        const newTodos = todos.map((todoObj)=>{
            if(todoObj.id ===id)return{...todoObj, done:done}
            else return todoObj
        })
        this.setState({todos: newTodos})
    }

    //用于删除一个todo对像
    deleteTodo = (id)=>{
        //获取原来的todos
        const {todos}=this.state
        // 从todos数组删除指定id的todo对象
        const newTodos = todos.filter((todoObj)=>{
           // 返回未删除的todo数据
            return todoObj.id !== id
        })

        this.setState({todos: newTodos})
    }
    // 用于全选todo
    checkAllTodo = (done)=>{
        //获取原来的todos
        const {todos}=this.state
        //加工数据
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj,done:done}
        })
        this.setState({todos: newTodos})
    }
    // 用于清除所有已完成的
    clearAllDoneTodo = (done)=>{
        //获取原来的todos
        const {todos}=this.state
        //过滤数据
        const newTodos = todos.filter((todoObj)=>{
            return !todoObj.done
        })
        this.setState({todos: newTodos})
    }
  render() {
        const {todos} = this.state
        return(
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDoneTodo={this.clearAllDoneTodo}/>
                </div>
            </div>
        )
  }
}

// Header给List如何传递数据?
// todos header往todos增加数据，list显示todos数据。将数据todos放置到App父组件中
// 组件之间通信: 子组件给父组件传递数据，需要父组件先给子组件传递一个函数 子组件传递数据时候调用下函数
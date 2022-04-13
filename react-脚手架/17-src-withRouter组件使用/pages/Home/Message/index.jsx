import React, {Component} from 'react';
import Detail from "./Detail";
import {Link,Route} from 'react-router-dom'

class Message extends Component {
    state = {
        messageArr:[
            {id:'01',title:'消息1'},
            {id:'02',title:'消息2'},
            {id:'03',title:'消息3'},
        ]
    }

    replaceshow = (id,title)=>{
        //编写一段代码，让起实现跳转到Detail组件，且为replace跳转 params参数 编程式路由导航
        this.props.history.replace(`/home/message/detail/${id}/${title}`)
        // this.props.history.replace(`/home/message/detail/id=${id}/&title=${title}`)
    }
    pushshow = (id,title)=>{
        //编写一段代码，让起实现跳转到Detail组件，且为replace跳转 params参数
        this.props.history.push(`/home/message/detail/${id}/${title}`)
        // this.props.history.push(`/home/message/detail/id=${id}/&title=${title}`)
    }
    render() {
        const {messageArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj)=>{
                               return (
                                   <li key={msgObj.id}>
                                       {/*<a href="/xxxx">{msgObj.title}</a>&nbsp;&nbsp;*/}
                                       <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                                       <button onClick={()=>{this.pushshow(msgObj.id,msgObj.title)}}>push查看</button>
                                       <button onClick={()=>{this.replaceshow(msgObj.id,msgObj.title)}}>replace查看</button>
                                   </li>
                               )
                        })
                    }
                </ul>
                <hr/>
                {/*<Detail/>*/}
                {/*  注册路由  */}
                {/* 声明接收 params*/}
                <Route path="/home/message/detail/:id/:title" component={Detail}/>
            {/*    search */}
            {/*    <Route path="/home/message/detail/" component={Detail}/>*/}
            </div>
        );
    }
}

export default Message;
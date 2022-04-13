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
                                       {/* 路由组件开启replace模式 不会留下路由痕迹。默认push模式*/}
                                       <Link replace={true} to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>
                                   </li>
                               )
                        })
                    }
                </ul>
                <hr/>
                {/*<Detail/>*/}
                {/*  注册路由  */}
                {/* 声明接收state参数,无需声明接收 正常注册路由即可*/}
                <Route path="/home/message/detail/" component={Detail}/>
            </div>
        );
    }
}

export default Message;
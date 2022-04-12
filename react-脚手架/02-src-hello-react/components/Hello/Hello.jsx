import React,{Component} from "react";
//引入样式
import './Hello.css'

// 创建并并暴露Hello组件
export default class Hello extends Component{
    render() {
        return(
            <h2 className='title'>Hello React</h2>
        )
    }
}
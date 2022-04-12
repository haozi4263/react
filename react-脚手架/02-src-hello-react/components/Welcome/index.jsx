import React,{Component} from "react";
//引入样式,样式模块化通过.module
import welcome from './index.module.css'
import {getFCP} from "web-vitals";

// 创建并并暴露Hello组件
export default class Welcome extends Component{
    render() {
        return(
            <h2 className={welcome.title}>Welcome React</h2>
        )
    }
}


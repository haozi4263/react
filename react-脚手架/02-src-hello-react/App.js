
//创建外壳组件App

// import React from 'react'
// 这个文件默认暴露了React,分别暴露了Component
import React,{Component} from 'react'
// 引入Hello组件
import Hello from "./components/Hello/Hello";
// 组件写成index可以不写全路径
import Welcome from "./components/Welcome"

// 创建并暴露App外壳组件
export default class App extends Component{
  render() {
    return(
        <div>
            <Hello/>
            <Welcome/>
        </div>
    )
  }
}




//默认暴露App组件
// export default App
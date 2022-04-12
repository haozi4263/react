// 引入react核心库
import React from 'react';
// 引入react dom
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
//引入App外壳组件 .js .jsx可以不写 .css必须写
import App from './App'


// 渲染App到页面
ReactDOM.render(<App/>, document.getElementById('root'))


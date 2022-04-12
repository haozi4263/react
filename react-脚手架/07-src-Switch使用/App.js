import React,{Component} from 'react'
import {Route,Switch} from 'react-router-dom'
// 引入路由组件
import Home from './pages/Home'
import Test from './pages/Test'
import About from './pages/About'
// 引入一般组件
import Header from './components/Header'
import MyNavLink from "./components/MyNavLink";


// 创建并暴露App外壳组件
//SPA 单页面多组件
export default class App extends Component{
  render() {
        return(
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <MyNavLink to="/about" title="about">About</MyNavLink>
                            <MyNavLink to="/home">Home</MyNavLink>
                        </div>
                    </div>
                      <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                            {/*  注册路由  */}
                            <Switch>
                                <Route path="/about" component={About}/>
                                <Route path="/home" component={Home}/>
                                <Route path="/home" component={Test}/>
                            </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
  }
}

// Switch匹配home路存在多个组件时候，Switch匹配到第一个就不会继续匹配了


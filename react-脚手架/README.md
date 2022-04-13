rcc：类创建组件
rfc: 函数创建组件


路由：
    React路由的基本使用：
    1.明确好界面的导航区、展示区
    2.导航区的a标签改成link标签
    3.展示区写Route标签进行路径的匹配
    4.<App>的最外侧包裹一个<BrowserRouter>或<HashRouter>


    路由组件和一般组件最大的区别：
        1. 写法不不同
            一般组件：<Demo/>
            利用组件: <Route app="/demo" component={Demo}/>
        2.存放位置不同
            一般组件： components
            路由组件： pages
        3.接受到的props属性不同
            一般组件: 写组件标签时传递了什么，就能收到什么
            路由组件：接收到三个固定的属性对象
                history
                    go
                    goBack
                    goForward
                    push 
                    replace
                location
                    pathname
                    search
                    state
                metch
                    params
                    path
                    url
        NavLink于封装NavLink:
            1.NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
            2.标签体内容是一个特殊的的标签属性children
            3.通过this.props.children可以获取标签体的内容
        Swtich:
            1.通常情况下，path和component是一一对应的关系
            2.Switch可以提高路由匹配效率(单一匹配)
        嵌套路由(多级路由):
            1.注册子路由时要写上父路由的path值
            2.路由的匹配是按照注册路由的顺序进行的
        
        向路由组件传递参数：
            1.params参数（用的最多）
                路由链接(携带参数)：<Link to='/demo/test/tom/18'>详情</Link>
                注册路由(声明接受)：<Route path='/demo/test/:name' Component={Demo}>
                接受参数： const {id}=this.props.match.params
            2.search参数（用的比较多）
                路由链接(携带参数)：<Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
                注册路由：无需声明正常注册即可
                接受参数：this.props.location.search
                备注：获取到的search是urlencoded编码字符串，需要通过querystring解析
            3.state参数（不同组件里面state，是路由组件独有的）
                优势： url地址拦中没有参数,刷新也可以保留住参数
                路由链接(携带参数)：<Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>
                注册路由：无需声明正常注册即可
                接受参数：this.props.location.state

                总结：
                    params: localhost:3000/home/message/detail/01/消息1
                    search: localhost:3000/home/message/detail?id=1&titile=消息1
                    state: localhost:3000/home/message/detail?id=1&titile=消息1
            4.编程式路由导航
                
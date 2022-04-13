import React, {Component} from 'react';

class News extends Component {
    componentDidMount() {
        // new组件挂载后等2s后往message路由跳转
        setInterval(()=>{
            this.props.history.push('/home/message')
        },2000)
    }

    render() {
        return (
            <ul>
                <li>news001</li>
                <li>news002</li>
                <li>news003</li>
            </ul>
        );
    }
}

export default News;
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="page-header"><h2>React Router Header</h2></div>

            </div>
        );
    }
}

export default Header;
// withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
// 返回值是一个新组件
// export default withRouter(Header);
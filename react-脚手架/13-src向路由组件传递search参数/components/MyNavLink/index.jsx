import React, {Component} from 'react';

import {NavLink} from 'react-router-dom'

class MyNavLink extends Component {
    render() {
        // const {to,title} = this.props
        return (
            // <NavLink activeClassName="route-demo" className="list-group-item" to={to}>{title}</NavLink>
            <NavLink activeClassName="route-demo" className="list-group-item" {...this.props} />
        );
    }
}

export default MyNavLink;
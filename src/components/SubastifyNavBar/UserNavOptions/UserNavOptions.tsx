import * as React from 'react';

import { NavLink } from 'react-router-dom';


function UserNavOptions() {
    return (
        <ul className="navbar-nav mr-auto float-right">
            <li className="nav-item">
                <NavLink className="nav-link" to="/auctions/new" exact={true}>
                    Publish
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/me" exact={true}>
                    Me
                    <i className="fas fa-user-circle" />
                </NavLink>
            </li>
        </ul>
    );
}

export default UserNavOptions;
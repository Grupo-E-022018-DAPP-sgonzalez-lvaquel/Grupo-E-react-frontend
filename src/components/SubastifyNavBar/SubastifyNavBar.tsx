import * as React from 'react';
import { NavLink } from 'react-router-dom';


function SubastifyNavBar(props: React.Props<any>) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <i className="fas fa-gavel" />
                Subastify
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" exact={true}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about/" exact={true}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/users/" exact={true}>Users</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default SubastifyNavBar;

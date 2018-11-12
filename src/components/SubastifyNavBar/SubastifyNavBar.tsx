import * as React from 'react';
import { Link } from 'react-router-dom';


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
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about/">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users/">Users</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default SubastifyNavBar;

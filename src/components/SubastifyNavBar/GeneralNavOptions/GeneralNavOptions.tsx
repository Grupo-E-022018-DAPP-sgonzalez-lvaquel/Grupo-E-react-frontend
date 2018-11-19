import * as React from 'react';
import { Translate } from 'react-localize-redux';
import { NavLink } from 'react-router-dom';


function GeneralNavOptions() {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/" exact={true}>
                        <Translate id="nav.general.home" />
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about/" exact={true}>
                        <Translate id="nav.general.about" />
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default GeneralNavOptions;

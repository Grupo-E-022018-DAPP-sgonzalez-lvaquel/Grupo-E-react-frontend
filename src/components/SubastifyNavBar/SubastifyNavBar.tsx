import * as React from 'react';

import GeneralNavOptions from './GeneralNavOptions';
import UserNavOptions from './UserNavOptions';

function SubastifyNavBar(props: React.Props<any>) {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <i className="fas fa-gavel" />
                Subastify
            </a>
            <button
                className="navbar-toggler toggler-example"
                type="button"
                data-toggle="collapse"
                data-target="#navBarItems"
            >
                <i className="fa fa-bars fa-1x" />
            </button>
            <div
                id="navBarItems"
                className="collapse navbar-collapse"
            >
                <GeneralNavOptions />
                <UserNavOptions />
            </div>
        </nav>
    );
}

export default SubastifyNavBar;

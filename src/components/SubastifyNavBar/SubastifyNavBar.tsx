import * as React from 'react';

import GeneralNavOptions from './GeneralNavOptions';
import UserNavOptions from './UserNavOptions';


function SubastifyNavBar(props: React.Props<any>) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <i className="fas fa-gavel" />
                Subastify
            </a>
            <GeneralNavOptions />
            <UserNavOptions />
        </nav>
    );
}

export default SubastifyNavBar;

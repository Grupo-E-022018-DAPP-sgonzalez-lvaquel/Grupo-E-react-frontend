import * as React from 'react'

function SubastifyNavBar(props: React.Props<any>) {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <i className="fas fa-gavel" />
                Subastify
            </a>
        </nav>
    );
}

export default SubastifyNavBar;

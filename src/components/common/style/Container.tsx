import * as React from 'react';

function Container({children}: React.Props<any>) {
    return (
        <div className="container">
            {children}
        </div>
    );
}

export default Container;

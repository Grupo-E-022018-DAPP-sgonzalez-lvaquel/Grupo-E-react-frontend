import * as React from 'react';

function Row({children}: React.Props<any>) {
    return (
        <div className="row">
            {children}
        </div>
    );
}

export default Row;

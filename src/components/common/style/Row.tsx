import * as React from 'react';

export function Row({children}: React.Props<any>) {
    return (
        <div className="row">
            {children}
        </div>
    );
}

export default Row;

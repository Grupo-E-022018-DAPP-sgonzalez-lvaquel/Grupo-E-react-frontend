import * as React from 'react';

function Card({children}: React.Props<any>) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

export default Card;

import * as React from 'react';

function CardBody({children}: React.Props<any>) {
    return (
        <div className="card-body">
            {children}
        </div>
    );
}

export default CardBody;

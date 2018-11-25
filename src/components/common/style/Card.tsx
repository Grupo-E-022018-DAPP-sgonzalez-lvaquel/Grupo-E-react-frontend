import * as React from 'react';

function Card({children}: React.Props<any>) {
    return (
        <div className="card" style={{margin:'3px', boxShadow:'0px 5px 10px rgba(0,0,0,0.08)'}}>
            {children}
        </div>
    );
}

export default Card;

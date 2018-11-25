import * as React from 'react';

export default function CardText({children, ...props}: React.Props<any>){
    return (
        <p className="card-text" {...props}>
            {children}
        </p>
    );
}
import * as React from 'react';

export default function CardTitle({children, ...props}: React.Props<any>){
    return (
        <h5 className="card-title" {...props}>
            {children}
        </h5>
    );
}

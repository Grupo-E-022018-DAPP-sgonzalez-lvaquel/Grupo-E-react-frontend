import * as React from 'react';

interface IColumnProps extends React.Props<any> {
    size: number;
}

function Column({size, children}: IColumnProps) {
    return (
        <div className={`col-${size}`}>
            {children}
        </div>
    );
}

export default Column;

import * as React from 'react';

interface IAlertProps extends React.Props<any> {
    type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
}

function Alert({ type, children }: IAlertProps) {
    return (
        <div className={`alert alert-${type}`} role="alert">
            {children}
        </div>
    );
}

export default Alert;
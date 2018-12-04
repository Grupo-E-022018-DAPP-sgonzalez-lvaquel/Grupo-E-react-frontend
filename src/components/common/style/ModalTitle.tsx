import * as React from 'react';

interface IModalTitleProps extends React.Props<any> {
}

export function ModalTitle({children}: IModalTitleProps) {
    return <h5 className="modal-title">{children}</h5>
}

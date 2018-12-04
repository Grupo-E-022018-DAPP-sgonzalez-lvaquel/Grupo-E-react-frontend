import * as React from 'react';

interface IModalBodyProps extends React.Props<any> {
}

export function ModalBody({children}: IModalBodyProps) {
    return (
      <div className="modal-body">
        {children}
      </div>
    )
}

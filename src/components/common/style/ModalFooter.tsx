import * as React from 'react';

interface IModalFooter extends React.Props<any> {
}

export function ModalFooter({children}: IModalFooter) {
    return (
      <div className="modal-footer">
        {children}
      </div>
    )
}

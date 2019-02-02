import * as React from 'react';

interface IModalProps extends React.Props<any> {
  showModal: boolean;
}

export function Modal({showModal, children}: IModalProps) {
    if (showModal) {
      return (
        <div className="modal" style={{zIndex: -1}} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              {children}
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }
};

export default Modal;

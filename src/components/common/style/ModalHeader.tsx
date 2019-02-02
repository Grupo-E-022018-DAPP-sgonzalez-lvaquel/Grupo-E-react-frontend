import * as React from 'react';

interface IModalHeaderProps extends React.Props<any> {

}

export function ModalHeader({children}: IModalHeaderProps){
  return (
    <div className="modal-header">
    {children}
    </div>
  )
}

import * as React from 'react';

import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'src/components/common';

import { Translate } from 'react-localize-redux';

import BetForm from './BetForm';

import { IAuction } from 'src/model';

interface IModalApostarProps extends React.Props<any>  {
    showModal: boolean;
    auction: IAuction;
    onClose: () => void;
}

 class ModalApostar extends React.Component<IModalApostarProps> {
    public render() {
      const { showModal, onClose } = this.props;
      return (
        <Modal showModal={showModal}>
          <ModalHeader>
            <ModalTitle>
              <Translate id="auction.details.modal.title"/>
            </ModalTitle>
            <Button variant="primary">
              asdasd
            </Button>
          </ModalHeader>
          <ModalBody>
            <BetForm />
          </ModalBody>
          <ModalFooter>
            <Button variant="primary">
              <Translate id="auction.details.modal.accept"/>
            </Button>
            <Button variant="secondary" data-dismiss="modal" onClick={onClose}>
              <Translate id="auction.details.modal.cancel"/>
            </Button>
          </ModalFooter>
        </Modal>
      )
    }
}

export default ModalApostar;

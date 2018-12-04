import * as React from 'react';

import { Button } from 'src/components/common';

import { Translate } from 'react-localize-redux';

import { IAuction } from 'src/model';

import ModalApostar from './ModalApostar';

interface IMakeBetButtonProps {
  auction: IAuction;
}

interface IMakeBetButtonState {
    showModal: boolean;
}

class MakeBetButton extends React.Component<IMakeBetButtonProps, IMakeBetButtonState> {
  constructor(props: IMakeBetButtonProps) {
    super(props);
    this.state = {
      showModal: false,
    }
    this.showModal = this.showModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  public showModal() {
    this.setState({
      showModal: true,
    })
  }

  public closeModal() {
    this.setState({
      showModal: false,
    })
  }

  public render () {
    const { auction } = this.props;
    const { showModal } = this.state;
    return (
      <div>
        <ModalApostar showModal={showModal} auction={auction} onClose={this.closeModal as any}/>
        <Button variant='primary' onClick={this.showModal as any}>
          <Translate id="auction.details.makeBet.modal.title"/>
        </Button>
      </div>
    )
  }
}

export default MakeBetButton;

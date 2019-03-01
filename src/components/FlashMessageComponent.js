import React from 'react';
import FlashMessage from 'react-flash-message';
import { removeFlashMessage } from '../actions/orderActions';
import { connect  } from 'react-redux';


class FlashMessageComponent extends React.Component {


    render() {
        const { duration, persistOnHover, messageType, messageAlert  } = this.props

        return (messageType === 'success'?
        (
            <FlashMessage duration={3000} persistOnHover={true}>
                <div className="alert success_message" role="alert">
                    <p align="center"><strong>{ messageAlert }</strong></p>
                </div>
            </FlashMessage>
        )
        :
        <FlashMessage duration={3000} persistOnHover={true}>
            <div className="alert error_message" role="alert">
                <p align="center"><strong>{ messageAlert}</strong></p>
            </div>
        </FlashMessage>

        )
    }

}

export default  connect(null, { removeFlashMessage })(FlashMessageComponent);
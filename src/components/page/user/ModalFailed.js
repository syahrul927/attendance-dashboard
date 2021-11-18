import React from 'react'
import history from '../../history'

const ModalFailed = ({setModal, errMessage}) => {
    const confirmButton = () => {
        setModal(false)
    }
    return(
        <div className="ui container">
            <div className="ui dimmer modals page transition active">
                <div className="ui standard test modal transition visible active">
                    <div className="header">
                        <h3>Authentication!</h3>
                    </div>
                    <div className="content">
                        <div className="description">
                            <p>{errMessage}</p>
                        </div>
                    </div>
                    <div className="actions">
                        <div className="ui green button" onClick={confirmButton}>OK</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalFailed
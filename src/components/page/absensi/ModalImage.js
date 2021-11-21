import React from 'react'

const ModalImage = ({setModal, url}) => {
    const confirmButton = () => {
        setModal(false)
    }
    return(
        <div className="ui container">
            <div className="ui dimmer modals page transition active">
                <div className="ui standard test modal transition visible active">
                    <div className="header">
                        <h3>Photo Absensi</h3>
                    </div>
                    <div className="content">
                        <div className="description">
                            <img style={{maxHeight:300, maxWidth:300}} src={url} alt=""/>
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

export default ModalImage
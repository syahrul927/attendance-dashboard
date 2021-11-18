import React, { useState } from 'react'
import ModalTesting from './ModalTesting'
const Testing = () => {
    const [modal, setModal] = useState(false)
    const showModal = () => {
        setModal(true)
    }
    return(
        <div className="ui grid ">
            <div className="six wide column">
                <h1 className="ui header">Test Wajah Anda</h1>
            </div>
            <div className="right floated three wide column">
                <button className="ui button primary" onClick={showModal}>Ambil Gambar</button>
            </div>
            {modal && <ModalTesting setModal={setModal} />}
        </div>
    )
}

export default Testing

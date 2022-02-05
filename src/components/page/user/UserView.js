import React from 'react'

const UserView = ({ setModal, url, nama }) => {

    const baseURL = 'http://attendance-serviceku.herokuapp.com/s3/image/'
    const confirmButton = () => {
        setModal(false)
    }
    const renderImage = (image) => {
        const fixUrl = baseURL + image
        console.log(image)
        return (
            <div className="ui column" key={image}>
                <img style={{ maxHeight: 300, maxWidth: 300 }} src={fixUrl} alt="" />
            </div>
        )
    }
    return (
        <div className="ui container">
            <div className="ui dimmer modals page transition active">
                <div className="ui standard test modal transition visible active">
                    <div className="header">
                        <h3>{nama}</h3>
                    </div>
                    <div className="content">
                        <div className="description">
                            {url.map(item => renderImage(item))}
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

export default UserView
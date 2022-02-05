import React from 'react'
import doRequest from '../../../api'
import API from '../../../api/pathApi.json'
const ModalDelete = ({modal, setModal, listUser}) => {
    const confirmButton = async () => {
        if(modal.id){
            const id = modal.id
            const body = {
                id
            }
            await doRequest(API.userApi.delete, body).then(res => {
                if(res.data.success){
                    listUser.splice(listUser.findIndex(function(i){
                        return i.id === id
                    }), 1)
                }
            })
            setModal(false)
        }
    }
    return(
        <div className="ui container">
            <div className="ui dimmer modals page transition active">
                <div className="ui standard test modal transition visible active">
                    <div className="header">
                        <h3>Peringatan</h3>
                    </div>
                    <div className="content">
                        <div className="description">
                            <p>Apakah anda yakin ingin menghapus ?</p>
                        </div>
                    </div>
                    <div className="actions">
                        <div className="ui button" onClick={() => setModal(false)}>Batal</div>
                            <div className="ui red button" onClick={confirmButton}>Iya</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDelete
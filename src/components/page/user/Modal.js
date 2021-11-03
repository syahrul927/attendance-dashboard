import React, { useEffect, useRef, useState } from 'react'
const Modal = ({ setModal, listPhoto, setPhoto }) => {
    const videoRef = useRef(null)
    const photoRef = useRef(null)
    const [tracks, setTracks] = useState(null)
    const [hasPhoto, setHasPhoto] = useState(false)

    const getVideo = () => {

        navigator.mediaDevices.getUserMedia({
            video: { width: 300, height: 300 }
        })
        .then(res => {
            let video = videoRef.current
            video.srcObject = res
            video.play()
            setTracks(res.getTracks())
        })
        .catch(e => {
            console.log(e)
        })

    }
    useEffect(() => {
        getVideo()
    }, [])


    const takePhoto = async () => {
        let video = videoRef.current
        await setHasPhoto(true)
        const width = 300
        const height = 300 
        let photo = photoRef.current
        photo.width = width
        photo.height = height
        let context = photo.getContext('2d')

        context.drawImage(video, 0, 0, width, height)
        
        stopStream()
    }
    const dismissModal = async (save = false) => {
        if (save) {
            const imageData = photoRef.current.toDataURL('image/png')
            setPhoto([...listPhoto, imageData])
        }
        stopStream()
        setModal(false)
    }
    const stopStream = () => {
        tracks.forEach(e => e.stop())
    }
    const renderButtonCheese = () => {
        const txt = !hasPhoto ? 'Cheese !' : 'Reset ?'
        const style = hasPhoto ? 'red' : 'teal'
        return(
            <button className={`ui button ${style}`} onClick={() => {!hasPhoto ? takePhoto() : resetPhoto()}}>{txt}</button>
        )
    }
    const resetPhoto = () => {
        setHasPhoto(false)
        getVideo()
    }
    return (
        <div className="ui container">
            <div className="ui dimmer modals page transition active">
                <div className="ui standard test modal transition visible active">
                    <div className="header">
                        <h2>Ambil Gambar</h2>
                    </div>
                    <div className="image content">
                        <div className="ui medium image">
                            {!hasPhoto && <video ref={videoRef}></video>}  
                            {hasPhoto && <canvas ref={photoRef}></canvas>}
                        </div>
                        <div className="description">
                            <div className="ui header">Hadapkan Wajah Ke Kamera</div>
                            <p>Di harapkan untuk tidak memakai aksesoris apapun, terutama yang menutupi wajah. Alasan ini di buat untuk meningkatkan persentase dari AI deteksi wajah.</p>
                            <p>Posisikan wajah agar terlihat jelas dan badan terlihat sampai dada.</p>
                            {renderButtonCheese()}
                        </div>
                    </div>
                    <div className="actions">
                        <div className="ui black deny button" onClick={() => dismissModal(false)}>
                            Batal
                        </div>
                        <div className={`ui positive right labeled icon button ${!hasPhoto && 'disabled'} `} onClick={() => dismissModal(true)}>
                            Oke
                            <i className="checkmark icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
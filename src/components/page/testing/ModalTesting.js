import React, { useEffect, useRef, useState } from 'react'
import doRequest from '../../../api'
import API from '../../../api/pathApi.json'
import Loading from '../part/loading'
import { base64ToImageFile } from '../user/imageUtils'
const ModalTesting = ({ setModal }) => {
    const videoRef = useRef(null)
    const photoRef = useRef(null)
    const [image, setImage] = useState(null)
    const [tracks, setTracks] = useState(null)
    const [hasPhoto, setHasPhoto] = useState(false)
    const [userName, setUserName] = useState(null)
    const [percentage, setPercentage] = useState(null)
    const [loading, setLoading] = useState(false);
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

        context.filter = "brightness(110%)"
        context.drawImage(video, 0, 0, width, height)

        const imageData = photoRef.current.toDataURL('image/png')
        setImage(imageData)
        stopStream()
    }
    const dismissModal = async (save = false) => {
        if (save) {
            const imageData = photoRef.current.toDataURL('image/png')
            setImage(imageData)
        }
        stopStream()
        setModal(false)
    }
    const stopStream = () => {
        if (tracks) {
            tracks.forEach(e => e.stop())
        }
    }
    const renderButtonCheese = () => {
        const txt = !hasPhoto ? 'Cheese !' : 'Reset ?'
        const style = hasPhoto ? 'red' : 'teal'
        return (
            <button className={`ui button ${style}`} onClick={() => { !hasPhoto ? takePhoto() : resetPhoto() }}>{txt}</button>
        )
    }
    const renderButtonScan = () => {
        return (
            <button className={`ui button yellow ${!hasPhoto && 'disabled'}`} onClick={() => scanPhoto()}>Scan</button>
        )
    }
    const scanPhoto = async () => {
        if (hasPhoto) {
            setLoading(true)
            let formData = new FormData()
            const file = await base64ToImageFile(image, `dummy.png`)
            formData.append('image', file)
            await doRequest(API.userApi.validateUser, formData).then(resp => {
                if (resp.status === 200) {
                    renderResult(resp.data.obj)
                }
            }).catch(err => {
                renderResult('')
            }).finally(() => setLoading(false))
        }
    }
    const renderResult = (obj) => {
        if (obj) {
            const perc = (1-parseFloat(obj.distance).toPrecision(3))*100
            setPercentage(perc)
            setUserName(obj.nama)
        } else {
            setPercentage('')
            setUserName('')
        }
    }
    const resetPhoto = () => {
        setHasPhoto(false)
        setUserName(null)
        getVideo()
    }
    const renderUsername = () => {
        if (userName) {
            return (
                <div>
                    <p>Nama Anda <h1><b>{userName}</b></h1></p>
                    <p>Kemiripian <b>{percentage}%</b></p>
                </div>
            )
        } else {
            if (userName === '') {
                return (
                    <div>
                        <p>Maaf anda tidak dikenali</p>
                    </div>
                )
            }
        }
    }
    return (
        <div className="ui container">
            <div className="ui dimmer modals page transition active">
                <div className="ui standard test modal transition visible active">
                    <div className="header">
                        <h2>Ambil Gambar</h2>
                    </div>
                    {loading && <Loading />}
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
                            {renderButtonScan()}
                            <br />
                            {renderUsername()}
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

export default ModalTesting
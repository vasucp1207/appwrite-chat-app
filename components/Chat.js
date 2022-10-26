import React, { useEffect, useState } from 'react'
import { account, avatar } from '../appwrite/appwrite'

function Chat({ key, msg }) {

    const [user, setUser] = useState({})
    const [imageType, setImageType] = useState()

    function isImage(url) {
        return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
    }

    useEffect(() => {
        const promise = account.get()
        promise.then(function (response) {
            // console.log(response)
            setUser(response)
        }, function (error) {
            console.log(error)
        })

        const type = isImage(msg.message)
        setImageType(type)
    }, [])

    const chatType = user.email === msg.emailId ? 'sent' : 'received'
    const imageClass = user.email === msg.emailId ? 'sent-img-up' : 'received-img-up'

    return (

        <div className='chatAll'>
            {!imageType && <span className={chatType} key={msg.key}>
                <span className='user-name'>{user.name}</span>
                <span>{msg.message}</span>
            </span>}
            {imageType && <img className={imageClass} src={msg.message} alt='image' />}
        </div>
    )
}

export default Chat
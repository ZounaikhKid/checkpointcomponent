import React from 'react'
import photo from './profile.jpg'
const ProfilePhoto = () => {
    return (
        <div>
            <img src={photo} alt="" className="rounded-circle img-thumbnail" />
        </div>
    )
}

export default ProfilePhoto

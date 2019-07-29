import React from 'react';
import ProfilePhoto from '../images/Ellipse.png';

const UserProfile = () => {
    return(
        <div id="user-profile">
            <h2>Joe Taslim</h2>
            <img src={ProfilePhoto} id='profile-photo' alt='profile'></img>
        </div>
    )
}

export default UserProfile;
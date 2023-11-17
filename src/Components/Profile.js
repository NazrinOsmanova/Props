import React from 'react';
import PersonalInfo from './PersonalInfo';
import Name from './Name';
import Email from './Email';
import Address from './Address';

const Profile = () => {
    return (
        <div className='profile'>
            <PersonalInfo surname='Osmanova' age='19' />
            <Name name='Nazrin' />
            <Email email='nazrinosmanovaa@gmail.com' />
            <Address address='Azerbaijan, Baku' />
        </div>
    )
}

export default Profile
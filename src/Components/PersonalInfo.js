import React from 'react'

const PersonalInfo = (props) => {
    return (
        <div className='personalInfo'>
            <h2>Personal info</h2>
            <p>Surname: <span>{props.surname}</span></p>
            <p>Age: <span>{props.age}</span></p>
        </div>
    )
}

export default PersonalInfo
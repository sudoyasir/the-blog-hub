import React from 'react'
import './style.css'
import img from '../../../images/13525-empty.gif'

export const EmptyList = () => {
    return (
        <div className='emptyList-wrap'>
            <img src={img} alt="empty" />
        </div>
    )
}

export default EmptyList;

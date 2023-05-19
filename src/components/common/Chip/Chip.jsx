import React from 'react'
import "./style.css"

export default function Chip({ category }) {
    return (
        <p className='Chip'>
            {category}
        </p>
    )
}
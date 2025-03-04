import React from 'react'

export const GifGridItem = ({ title, url }) => {
    console.log(title, url);
    return (
        <div className='card animate__animated animate__fadeInUp'>
            <img src={url} alt={title} />
            <h5>{title}</h5>
        </div>
    )
}

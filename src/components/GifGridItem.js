import React from 'react'

export const GifGridItem = ({id,title,url}) => {
    // console.log(id);
    // console.log(title);
    // console.log(url);
    return (
        <div className='card animate__animated animate__pulse'>
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}

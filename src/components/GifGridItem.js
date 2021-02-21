import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({title,url,category = 'GIF'})=> {

    if(!title || title.trim() ==''){
        title = `${category.toUpperCase()} GIF`;
    }
    

    
    return (
        <div className = 'card animate__animated animate__rotateIn' >
            <a href = {url} target = '_blank'>
                <img src= {url} alt={title}/>
            </a>
            <p>{title}</p>
            
        </div>
    )
}

GifGridItem.propTypes = {
    category: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired

}

export default GifGridItem

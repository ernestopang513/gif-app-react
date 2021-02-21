import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({id,title,url,category})=> {

    if(!title || title.trim() ==''){
        title = `${category.toUpperCase()} GIF`;
    }
    // console.log(title)

    
    return (
        <div className = 'card animate__animated animate__rotateIn' id = {id}>
            <a href = {url} target = '_blank'>
                <img src= {url} alt={title}/>
            </a>
            <p>{title}</p>
            
        </div>
    )
}

GifGridItem.propTypes = {

}

export default GifGridItem

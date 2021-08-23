import React from 'react'
import likeIcon from '../../img/like.png'

function ImgLike(props) {
    if (props.clean){
        return <img className='likeIcon' src={likeIcon} onClick={props.addTrackI} alt=""/>
    }else{
        return null
    }
}

export default ImgLike

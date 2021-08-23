import React from 'react'
import { useState, useEffect} from 'react'
import {useSelector} from 'react-redux'


function Show(props) {
    
    const [imgIcon, setImgIcon] = useState([])

    const state = useSelector(state => state)
    
    function clickIcon() {
        props.onClickLike()
        setImgIcon([])
    }

    useEffect(() => {

        setImgIcon([
            <img className='likeIcon' src={props.icon} onClick={clickIcon} alt=""/>
        ])
    }, [state.typeTrack])


    return (
        <div key={props.index} className="playlist__item">
            <img src={props.img} className='playlist__img' alt=""/>
            <h1 className="playlist__name">{props.name}</h1>
            <h3 className="playlist__name">Name Artist: <span style={{color: 'rgba(0, 255, 56, 0.83)'}}>{props.artName}</span></h3>
            <div className='item__bottom'>
                {/* <img className='likeIcon' src={props.icon} onClick={props.onClickLike} alt=""/> */}
                {imgIcon}
                <a className='trackBtn ' target='_blank' href={props.listen}>listen to it</a>
            </div>

        </div>
    )
}

export default Show

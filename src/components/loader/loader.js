import React from 'react'

function Loader(props) {
    let addClass = 'loader-wrap'
    return (
        <div className={addClass + ' ' + props.active}>
            <div className="loader">
                <div className="loader-inner line-scale-pulse-out">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div> 
        </div>
    )
}

export default Loader

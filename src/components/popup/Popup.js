import React from 'react'
import './popup.css'

function Popup(props) {
    return (
        <div className='popup-wrap' onClick={props.ClickClose}>
            <div className="popup__body">
                <h3 className="popup__text">
                    {props.text}
                </h3>

                <section className='controlls'>
                    <button className='btns' onClick={props.clickCancel}>Cancel</button>
                    <button className='btns' onClick={props.clickYes}>Yes</button>
                </section>
            </div>
        </div>
    )
}

export default Popup

import React from 'react'
import './accountInfo.css'

function AccountInfo(props) {
    // console.log(props);
    let accaunt = null
    if (props.profile) {
        accaunt = (
            <div className='wrapMenu' onClick={props.closeMenu}>
                <div className='profile'>
                    <h3 className="MyMusic">My favorite music</h3>
                    <h3 className="MyMusic">Sign in</h3>
                </div>
            </div>
        )
    }

    return accaunt
}

export default AccountInfo

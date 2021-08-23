import {useState} from 'react'
import AccountInfo from '../../components/accountInfo/accountInfo'
import {useHistory} from 'react-router-dom'
import {useSelector ,useDispatch} from 'react-redux'

import './header.css'
import user from '../../img/user.png'
import like from '../../img/like1.png'
import Popup from '../../components/popup/Popup'

function Header(props) {
    const [inputState, setInputState] = useState(null)

    const [popup, setPopup] = useState([])

    let history = useHistory();

    const dispatch = useDispatch()
    const state = useSelector(state => state)



    function clickAc() {
        if (state.authorize){
            setPopup(
                <Popup 
                text='Are you want to logout?' 
                ClickClose={() => setPopup()}
                clickCancel={() => setPopup()} 
                    clickYes={() => {
                        history.push('/sign')
                        setPopup()
                        dispatch({type: 'authT', authState: false})
                    }
                }/>
            )
        }else{
            history.push('/sign');
        }
    } 

    function findTrack(e){
        e.preventDefault()
        dispatch({type: 'getInputVal', inpVal: inputState})
        dispatch({type: 'ChangeTypeTrack', CTOT: 'fromInput'})
        history.push('/tracks');
    }

    function changeVal(e) {
        setInputState(e.target.value)
    }

    function clickMM() {
        if (state.authorize){
            dispatch({type: 'ChangeTypeTrack', CTOT: 'myMusic'})
            history.push('/tracks');
        }else{
            history.push('/sign');
        }
    }

    // function clickHome() {
    //     history.push('/');
    // }
    
    return (
        <header className="header">
            {popup}
            <a href='#' onClick={() => history.push('/')} className="logo">My<span>Music</span></a>
            <form className='form' onSubmit={(e) => findTrack(e)}>
                {/* <button className="btn__sign">sign in</button> */}
                <input type="text" placeholder='name of track' onChange={(e) => changeVal(e)}/>
                <button className="btn">search</button>
            </form>
            <img src={like} alt="" className='like' onClick={clickMM}/>
            <img src={user} alt="" className='user' onClick={clickAc}/>
        </header>
    )
}

export default Header
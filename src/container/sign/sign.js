import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import firebase, {auth} from '../../config/FbConfig'
import {useHistory} from 'react-router-dom'
import axios from '../../components/axiosFirebase/axios-firebase';


function Sign() {
    const [eVal, setEVal] = useState([])
    const [pVal, setPVal] = useState([])
    const [p2Val, setP2Val] = useState([])

    const [signState, setSignState] = useState([])
    const [btn, setBtn] = useState('Sign in')
    const [regInp, setRegInp] = useState([])

    const state = useSelector(state => state)
    const dispatch = useDispatch()
    let history = useHistory();

    let count = 0
    let countReg = 0

    useEffect(() => {
    }, [])

    function signIn(e) {
        e.preventDefault()
        
        firebase.auth()
            .signInWithEmailAndPassword(eVal, pVal)
                .then(result => {
                    dispatch({type: 'getUserEmail', email: result.user.email})

                    if (result.user) {

                        axios.get('/users.json')
                            .then(el => {
                                let data = el.data
                                const tracksInfo = {
                                    tracksName: [],
                                    tracksUrl: []
                                }
                                for(let i in data){
                                    if (data[i].email === result.user.email) {
                                        dispatch({type: 'getId', userId: i})
                                        let iTracks = data[i]
                                        for (let j in iTracks){
                                            if (j != 'email'){
                                                tracksInfo.[j] = iTracks[j]
                                            }
                                        }
                                    } 
                                }
                                dispatch({type: 'saveTrack', valTrack: tracksInfo})                             
                            })

                        dispatch({type: 'authT', authState: true})
                        history.push('/')
                    }
                })
                .catch(error => {
                    setSignState(<h1 className='sign-title' style={{color: '#FF0004', background: 'rgba(100,80,75, .5)', borderRadius: '10px', padding: '20px'}}>Invalid username or password</h1>)
                })
    }

    function changeInput(e) {
        if(e.target.name === 'email') setEVal(e.target.value)
        else if(e.target.name === 'password') setPVal(e.target.value)   
        else setP2Val(e.target.value)
    }

    function clickBtnReg() {
        countReg++
        setBtn('Register')

        setRegInp(
            <input type="password" name='password2' className='email-inp'  placeholder='reapit password' onChange={(e) => changeInput(e)}/>
        )
        if ('Register' == btn) {
            countReg++
            if (countReg === 2 && pVal === p2Val) {
                countReg++
                firebase.auth()
                .createUserWithEmailAndPassword(eVal, pVal)
                    .then(el => {
                        dispatch({type: 'getId', userId: el.user.email})
                        dispatch({type: 'authT', authState: true})
                        history.push('/')
                    })
                    .catch(err => {
                        setSignState(<h1 className='sign-title' style={{color: '#FF0004', background: 'rgba(100,80,75, .5)', borderRadius: '10px', padding: '20px'}}>{err.message}</h1>)
                    })
            }else{
                setSignState('Password mismatch')
            } 
        }

    }

    function clickBtnSign() {
        count++
        setBtn('Sign in')
        setRegInp([])
        if ('Sign in' === btn){
            count++
            if (count === 2) { 
                count = 0
                
                firebase.auth()
                    .signInWithEmailAndPassword(eVal, pVal)
                        .then(result => {
                            dispatch({type: 'getUserEmail', email: result.user.email})
                            if (result.user) {
                                axios.get('/users.json')
                                    .then(el => {
                                        let data = el.data
                                        const tracksInfo = {
                                            tracksName: [],
                                            tracksUrl: []
                                        }
                                        for(let i in data){
                                            if (data[i].email === result.user.email) {
                                                dispatch({type: 'getId', userId: i})
                                                let iTracks = data[i]
                                                for (let j in iTracks){
                                                    if (j != 'email'){
                                                        tracksInfo.[j] = iTracks[j]
                                                    }
                                                }
                                            } 
                                        }
                                        dispatch({type: 'saveTrack', valTrack: tracksInfo})                             
                                    })
                                dispatch({type: 'authT', authState: true})
                                history.push('/')
                            }
                        })
                        .catch(error => {
                            setSignState(<h1 className='sign-title' style={{color: '#FF0004', background: 'rgba(100,80,75, .5)', borderRadius: '10px', padding: '20px'}}>Invalid username or password</h1>)
                        })
            }
        }
    }

    return (
        <div className='sign-wrap'>
            {signState}
            <h3 className='sign-title'>{btn}</h3>

            <form onSubmit={(e) => signIn(e)}>
                <input type="email" className='email-inp'
                name='email' placeholder='email'
                onChange={(e) => changeInput(e)}/>
                <input type="password" name='password' className='email-inp'  placeholder='password' onChange={(e) => changeInput(e)}/>
                {regInp}
            </form>

            <div className='controlls' style={{display: 'flex', justifyContent: 'space-between', margin: '0 auto', width: '20%'}}>
                <button className='trackBtn' onClick={clickBtnReg}>register</button>
                <button className='trackBtn' onClick={clickBtnSign}>sign-in</button>
            </div>

        </div>
    )
}

export default Sign

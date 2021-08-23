import {useEffect, useState, useCallback} from 'react'
import fetchS from '../../components/fetch/FetchS'
import {useSelector, useDispatch} from 'react-redux'
import Loader from '../../components/loader/loader';
import likeIcon from '../../img/like.png'
import deleteIcon from '../../img/delete.png'
import {useHistory} from 'react-router-dom'
import axios from '../../components/axiosFirebase/axios-firebase';
import Show from '../../components/show/Show';
import Popup from '../../components/popup/Popup';
 
function Tracks() {
    const state = useSelector(state => state)
    
    let history = useHistory();
    
    const dispatch = useDispatch()
    
    const [next, setNext] = useState(null)
    const [prev, setPrev] = useState(null)
    const [loaderState, setLoaderState] = useState('active')
    
    const [popup, setPopup] = useState([])
    const [tracks, setTracks] = useState([]);
    const [nothing, setNothing] = useState([])
    let indexS = null

    
    function showTracks(tracks) {
        let lol = tracks.items.map((el, index) => {
            return (
                <Show 
                    key={index}
                    index={index}
                    img={el.track.album.images[0].url}
                    name={el.track.name}
                    artName={el.track.artists[0].name}
                    onClickLike={() => addTrack(el.track)}
                    listen={el.track.external_urls.spotify}
                    icon={likeIcon}
                />
            )
        })
        setTracks(lol)

        setNext(tracks.next)
        setPrev(tracks.previous)
    }

    function showTracksInp(tracks) {
        let lol = tracks.items.map((el, index) => {
            let imgS = '#'
            if (el.album.images.length > 0 ) imgS = el.album.images[0].url
            return (
                <Show 
                    key={index}
                    img={imgS}
                    name={el.name}
                    artName={el.album.artists[0].name}
                    onClickLike={() => addTrack(el, index)} 
                    listen={el.album.external_urls.spotify}
                    icon={likeIcon}
                />
            )
        })
        setTracks(lol)

        setNext(tracks.next)
        setPrev(tracks.previous)
    }

    function addTrack(data, index) {      
        if (!state.authorize){
            history.push('/sign')
        }else{
            if (!Object.values(state.tracks.tracksName).includes(data.name)){
                if (state.tracks.tracksName.length === 0) {
                    axios.post(`/users.json`, {
                        email: state.userEmail,
                        tracksName: [data.name],
                        tracksUrl: [data.href]
                    })
                        .then(el => {
                            setLoaderState('')
                            const saveToFirebase = {
                                tracksName: [data.name],
                                tracksUrl: [data.href]
                            }
                            dispatch({type: 'getId', userId: el.data.name})
                            dispatch({type: 'saveTrack', valTrack: saveToFirebase})

                        })
                }else{
                    let saveToFirebase = {...state.tracks}
                    console.log(index);

                    const tracksArray = Object.values(saveToFirebase.tracksName)
                    const tracksUrlArray = Object.values(saveToFirebase.tracksUrl)
                    
                    tracksArray.push(data.name)
                    tracksUrlArray.push(data.href)

                    saveToFirebase = {
                        tracksName: tracksArray,
                        tracksUrl: tracksUrlArray
                    }

                    dispatch({type: 'saveTrack', valTrack: saveToFirebase})
    
                    axios.patch(`/users/${state.userFirebaseId}.json`, saveToFirebase)
                        .then(el => {
                            setLoaderState('')
                        })
                }
            }
        }
    }


    function dalateElement(data, index){
        indexS = index
        setPopup( 
            <Popup
                text='Are you want to delete this track?' 
                ClickClose={() => setPopup()} 
                clickCancel={() => setPopup()} 
                clickYes={deleteTrack} 
            /> 
        ) 
    } 

    function deleteTrack () { 
        let saveToFirebase = {...state.tracks} 
        delete saveToFirebase.tracksName[indexS] 
        delete saveToFirebase.tracksUrl[indexS] 

        const tracksArray = []
        const tracksUrlArray = []

        saveToFirebase.tracksName.forEach(el => {
            if (el != null){
                tracksArray.push(el)
            }
        })
        saveToFirebase.tracksUrl.forEach(el => {
            if (el != null){
                tracksUrlArray.push(el)
            }
        })

        saveToFirebase = {
            tracksName: tracksArray,
            tracksUrl: tracksUrlArray
        }

        dispatch({type: 'saveTrack', valTrack: saveToFirebase}) 
        axios.patch(`/users/${state.userFirebaseId}.json`, saveToFirebase) 
            .then(el => { 
                setLoaderState('') 
            }) 
    } 

    useEffect(() => { 
        setNothing([])
        setTracks([])
        setLoaderState('active')
        if (state.typeTrack === 'fromPLaylist') {
            fetchS(state.inputVal, state.token)
                .then(track => {
                        setLoaderState('')
                        showTracks(track)
                    })

        }else if (state.typeTrack === 'fromInput'){
            fetchS(`https://api.spotify.com/v1/search?q=${state.inputVal}&type=track`, state.token)
                .then(track => {
                    setLoaderState('')
                    showTracksInp(track.tracks)
                })

        }else if(state.typeTrack === 'myMusic') {
            const tracksUrl = Object.values(state.tracks.tracksUrl)
            let stateFor = true
            tracksUrl.forEach((ar, i) => {
                if(ar === null){
                    if(tracksUrl.length === i++){
                        setLoaderState('')
                        setNothing([
                            <h1 className='sign-title' style={{color: '#fff', background: 'rgba(94,98,100, .5)', borderRadius: '10px', padding: '20px'}}>There's should be your favorite tracks</h1>
                        ])
                        stateFor = false
                    }
                }
            })

            if (stateFor) {
                setNothing([])
            }

            if(tracksUrl.length === 0){
                setLoaderState('')
                setNothing([
                    <h1 className='sign-title' style={{color: '#fff', background: 'rgba(94,98,100, .5)', borderRadius: '10px', padding: '20px'}}>There's should be your favorite tracks</h1>
                ])
            }else{
                setNothing([])
            }
            for (let element in tracksUrl){
                fetchS(tracksUrl[element], state.token)
                    .then((el) => {
                        setLoaderState('')
                        let imgS = '#'
                        if (el.album.images.length > 0 ) imgS = el.album.images[0].url
                        let lol = (
                            <Show 
                                key={element}
                                img={imgS}
                                name={el.album.name}
                                artName={el.album.artists[0].name}
                                onClickLike={() => dalateElement(el, element)}
                                listen={el.album.external_urls.spotify}
                                icon={deleteIcon}
                            />
                        )
                        setTracks(tracks => [...tracks, lol])
                        
                        setNext(tracks.next)
                        setPrev(tracks.previous)
                    })
            }
        }
    }, [state.typeTrack, state.tracks.tracksName, state.inputVal])
    
    
    function clickPrev() {
        // setLoaderState('active')
        if(prev !== '' && prev != null){
            if (state.TorS) {
                fetchS(prev, state.token)
                    .then(track => {
                        showTracks(track)
                    })
            }else{
                fetchS(prev, state.token)
                    .then(track => {
                        showTracksInp(track.tracks)
                    })
                }
            }
    }    
    function clickNext() {
            // setLoaderState('active')
            if(next !== '' && next != null){
                if (state.TorS) {
                    fetchS(next, state.token)
                    .then(track => {
                        showTracks(track)
                    })
            }else{
                fetchS(next, state.token)
                    .then(track => {
                        showTracksInp(track.tracks)
                    })
            }
        }
    }

    return (
        <div style={{position: 'relative'}}>
            <Loader active={loaderState}/>
            {nothing}
            {popup}
            <section className='playlists'>
                {tracks}
            </section>

            <section className='controlls'>
                <button className='btns' onClick={clickPrev}>Prev</button>
                <button className='btns' onClick={clickNext}>Next</button>
            </section>
        </div>
    )
}

export default Tracks

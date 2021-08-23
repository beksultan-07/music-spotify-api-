import {useEffect, useState} from 'react'
import fetchS from '../../components/fetch/FetchS'
import {useSelector, useDispatch} from 'react-redux'
import Loader from '../../components/loader/loader';


function PLaylist(props) {
    const [playlists, setPLaylist] = useState([]);
    const [next, setNext] = useState(null)
    const [prev, setPrev] = useState(null)
    const [loaderState, setLoaderState] = useState('active')
    
    const token = useSelector(state => state.token)
    const dispatch = useDispatch()

    function showPlaylist(param) {
        setLoaderState('')

        let lol = param.playlists.items.map((el, index) => {
            let imgS = '#'
            if (el.images.length > 0 ) imgS = el.images[0].url
            
            return (
                <div key={index} className="playlist__item" onClick={() => clickPLaylist(el)}>
                    <img src={imgS} className='playlist__img' alt=""/>
                    <h1 className="playlist__name">{el.name}</h1>
                </div>
            )
        })
        setPLaylist(lol)

        setNext(param.playlists.next)
        setPrev(param.playlists.previous)

    }


    useEffect(() => {

        const namePl = props.history.location.search.slice(1)

        fetchS(`https://api.spotify.com/v1/browse/categories/${namePl}/playlists?limit=${20}`, token)
            .then(el => {
                showPlaylist(el)
            })
    }, [])

    function clickPLaylist(params) {
        dispatch({type: 'getInputVal', inpVal: params.tracks.href})
        dispatch({type: 'ChangeTypeTrack', CTOT: 'fromPLaylist'})
        
        props.history.push({
            pathname: '/tracks'
        });
    }

    function clickPrev() {
        setLoaderState('active')
        if(prev !== '' && prev != null){
            fetchS(prev, token)
                .then(element => {
                    showPlaylist(element)
                })
        }
    }

    function clickNext() {
        setLoaderState('active')
        if(next !== '' && next != null){
            fetchS(next, token)
                .then(element => {
                    showPlaylist(element)
                })
        }
    }

    return (
        <div>
            <Loader active={loaderState}/>
            <section className='playlists'>
                {playlists}
            </section>


            <section className='controlls'>
                <button className='btns' onClick={clickPrev}>Prev</button>
                <button className='btns' onClick={clickNext}>Next</button>
            </section>
        </div>
    )
}

export default PLaylist

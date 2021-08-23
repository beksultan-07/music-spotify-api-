import {useState, useEffect} from 'react'
import fetchS from '../../components/fetch/FetchS'
import './Genre.css'
import {useSelector, useDispatch} from 'react-redux'
import Loader from '../../components/loader/loader'


function Genre(props) {
    const [playlists, setPlaylists] = useState([])
    const [next, setNext] = useState(null)
    const [prev, setPrev] = useState(null)
    const [loaderState, setLoaderState] = useState('active')

    const state = useSelector(state => state)
    const dispatch = useDispatch()

    function showGenre(element) {
        setLoaderState('')
        
        let items = element.categories.items.map((el, index) => {
            return <div key={index} className="playlist__item" onClick={() => ClickGenre(el.id)}>
                <img className='playlist__img' src={el.icons[0].url} alt=""/>
                <h1 className="playlist__name">{el.name}</h1>
            </div>
        })
        setPlaylists(items)
        setNext(element.categories.next)
        setPrev(element.categories.previous)
    }

    useEffect(() => {
        if(state.token === null){
            fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded',
                    'Authorization' : 'Basic ' + btoa(state.userId + ':' + state.userSecret)
                },
                body: 'grant_type=client_credentials'
            })
                .then(response => {
                    return response.json()
                })
                .then(beats => {
                    dispatch({type: 'getToken', val: beats.access_token})
                    fetchS(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, beats.access_token)
                        .then(element => {
                            showGenre(element)
                        })
                })
        }else{
            fetchS(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, state.token)
                .then(element => {
                    showGenre(element)
                })
        }

    }, [])

    function ClickGenre(id) {
        props.history.push({
            pathname: '/playlist',
            search: '?' + id
          });
    }

    function clickPrev() {
        setLoaderState('active')
        if(prev !== '' && prev != null){
            fetchS(prev, state.token)
                .then(element => {
                    showGenre(element)
                })
        }
    }

    function clickNext() {
        setLoaderState('active')
        if(next !== '' && next != null){
            fetchS(next, state.token)
                .then(element => {
                    showGenre(element)
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
export default Genre;

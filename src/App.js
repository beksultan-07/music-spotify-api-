import './App.css'
import {Route, Switch} from 'react-router-dom'

import Genre from './container/genre/Genre'
import Playlist from './container/playlists/PLaylist'
import Tracks from './container/tracks/tracks'
import Header from './container/header/Header'
import Sign from './container/sign/sign'


function App() {
    return (
        <div className='wrap'>
            <div className='container'>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Genre}/>
                    <Route path='/sign' component={Sign}/>
                    <Route path='/playlist' component={Playlist}/>
                    <Route path='/tracks' component={Tracks}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;

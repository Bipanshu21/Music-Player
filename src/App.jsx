import AudioFiles from "./components/AudioFiles";
import { audio } from "./audioData";
import './App.css';
import { useState } from "react";
import Player from './components/Player';

const App = () =>{
 
    const [songs, setSongs] = useState(audio);
    
    return(
     <>
        <div className="player-main">
              <Player/>
        </div>

        <div className="app-main">
               {songs.map((song) =>{
                   return(
                        <AudioFiles song={song}></AudioFiles>
                   )
               })}
        </div>

        </>
    )
}

export default App;
import AudioFiles from "./components/AudioFiles";
import { audio } from "./audioData";
import './App.css';
import { useState } from "react";

const App = () =>{
 
    const [songs, setSongs] = useState(audio);
    
    return(
        <div className="app-main">
               {songs.map((song) =>{
                   return(
                        <AudioFiles song={song}></AudioFiles>
                   )
               })}
        </div>
    )
}

export default App;
import { BsPlay, BsPause } from "react-icons/bs";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
 
const Player = () =>{
    return(
        <div className="player-card">

           <h4 className="song-name">Song Name</h4>

           <div className="control-icons">
                <BiSkipPrevious color="white" size={50} className="icons"></BiSkipPrevious>
                <BsPlay color="#1769aa" size={50} className="icons"></BsPlay>
                <BsPause color="#1769aa" size={50} className="icons"></BsPause>
                <BiSkipNext color="white" size={50} className="icons"></BiSkipNext>
           </div>


        </div>
    )
}

export default Player;
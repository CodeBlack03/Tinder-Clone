import React,{useEffect} from "react";
import "./SwipeButtons.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CloseIcon from "@material-ui/icons/Close";
import ReplayIcon from "@material-ui/icons/Replay";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import StarRateIcon from "@material-ui/icons/StarRate";
import IconButton from "@material-ui/core/IconButton";
import axios from "./Axios"

function SwipeButtons() {
  async function swiped(){
    const req = await axios.get("/")
  }
   
    
  
   



  return (
    <div className="swipeButtons">
      <IconButton onClick={swiped} className="swipeButtons__repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={swiped} className="swipeButtons__left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={swiped} className="swipeButtons__star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={swiped} className="swipeButtons__right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={swiped} className="swipeButtons__lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;

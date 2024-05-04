import React from "react";
import "./CandidateSlider.css"; // Import your CSS file for styling
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import botimg from "../assests/botimg1.jpg";

function CandidateSlider({ candidates }) {
  return (
    <div className="candidate-slider">
      <div className="slider-container">
       
          <div  className="slide">
            <img src={botimg} alt="..." />
            <PlayCircleOutlineIcon className="video-icon" />
          </div>
        
      </div>
      <div className="slider-button">
        <KeyboardArrowLeftIcon className="prev-icon" />
        <KeyboardArrowRightIcon className="next-icon" />
      </div>
    </div>
  );
}

export default CandidateSlider;

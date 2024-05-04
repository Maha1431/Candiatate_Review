import React from "react";
import botimg from "../assests/botimg1.jpg";
import "./candidate.css";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Rating from "@mui/material/Rating";

function CandidateReview({ candidate }) {
  const getScoreColor = (percentage) => {
    return percentage > 50 ? "green" : "orange";
  };

  const getScorebarColor = (percentage) => {
    return percentage > 8 ? "green" : "orange";
  };
 
  // Calculate the average score out of 10
  const totalScore = candidate.scores.reduce((acc, curr) => acc + curr.value, 0);
  const averageScore = (totalScore / candidate.scores.length) * 0.1;

  return (
    <div className="details1">
      <h2>Candidate Details</h2>
      <Card className="card" >
        <div>
          <img src={botimg} alt="candidate" className="botimg" />
        </div>
        <div>
          <Typography variant="p">{candidate.name}</Typography>
          <br />
          <Typography variant="p">{candidate.email}</Typography>
        </div>
        <div>
          <span style={{ color: getScoreColor(candidate.overallScorePercentage) }}>
            {candidate.overallScorePercentage}%
          </span>
        </div>
        
      </Card>

     
        {candidate.scores.map((score, index) => (
          <div key={index} className="list">
            <Typography variant="p">{score.type}</Typography>
            <LinearProgress variant="determinate" value={score.value}  sx={{
                backgroundColor: getScorebarColor(score.value),
                "& .MuiLinearProgress-barColorPrimary": {
                  backgroundColor: getScorebarColor(score.value), // Set progress bar color
                },
              }}/>
            <Typography variant="p"> {Math.round(averageScore)}/10</Typography>
          </div>
        ))}

        <div>
          <h5>About</h5>
          <p>Students pursue education to acquire knowledge,<br/>
            attain qualifications that will prepare them for future careers and personal growth.</p>
        </div>
        <div>
          <h5>Experience</h5>
          <p>Students pursue education to acquire knowledge, develop skills, and attain qualifications that will prepare them for future careers and personal growth.</p>
        </div>
        <div>
          <h5>Hobbies</h5>
          <p>Students pursue education to acquire knowledge, develop skills, and attain qualifications that will prepare them for future careers and personal growth.</p>
        </div>
        <div>
          <h5>Introduction</h5>
          <p>Students pursue education to acquire knowledge, develop skills, and attain qualifications that will prepare them for future careers and personal growth.</p>
        </div>
      
    </div>
  );
}
export default CandidateReview;

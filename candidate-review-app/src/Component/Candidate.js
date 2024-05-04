import React, { useState, useEffect } from "react";
import jsonData from "../data.json";
import "./candidate.css";
import botimg from "../assests/botimg1.jpg";
import Box from '@mui/material/Box';

function Candidate({ onSelectCandidate }) {
  const [candidates, setCandidates] = useState([]);
  
  

  useEffect(() => {
    const updatedCandidates = jsonData.candidates.map((candidate) => {
      const totalScore = candidate.scores.reduce((acc, curr) => acc + curr.value, 0);
      const maxPossibleScore = candidate.scores.length * 100; // Assuming each score type has a maximum of 100
      const overallScorePercentage = (totalScore / maxPossibleScore) * 100;
      return { ...candidate, overallScorePercentage: Math.round(overallScorePercentage) }; // Adding overall score percentage with 2 decimal places
    });
    setCandidates(updatedCandidates);
  }, []);


 

  const getScoreColor = (percentage) => {
    return percentage > 50 ? "green" : "orange";
  };

  const handleCandidateClick = (candidate) => {
    onSelectCandidate(candidate);
    
  };

  return (
    <Box className="container">
      <div >
        <table className="table">
          <thead>
            <tr>
              <th>Candidates</th>
              <th>Scores</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate.id} className="tableval">
                <td className="tabledata" onClick={() => handleCandidateClick(candidate)}>
                  <img src={botimg} alt="candidate" className="botimg" />
                  <div>
                    {candidate.name} <br />
                    {candidate.email}
                  </div>
                </td>
                <td>
                  <span style={{ color: getScoreColor(candidate.overallScorePercentage) }}>
                    {candidate.overallScorePercentage}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
   
    </Box>
  );
}

export default Candidate;

import logo from './logo.svg';
import './App.css';
import Review from './Component/Review';
import Candidate from './Component/Candidate';
import React,{useState} from 'react';
import AudioButton from './Component/VideoFile';
import CandidateSlider from './Component/VideoFile';
import HomePage from './Component/home';
import CandidateReview from './Component/CandidateReview';

function App() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const handleCandidateSelect = (candidate) => {
    setSelectedCandidate(candidate);
  };
  return (
    <div className='App'>
      <div>
        <HomePage  />
      </div>
      <div>
      <Review selectedCandidate={selectedCandidate} />
      <Candidate onSelectCandidate={handleCandidateSelect} />
      </div>
      <div>
        {selectedCandidate && <CandidateReview candidate={selectedCandidate} />}
      </div>
      <div className='video'>
      <CandidateSlider />
      </div>
    
    </div>
  );
}

export default App;

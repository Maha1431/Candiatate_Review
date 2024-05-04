import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CreateIcon from "@mui/icons-material/Create";
import { CardActions } from "@mui/material";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CubeIcon from '../assests/cube.png';
import Candidate from "./Candidate";
import CandidateReview from "./CandidateReview";
import "./candidate.css"


function Review() {
  // Create a new Date object without any arguments
  const currentDate = new Date();

  // Get the day, month, and year from the date object
  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();

  // Define an array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the month name from the array using the month index
  const monthName = monthNames[monthIndex];

  // Format the date as "3 May 2024"
  const formattedDate = `${day} ${monthName} ${year}`;

  console.log(formattedDate); // Output: "3 May 2024"
  return (
    <div>
      <h5>Sales BDE</h5>
      <div className="bar">
      <Card sx={{ maxWidth: 505,  maxHeight: 400  }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5"> Sales BDE </Typography>
          <Typography
            style={{ color: "green", marginLeft: "330px" }}
            variant="h5"
          >
            Active
          </Typography>
          <div
            style={{
              borderRadius: "10px",
              padding: "5px",
              border: "0.5px solid #CCC",
              borderBlockStyle: "none",
            }}
          >
            <CreateIcon />
          </div>
        </div>
        <CardContent>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ marginRight: "0.5rem" }} color="text.secondary">
              Assignment Link:
            </Typography>
            <Link
              href="https://tiny.url/asknakadna"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://tiny.url/asknakadna
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Assignment hour
            </Typography>
            <Typography variant="p">3 hours</Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Assignment Ends at
            </Typography>
            <Typography variant="p">{formattedDate}</Typography>
          </div>
          <div style={{
              display: "flex",
              alignItems: "center",
             justifyContent:"space-evenly"
            }}>
                <div>
            <img src={CubeIcon} alt="Cube Icon" style={{ marginRight: "0px" }} />
            <Typography variant="button" >To REVIEW</Typography>
            </div>
            <div>
            <FileCopyIcon fontSize="small"/>
            <Typography style={{ marginRight: "0px" }} variant="button">SHORTLISTED</Typography>
            </div>
          </div>
        </CardContent>
      </Card> 
      </div>    
    </div>
  );
}
export default Review;

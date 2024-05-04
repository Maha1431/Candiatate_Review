import React from "react";
import Card from "@mui/material/Card";
import Stack from '@mui/material/Stack';
import { pink } from '@mui/material/colors';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import Box from '@mui/material/Box';
import "./home.css";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Button from '@mui/material/Button';
import box from "../assests/boxes.png"

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function HomePage() {
  return (
    <div>
      <img src={box} alt="Box Icon" /> 
      <span> Hi, AltWorld</span>
      <Card sx={{minWidth: 155, padding:4}}>
        <Stack direction="row" spacing={7} >
          <HomeIcon className="icon"/> Dashboard
        </Stack>
        <Box  sx={{
          width: 300,
          height: 200,
          borderRadius: 1,
          bgcolor: "aquamarine",
          border: "1 solid #CCC",
          color:"azure",
          padding:3
          
        }}>
        <AddOutlinedIcon sx={{ color: 'grey' , backgroundColor:"white" , borderRadius:"8px", marginLeft:"5px", fontSize:"ExtraLarge", marginTop:"3px"}} />
        <div className="boxfield">
        <h6>New Assignment?</h6>
        <p>Select from pre-defined questions <br/> to have a quick turnaround</p>
        <Button className="btn" variant="outlined">Create a New Assignment</Button>
        </div>
        </Box>
      </Card>
      
    </div>
  );
}

export default HomePage;

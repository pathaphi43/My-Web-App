import React from "react";
import {fullNameEn as fullName} from "../constant/information";
import Typography from '@mui/material/Typography';

export default function Main(){
    return (
        <div className="App">
          <header className="App-header">
          <Typography variant="h3" color={"yellow"} gutterBottom>
          HELLO, IM
         </Typography>
         <Typography variant="h1" fontWeight={900} gutterBottom>{fullName}</Typography>
         <Typography variant="body2"  gutterBottom>
          I am full-stack developer
         </Typography>
          </header>
        </div>
      );
}
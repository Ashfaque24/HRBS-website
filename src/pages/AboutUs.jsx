import React from 'react'
import { Box, Typography } from "@mui/material";
import Navbar from "../sections/landing/Navbar";

const AboutUs =() => {
    return (
        <Box>
          <Navbar />
          <Box sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
              About us
            </Typography>
            <Typography variant="body1">
              This is your about us page. 
            </Typography>
          </Box>
        </Box>
      );
    };
    

export default AboutUs
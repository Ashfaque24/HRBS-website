import React from 'react'
import { Box, Typography } from "@mui/material";


const AboutUs =() => {
    return (
        <Box>
          
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
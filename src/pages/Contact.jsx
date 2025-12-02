// src/pages/Contact.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "../sections/landing/Navbar";

const Contact = () => {
  return (
    <Box>
      <Navbar />
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
          Contact Us
        </Typography>
        <Typography variant="body1">
          This is your contact page. Add form or contact details here.
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;

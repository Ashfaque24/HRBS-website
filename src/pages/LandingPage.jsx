// src/pages/LandingPage.jsx
import React from "react";
import { Box } from "@mui/material";
import Headersection from "../components/Landing/Headersection";
import CoursesSection from "../components/Landing/CoursesSection";
import ConsultancySection from "../components/Landing/ConsultancySection";

const LandingPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      bgcolor="#fff"
      sx={{ scrollBehavior: "smooth" }}
    >
      <Headersection />

      <Box id="courses">
        <CoursesSection />
      </Box>

      <Box id="consultancy">
        <ConsultancySection />
      </Box>
    </Box>
  );
};

export default LandingPage;

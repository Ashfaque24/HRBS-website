// src/pages/LandingPage.jsx
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import Headersection from "../components/Landing/Headersection";
import CoursesSection from "../components/Landing/CoursesSection";
import ConsultancySection from "../components/Landing/ConsultancySection";

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1); // "#courses" -> "courses"
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

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






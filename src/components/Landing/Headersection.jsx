// src/components/Landing/Headersection.jsx
import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
// Import useNavigate/useLocation
import { useNavigate, useLocation } from "react-router-dom";
import HeroBg from "../../assets/office logo 2.jpg";

// Remove props: { onCoursesClick, onConsultancyClick }
function Headersection() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToSection = (hash) => {
    // If we are already on the home page ('/'), we just change the hash,
    // which triggers the useEffect in LandingPage to scroll.
    if (location.pathname === "/") {
      navigate(hash);
    } else {
      // This is unlikely since Headersection is on LandingPage, but good practice.
      navigate(`/${hash}`);
    }
  };

  return (
    <Box
      sx={{
        // ... (Your existing styling)
        position: "relative",
        minHeight: { xs: "90vh", sm: "100vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        px: { xs: 2, sm: 3, md: 6 },
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,123,255,0.65), rgba(0,180,135,0.65))",
        },
      }}
    >
      <Box sx={{ position: "relative", maxWidth: 850 }}>
        {/* Heading and Subtitle */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            mb: 2,
            lineHeight: 1.2,
            fontSize: { xs: 26, sm: 32, md: 42, lg: 48 },
          }}
        >
          Turn Your People Strategy
          <br />
          into a Powerhouse.
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            mb: 4,
            fontSize: { xs: 14, sm: 16, md: 18 },
            px: { xs: 1, sm: 2 },
          }}
        >
          We prepare organizations and professionals for the future of work.
          Through continuous learning backed by our 'People Powered Flywheel',
          we drive real business growth.
        </Typography>

        {/* Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              // ... (Your existing styling)
              px: { xs: 4, sm: 3 },
              py: 1.4,
              fontSize: { xs: 14, sm: 16 },
              width: { xs: "100%", sm: "auto" },
              textTransform: "none",
            }}
            // Use the new handler to scroll
            onClick={() => handleScrollToSection("#courses")}
          >
            Explore Our Courses
          </Button>

          <Button
            variant="contained"
            sx={{
              // ... (Your existing styling)
              px: { xs: 4, sm: 3 },
              py: 1.4,
              fontSize: { xs: 14, sm: 16 },
              width: { xs: "100%", sm: "auto" },
              bgcolor: "#18a851",
              textTransform: "none",
              "&:hover": { bgcolor: "#149246" },
            }}
            // Use the new handler to scroll
            onClick={() => handleScrollToSection("#consultancy")}
          >
            View Our Services
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Headersection;

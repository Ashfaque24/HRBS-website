// src/components/sections/landing/Headersection.jsx
import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import HeroBg from "../../assets/office logo 2.jpg"; 

function Headersection() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,123,255,0.7), rgba(0,180,135,0.7))",
        },
      }}
    >
      <Box sx={{ position: "relative", maxWidth: 800, px: 2 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: 32, sm: 40, md: 48 },
          }}
        >
          Empowering the Next
          <br />
          Generation of HR Leaders
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            mb: 4,
            fontSize: { xs: 14, sm: 16 },
          }}
        >
          Transform your HR career with our comprehensive courses and expert
          consultancy services. Join professionals who have advanced their
          careers with HR B School.
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          flexWrap="wrap"
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ px: 3, py: 1.2, textTransform: "none" }}
          >
            Explore Our Courses
          </Button>
          <Button
            variant="contained"
            sx={{
              px: 3,
              py: 1.2,
              textTransform: "none",
              bgcolor: "#18a851",
              "&:hover": { bgcolor: "#149246" },
            }}
          >
            View Consultancy Services
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Headersection;

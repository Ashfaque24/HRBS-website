import React from "react";
import { Box, Typography } from "@mui/material";
import HeroBg from "../assets/office logo 2.jpg";
import aboutusimg1 from "../assets/About  us/about us image 1.jpg";
import founder from "../assets/About  us/CEO1.jpg";


const AboutUs = () => {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      {/* --- 1. Top Banner --- */}
      <Box
        sx={{
          height: { xs: 200, md: 300 },
          position: "relative",
          backgroundImage: `url(${HeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0, 0, 0, 0.4)",
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            color: "#fff",
            zIndex: 1,
          }}
        >
          Nice To Meet You
        </Typography>
      </Box>

      {/* --- 2. What is HRBS? Section --- */}
      <Box
        sx={{
          maxWidth: "1180px",
          mx: "auto",
          px: { xs: 2, md: 4 },
          py: { xs: 6, md: 10 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* Left: Text block */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 3,
              color: "#111827",
            }}
          >
            What is HRBS?
          </Typography>

          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#1f2933" }}
          >
            HRBS (HR B-School)
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "#4b5563", lineHeight: 1.7, mb: 1.5 }}
          >
            HRBS is a future-focused HR consultancy and learning ecosystem
            designed to support employees, employers, and aspirants at every
            stage of their development. We create adaptive learning pathways
            that strengthen capability, drive mastery, and empower individuals
            to thrive in a rapidly evolving world of work.
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: "#4b5563", lineHeight: 1.7 }}
          >
            With a strong emphasis on agility, insight, and real-world impact,
            HRBS shapes High Agents who elevate the value of HR across
            organizations. Our services from quick compliance health checks to
            detailed reports, certification programs, and complete
            outsourcing help businesses stay compliant, confident, and prepared
            for sustained growth.
          </Typography>
        </Box>

        {/* Right: Image + stat card */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
          }}
        >
          <Box
            sx={{
              position: "relative",
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: "0 24px 60px rgba(15, 23, 42, 0.18)",
              bgcolor: "#fff",
            }}
          >
            <Box
              component="img"
              src={aboutusimg1}
              alt="HRBS team collaboration"
              sx={{
                display: "block",
                width: { xs: 280, sm: 360, md: 420 },
                height: "auto",
              }}
            />
          </Box>
        </Box>
      </Box>

            {/* --- 3. Mission & Vision Section --- */}
            <Box
        sx={{
          maxWidth: "1180px",
          mx: "auto",
          px: { xs: 2, md: 4 },
          pb: { xs: 8, md: 12 },
          marginTop: "50px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 4,
            color: "#111827",
          }}
        >
          Mission & Vision
        </Typography>

        {/* Mission card */}
        <Box
          sx={{
            bgcolor: "#ffffff",
            borderRadius: 4,
            boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
            px: { xs: 3, md: 6 },
            py: { xs: 4, md: 5 },
            mb: { xs: 4, md: 5 },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, mb: 1.5, color: "#111827" }}
          >
            Our Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#4b5563", lineHeight: 1.7, maxWidth: 900, mx: "auto" }}
          >
            To provide a relentless ecosystem of adaptive learning that meets you
            where you are whether employee, employer, or aspirant. We evolve the
            methods of mastery so you can evolve the future of work.
          </Typography>
        </Box>

        {/* Vision card */}
        <Box
          sx={{
            bgcolor: "#ffffff",
            borderRadius: 4,
            boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
            px: { xs: 3, md: 6 },
            py: { xs: 4, md: 5 },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, mb: 1.5, color: "#111827" }}
          >
            Our Vision
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#4b5563", lineHeight: 1.7, maxWidth: 900, mx: "auto" }}
          >
            From undervalued to undeniable we forge High Agents, uniting
            mastery, agility, and deep human insight to position HR as the
            driving force of business growth and human potential.
          </Typography>
        </Box>
      </Box>

            {/* --- 4. Founder Message Section --- */}
<Box
  sx={{
    maxWidth: "1180px",
    mx: "auto",
    px: { xs: 2, md: 4 },
    pb: { xs: 10, md: 12 },
    mt: "50px",
  }}
>
  {/* Section title on top, centered */}
  <Typography
    variant="h4"
    sx={{
      fontWeight: 700,
      textAlign: "center",
      mb: 4,
      color: "#111827",
    }}
  >
    Founder
  </Typography>

  {/* Card */}
  <Box
    sx={{
      bgcolor: "#ffffff",
      borderRadius: 4,
      boxShadow: "0 22px 55px rgba(15, 23, 42, 0.12)",
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: { xs: "flex-start", md: "center" },
      gap: { xs: 4, md: 6 },
    }}
  >
    <Box
      component="img"
      src={founder}
      alt="Founder - HRBS"
      sx={{
        width: { xs: "100%", md: 320 },
        maxHeight: { md: 320 },
        objectFit: "cover",
        borderRadius: { xs: "12px 12px 0 0", md: "12px 0 0 12px" },
        display: "block",
      }}
    />

    {/* Right: Text content */}
    <Box sx={{ flex: 1, px: { xs: 3, md: 4 }, py: { xs: 3, md: 4 } }}>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: 600, color: "#111827", mb: 0.5 }}
      >
        Shammas Ch
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#6b7280", mb: 3 }}
      >
        Founder - HRBS &nbsp; | &nbsp; Chief People Officer - Interval Learning
      </Typography>

      <Typography
        variant="body1"
        sx={{ color: "#4b5563", lineHeight: 1.7 }}
      >
        “Growth affirms our purpose. At HRBS, every step forward by learners,
        businesses, and HR leaders drives our evolution. We don’t follow change;
        we shape it.”
      </Typography>
    </Box>
  </Box>
</Box>



    </Box>
  );
};

export default AboutUs;

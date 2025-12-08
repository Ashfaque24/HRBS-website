import React from "react";
import { Box, Typography } from "@mui/material";
import aboutusimg1 from "../assets/About  us/about us image 1.jpg";
import founder from "../assets/About  us/CEO1.jpg";
import aboutusimage2 from "../assets/About  us/aboutus3.png";
import founder2 from "../assets/About  us/CEO2.jpg";

const AboutUs = () => {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", px: { xs: 1, md: 0 } }}>
      {/* Top Banner */}
      <Box
        sx={{
          height: { xs: 180, md: 300 },
          position: "relative",
          backgroundImage: `url(${aboutusimage2})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
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
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            color: "#fff",
            zIndex: 1,
            fontSize: { xs: "1.5rem", md: "2.5rem" },
          }}
        >
          Here is More About us
        </Typography>
      </Box>

      {/* What is HRBS? */}
      <Box
        sx={{
          maxWidth: "1180px",
          mx: "auto",
          px: { xs: 2, md: 4 },
          py: { xs: 4, md: 10 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          gap: { xs: 3, md: 6 },
        }}
      >
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "#111827",
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            What is <span style={{ color: "#1e9c73" }}>H</span>
            <span style={{ color: "#1e7a5b" }}>R</span>
            <span style={{ color: "#3b82f6" }}>B</span>
            <span style={{ color: "#1e7a5b" }}>S</span>?
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#1f2933" }}
          >
            HRBS (Human Resources Business School)
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#4b5563", lineHeight: 1.7, mb: 1.5 }}
          >
            HRBS is a future-focused HR consultancy and learning ecosystem designed to support employees, employers, and aspirants at every stage of their development. We create adaptive learning pathways that strengthen capability, drive mastery, and empower individuals to thrive in a rapidly evolving world of work.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#4b5563", lineHeight: 1.7 }}
          >
            With a strong emphasis on agility, insight, and real-world impact, HRBS shapes High Agents who elevate the value of HR across organizations. Our services from quick compliance health checks to detailed reports, certification programs, and complete outsourcing help businesses stay compliant, confident, and prepared for sustained growth.
          </Typography>
        </Box>
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
              maxWidth: { xs: "100%", md: "420px" },
            }}
          >
            <Box
              component="img"
              src={aboutusimg1}
              alt="HRBS team collaboration"
              sx={{
                display: "block",
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Mission & Vision */}
      <Box
        sx={{
          maxWidth: "1180px",
          mx: "auto",
          px: { xs: 2, md: 4 },
          pb: { xs: 6, md: 12 },
          mt: "50px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 4,
            color: "#111827",
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          Mission & Vision
        </Typography>
        <Box
          sx={{
            bgcolor: "rgba(126, 152, 238, 0.47)",
            borderRadius: 4,
            boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
            px: { xs: 2, md: 6 },
            py: { xs: 3, md: 5 },
            mb: { xs: 3, md: 5 },
            textAlign: "center",
            transition: "transform 0.25s ease, box-shadow 0.25s ease",
            "&:hover": {
              transform: "translateY(-6px) scale(1.02)",
              boxShadow: "0 24px 60px rgba(15, 23, 42, 0.16)",
            },
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
            sx={{
              color: "#4b5563",
              lineHeight: 1.7,
              maxWidth: 900,
              mx: "auto",
            }}
          >
            To provide a relentless ecosystem of adaptive learning that meets you where you are whether employee, employer, or aspirant. We evolve the methods of mastery so you can evolve the future of work.
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: "rgba(97, 224, 129, 0.57)",
            borderRadius: 4,
            boxShadow: "0 18px 45px rgba(15, 23, 42, 0.08)",
            px: { xs: 2, md: 6 },
            py: { xs: 3, md: 5 },
            textAlign: "center",
            transition: "transform 0.25s ease, box-shadow 0.25s ease",
            "&:hover": {
              transform: "translateY(-6px) scale(1.02)",
              boxShadow: "0 24px 60px rgba(15, 23, 42, 0.16)",
            },
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
            sx={{
              color: "#4b5563",
              lineHeight: 1.7,
              maxWidth: 900,
              mx: "auto",
            }}
          >
            From undervalued to undeniable we forge High Agents, uniting mastery, agility, and deep human insight to position HR as the driving force of business growth and human potential.
          </Typography>
        </Box>
      </Box>

      {/* Founders */}
      <Box
        sx={{
          maxWidth: "1180px",
          mx: "auto",
          px: { xs: 2, md: 4 },
          pb: { xs: 8, md: 12 },
          mt: "50px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 4,
            color: "#111827",
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          Our Founders
        </Typography>
        {/* Founder 1 */}
        <Box
          sx={{
            bgcolor: "#ffffff",
            borderRadius: 4,
            boxShadow: "0 22px 55px rgba(15, 23, 42, 0.12)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "center" },
            gap: { xs: 2, md: 6 },
            borderLeft: "4px solid #00b894",
            transition: "transform 0.25s ease, box-shadow 0.25s ease",
            "&:hover": {
              transform: "translateY(-6px) scale(1.02)",
              boxShadow: "0 24px 60px rgba(15, 23, 42, 0.16)",
            },
            mb: 4,
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
          <Box sx={{ flex: 1, px: { xs: 2, md: 4 }, py: { xs: 2, md: 4 }, textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#111827", mb: 0.5 }}>
              Shammas Ch
            </Typography>
            <Typography variant="body2" sx={{ color: "#6b7280", mb: 2 }}>
              Founder - HRBS | Chief People Officer - Interval Learning
            </Typography>
            <Typography variant="body1" sx={{ color: "#4b5563", lineHeight: 1.7 }}>
              “Growth affirms our purpose. At HRBS, every step forward by learners, businesses, and HR leaders drives our evolution. We don’t follow change; we shape it.”
            </Typography>
          </Box>
        </Box>
        {/* Founder 2 */}
        <Box
          sx={{
            bgcolor: "#ffffff",
            borderRadius: 4,
            boxShadow: "0 22px 55px rgba(15, 23, 42, 0.12)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "center" },
            gap: { xs: 2, md: 6 },
            borderLeft: "4px solid #00b894",
            transition: "transform 0.25s ease, box-shadow 0.25s ease",
            "&:hover": {
              transform: "translateY(-6px) scale(1.02)",
              boxShadow: "0 24px 60px rgba(15, 23, 42, 0.16)",
            },
            mb: 4,
          }}
        >
          <Box
            component="img"
            src={founder2}
            alt="Co-Founder - HRBS"
            sx={{
              width: { xs: "100%", md: 320 },
              maxHeight: { md: 320 },
              objectFit: "cover",
              borderRadius: { xs: "12px 12px 0 0", md: "12px 0 0 12px" },
              display: "block",
            }}
          />
          <Box sx={{ flex: 1, px: { xs: 2, md: 4 }, py: { xs: 2, md: 4 }, textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#111827", mb: 0.5 }}>
              Faisal K
            </Typography>
            <Typography variant="body2" sx={{ color: "#6b7280", mb: 2 }}>
              Co-Founder - HRBS | Ex- Prompters, Ex-Fezco
            </Typography>
            <Typography variant="body1" sx={{ color: "#4b5563", lineHeight: 1.7 }}>
              “Join us to transform the People of workplace from undervalued to undeniable.”
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;

// src/sections/common/Footer.jsx
import React from "react";
import { Box, Typography, IconButton, Link as MuiLink } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "../../assets/Short Logo.png";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#111",
        color: "#fff",
        px: { xs: 3, md: 8 },
        py: { xs: 4, md: 4 },
        // mt: 6,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "center", md: "center" },
        gap: { xs: 4, md: 3 },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      {/* Left section */}
      <Box
        maxWidth={420}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        <Box
          component="img"
          src={Logo}
          alt="HRBS Logo"
          sx={{
            height: { xs: 60, md: 80 },
            width: { xs: 120, md: 150 },
            mb: 2,
          }}
        />

        <Typography
          variant="body2"
          sx={{
            mb: 2,
            fontSize: { xs: 14, md: 16 },
            lineHeight: 1.6,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Empowering HR professionals with world-class education and consultancy
          services to drive organizational excellence.
        </Typography>
      </Box>

      {/* Right section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          width: { xs: "100%", md: "auto" },
          alignItems: { xs: "center", md: "flex-end" },
          textAlign: { xs: "center", md: "right" },
        }}
      >
        <Typography variant="body2" sx={{ fontSize: { xs: 14, md: 16 } }}>
        Malappuram, Kerala, India 673647
        </Typography>

        <Typography variant="body2" sx={{ fontSize: { xs: 14, md: 16 } }}>
        +918593889155
        </Typography>

        <MuiLink
          href="mailto:connect@hrbschool.in"
          underline="none"
          color="inherit"
          sx={{
            fontWeight: 700,
            fontSize: { xs: 18, md: 20 },
            mt: { xs: 1, md: 0 },
          }}
        >
          connect@hrbschool.in
        </MuiLink>
      </Box>
    </Box>
  );
};

export default Footer;

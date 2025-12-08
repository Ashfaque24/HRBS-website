import React from "react";
import { Box, Typography, IconButton, Link as MuiLink } from "@mui/material";
import Logo from "../../assets/Short Logo.png";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#111",
        color: "#fff",
        px: { xs: 2, md: 4 },
        py: { xs: 2, md: 2 }, // Reduced vertical padding
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "center", md: "center" },
        gap: { xs: 2, md: 2 }, // Reduced gap
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
            height: { xs: 40, md: 60 }, // Reduced image height
            width: { xs: 80, md: 120 },
            mb: 1, // Reduced margin
          }}
        />

        <Typography
          variant="body2"
          sx={{
            mb: 1, // Reduced margin
            fontSize: { xs: 12, md: 14 }, // Reduced font size
            lineHeight: 1.5,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Join us to transform the People of workplace from undervalued to undeniable.
        </Typography>
      </Box>

      {/* Right section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          width: { xs: "100%", md: "auto" },
          alignItems: { xs: "center", md: "flex-end" },
          textAlign: { xs: "center", md: "right" },
        }}
      >
        <Typography variant="body2" sx={{ fontSize: { xs: 12, md: 14 } }}>
          Malappuram, Kerala, India 673647
        </Typography>

        <Typography variant="body2" sx={{ fontSize: { xs: 12, md: 14 } }}>
          +918593889155
        </Typography>

        <MuiLink
          href="mailto:connect@hrbschool.in"
          underline="none"
          color="inherit"
          sx={{
            fontWeight: 700,
            fontSize: { xs: 14, md: 16 }, // Reduced font size
            mt: { xs: 0.5, md: 0 },
          }}
        >
          connect@hrbschool.in
        </MuiLink>
      </Box>
    </Box>
  );
};

export default Footer;

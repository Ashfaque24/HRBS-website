// src/layouts/MainLayout.jsx
import React from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import Navbar from "../sections/landing/Navbar";
import Footer from "../sections/landing/Footer";

const MainLayout = ({ children }) => {
  const location = useLocation();

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navbarProps =
    location.pathname === "/"
      ? {
          onHomeClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
          onCoursesClick: () => scrollToId("courses"),
          onConsultancyClick: () => scrollToId("consultancy"),
        }
      : {};

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#fff",
      }}
    >
      <Navbar {...navbarProps} />

      <Box component="main" sx={{ flex: 1 }}>
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default MainLayout;

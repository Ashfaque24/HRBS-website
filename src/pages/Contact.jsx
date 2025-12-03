// src/pages/Contact.jsx
import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
// Import Icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import HeroBg from "../assets/office logo 2.jpg";

// Define your social media links and contact info here for easy management
const CONTACT_INFO = {
  fullAddress: "Malappuram, Kerala, India 673647",
  
  email: "connect@hrbschool.in",
  phone: "+918593889155",
  whatsapp: "https://wa.me/918593889155",
  instagram: "https://www.instagram.com/hrbs.by.shammasch/",
  youtube: "https://www.youtube.com/@hrbs.by.shammasch",
  linkedin: "https://www.linkedin.com/in/shammas-ch/",
};

const Contact = () => {
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
          "&::before": { // Dark overlay for better text contrast
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'rgba(0, 0, 0, 0.4)',
          }
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, textAlign: "center", color: "#fff", zIndex: 1 }}
        >
          Contact Us
        </Typography>
      </Box>

      {/* --- 2. Main Content Container (Single Column) --- */}
      <Box
        sx={{
          maxWidth: 1100, // Reduced max width to keep focus on the single card
          mx: "auto",
          px: { xs: 2, md: 4 },
          py: { xs: 6, md: 10 },
          display: "flex",
          justifyContent: "center", // Center the card horizontally
        }}
      >
        {/* --- Contact Information Card (Now Centered and taking full width up to 600px) --- */}
        <Box
          sx={{
            width: "100%",
            maxWidth: 600, // Set a max width for the card to prevent it from stretching too wide
            bgcolor: "#fff",
            borderRadius: 3,
            boxShadow: "0 18px 40px rgba(15,23,42,0.12)",
            p: { xs: 3, md: 5 },
          }}
        >
          <Typography variant="h5" color="primary" sx={{ fontWeight: 700, mb: 3 }}>
            Reach Out to Our Team
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
            Have questions about our courses or consultancy? Connect directly with us using the details below.
          </Typography>

          {/* Address */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3, gap: 2 }}>
            <LocationOnIcon color="primary" sx={{ mt: 0.5 }} />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Address</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.fullAddress)}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {CONTACT_INFO.fullAddress}
                </a>
              </Typography>
            </Box>
          </Box>

          {/* Email */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3, gap: 2 }}>
            <EmailIcon color="primary" sx={{ mt: 0.5 }} />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Email</Typography>
              <Typography variant="body2">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {CONTACT_INFO.email}
                </a>
              </Typography>
            </Box>
          </Box>

          {/* Phone */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4, gap: 2 }}>
            <PhoneIcon color="primary" sx={{ mt: 0.5 }} />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Phone</Typography>
              <Typography variant="body2">
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {CONTACT_INFO.phone}
                </a>
              </Typography>
            </Box>
          </Box>


          {/* --- Social Icons --- */}
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, mt: 4 }}>
            Connect With Us
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5 }}>
            <IconButton component="a" href={CONTACT_INFO.whatsapp} target="_blank" size="medium" sx={{ color: '#25D366' }}>
              <WhatsAppIcon />
            </IconButton>
            <IconButton component="a" href={CONTACT_INFO.instagram} target="_blank" size="medium" color="error">
              <InstagramIcon />
            </IconButton>
            <IconButton component="a" href={CONTACT_INFO.linkedin} target="_blank" size="medium" color="primary">
              <LinkedInIcon />
            </IconButton>
            <IconButton component="a" href={CONTACT_INFO.youtube} target="_blank" size="medium" sx={{ color: '#FF0000' }}>
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
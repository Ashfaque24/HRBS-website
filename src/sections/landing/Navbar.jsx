import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/Short Logo.png";

const Navbar = ({ onHomeClick, onCoursesClick, onConsultancyClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const goHomeAndScroll = (hash) => {
    handleCloseNavMenu();

    const scrollAction = () => {
      if (location.pathname === "/") {
        if (hash === "#courses") onCoursesClick?.();
        else if (hash === "#consultancy") onConsultancyClick?.();
        else onHomeClick?.();
      } else {
        navigate(`/${hash}`);
      }
    };

    // Delay the scroll action only when the menu is open (mobile view)
    if (anchorElNav) {
      setTimeout(scrollAction, 100);
    } else {
      // Execute immediately on desktop
      scrollAction();
    }
  };

  const handleNavigation = (path) => {
    handleCloseNavMenu();
    if (anchorElNav) {
      setTimeout(() => navigate(path), 50);
    } else {
      navigate(path);
    }
  };
  
  // Define the external CTA link action
  const handleCheckHealthScore = () => {
    handleCloseNavMenu();
    // Directly opening the link in a new tab
    window.open(import.meta.env.VITE_HRBS_WEBSITE_URL, "_blank", "noopener noreferrer");
  };

  const navItems = [
    { label: "Home", onClick: () => goHomeAndScroll("") },
    { label: "Courses", onClick: () => goHomeAndScroll("#courses") },
    { label: "Our Services", onClick: () => goHomeAndScroll("#consultancy") },
    { label: "About Us", onClick: () => handleNavigation("/aboutus") },
    { label: "Contact", onClick: () => handleNavigation("/contact") },
  ];

  // Separate the CTA item for easy management
  const ctaItem = { 
    label: "Check Your Health Score", 
    onClick: handleCheckHealthScore 
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={1}
      sx={{ borderRadius: 0, bgcolor: "#ffffff" }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 1, md: 2 } }}>
        
        {/* 1. Logo Section (Left Side) */}
        <Box 
          display="flex" 
          alignItems="center"
          flexShrink={0} 
          sx={{ flexGrow: { xs: 0, md: 1 }, justifyContent: "flex-start" }}
        >
          <Box
            component="img"
            src={Logo}
            alt="HRBS Logo"
            sx={{ height: { xs: 48, sm: 52 }, width: "auto" }} 
          />
        </Box>

        {/* 2. Desktop Navigation (Center) */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center", 
            flexGrow: { xs: 0, md: 1 },
            gap: { xs: 2, sm: 4 },
            "& .MuiButton-root": {
              fontSize: { xs: 14, sm: 16 },
              textTransform: "none",
              px: 2.5,
              py: 1,
              minWidth: "auto",
              color: "text.primary",
            },
          }}
        >
          {navItems.map((item) => (
            <Button key={item.label} color="inherit" onClick={item.onClick}>
              {item.label}
            </Button>
          ))}
        </Box>

        {/* 3. Mobile Menu & Health Score Button (Right Side) */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 1,
            minWidth: 0, 
            flexGrow: { xs: 1, md: 1 }, 
          }}
        >
          {/* Mobile Menu Icon (Only visible on mobile) */}
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          
          {/* Mobile Menu Component */}
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {/* Standard Nav Items */}
            {navItems.map((item) => (
              <MenuItem key={item.label} onClick={item.onClick}>
                <Button
                  sx={{
                    width: "100%",
                    justifyContent: "flex-start",
                    textTransform: "none",
                    fontSize: 16, 
                  }}
                >
                  {item.label}
                </Button>
              </MenuItem>
            ))}
            
            {/* 🚀 Mobile CTA Menu Item (The New Addition) */}
            <MenuItem 
              key={ctaItem.label} 
              onClick={ctaItem.onClick}
              // Apply distinct styles to the MenuItem wrapper
              sx={{ 
                mt: 1, // Add some top margin to separate it from the links
                mx: 1, // Horizontal margin
                bgcolor: 'primary.main', // Use the primary color as background
                borderRadius: 1, // Rounded corners
                '&:hover': {
                  bgcolor: 'primary.dark', // Darken on hover
                },
                py: 0, // Remove default vertical padding from MenuItem
              }}
            >
              <Button
                // Use a Button inside for proper text alignment and click effect
                sx={{
                  width: "100%",
                  justifyContent: "center", // Center the text
                  textTransform: "none",
                  fontSize: 16,
                  color: "#ffffff", // White text color for contrast
                  fontWeight: 'bold', // Make the text bold
                  py: 1, // Restore vertical padding on the button itself
                  '&:hover': {
                    bgcolor: 'transparent', // Prevent double hover effect from MenuItem
                  },
                }}
              >
                {ctaItem.label}
              </Button>
            </MenuItem>

          </Menu>

          {/* Health Score Button (CTA) - Desktop & Mobile Header */}
          <Button
            component="a"
            href={import.meta.env.VITE_HRBS_WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            color="primary"
            flexShrink={0} 
            sx={{
              fontSize: { xs: 12, sm: 14 },
              px: { xs: 1, sm: 2 },
              py: { xs: 0.5, sm: 1 },
              textTransform: "none",
              whiteSpace: "nowrap", 
              // 💡 REFINEMENT: Hide this button on small screens (xs) where the mobile menu is open, 
              // as the button is now inside the menu.
              display: { xs: 'none', sm: 'inline-flex', md: 'inline-flex' }
            }}
          >
            {ctaItem.label}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
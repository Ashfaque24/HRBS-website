// // src/sections/landing/Navbar.jsx
// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Box,
//   Button,
//   IconButton, // Import IconButton
//   Menu, // Import Menu
//   MenuItem, // Import MenuItem
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu"; // Import MenuIcon (Hamburger)
// import { useNavigate, useLocation } from "react-router-dom";
// import Logo from "../../assets/Short Logo.png";

// const Navbar = ({ onHomeClick, onCoursesClick, onConsultancyClick }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // State for the mobile menu anchor element
//   const [anchorElNav, setAnchorElNav] = useState(null);

//   // Handlers for opening and closing the mobile menu
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const goHomeAndScroll = (hash) => {
//     // Close menu before navigating/scrolling on mobile
//     handleCloseNavMenu(); 

//     if (location.pathname === "/") {
//       // already on landing – just scroll
//       if (hash === "#courses") onCoursesClick?.();
//       else if (hash === "#consultancy") onConsultancyClick?.();
//       else onHomeClick?.();
//     } else {
//       // go to landing with hash, LandingPage will handle scroll
//       navigate(`/${hash}`);
//     }
//   };

//   const handleNavigation = (path) => {
//     // Close menu before navigating
//     handleCloseNavMenu(); 
//     navigate(path);
//   };

//   // Define the navigation items for reuse
//   const navItems = [
//     { label: "Home", onClick: () => goHomeAndScroll("") },
//     { label: "Courses", onClick: () => goHomeAndScroll("#courses") },
//     { label: "Consultancy", onClick: () => goHomeAndScroll("#consultancy") },
//     { label: "About Us", onClick: () => handleNavigation("/aboutus") },
//     { label: "Contact", onClick: () => handleNavigation("/contact") },
//   ];

//   return (
//     <AppBar position="static" color="default" elevation={1} sx={{ borderRadius: 0 }}>
//       <Toolbar sx={{ px: { xs: 1.5, sm: 3 }, gap: 2 }}>
//         {/* --- 1. Logo Section --- */}
//         <Box display="flex" alignItems="center">
//           <Box
//             component="img"
//             src={Logo}
//             alt="HRBS Logo"
//             sx={{ height: { xs: 58, sm: 66 }, width: "auto" }}
//           />
//         </Box>

//         {/* --- 2. Mobile Menu (Hamburger) --- */}
//         <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "flex-end" }}>
//           <IconButton
//             size="large"
//             aria-label="account of current user"
//             aria-controls="menu-appbar"
//             aria-haspopup="true"
//             onClick={handleOpenNavMenu}
//             color="inherit"
//           >
//             <MenuIcon />
//           </IconButton>
//           <Menu
//             id="menu-appbar"
//             anchorEl={anchorElNav}
//             anchorOrigin={{
//               vertical: "bottom",
//               horizontal: "left",
//             }}
//             keepMounted
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "left",
//             }}
//             open={Boolean(anchorElNav)}
//             onClose={handleCloseNavMenu}
//             sx={{
//               display: { xs: "block", md: "none" },
//             }}
//           >
//             {navItems.map((item) => (
//               <MenuItem key={item.label} onClick={item.onClick}>
//                 <Button sx={{ width: "100%", justifyContent: "flex-start", textTransform: "none" }}>
//                   {item.label}
//                 </Button>
//               </MenuItem>
//             ))}
//           </Menu>
//         </Box>

//         {/* --- 3. Desktop Navigation Links --- */}
//         <Box
//           sx={{
//             flexGrow: 1,
//             display: { xs: "none", md: "flex" }, // Hide on mobile, show on desktop
//             justifyContent: "center",
//             gap: { xs: 2, sm: 4 },
//             "& .MuiButton-root": {
//               fontSize: { xs: 14, sm: 16 },
//               textTransform: "none",
//               px: 2.5,
//               py: 1,
//               minWidth: "auto",
//               color: "text.primary",
//             },
//           }}
//         >
//           {navItems.map((item) => (
//             <Button key={item.label} color="inherit" onClick={item.onClick}>
//               {item.label}
//             </Button>
//           ))}
//         </Box>

//         {/* --- 4. Get a Quote Button --- */}
 
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;




// src/sections/landing/Navbar.jsx
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

    if (location.pathname === "/") {
      if (hash === "#courses") onCoursesClick?.();
      else if (hash === "#consultancy") onConsultancyClick?.();
      else onHomeClick?.();
    } else {
      navigate(`/${hash}`);
    }
  };

  const handleNavigation = (path) => {
    handleCloseNavMenu();
    navigate(path);
  };

  const navItems = [
    { label: "Home", onClick: () => goHomeAndScroll("") },
    { label: "Courses", onClick: () => goHomeAndScroll("#courses") },
    { label: "Consultancy", onClick: () => goHomeAndScroll("#consultancy") },
    { label: "About Us", onClick: () => handleNavigation("/aboutus") },
    { label: "Contact", onClick: () => handleNavigation("/contact") },
  ];

  return (
    <AppBar position="static" color="default" elevation={1} sx={{ borderRadius: 0 }}>
      <Toolbar sx={{ px: { xs: 1.5, sm: 3 }, gap: 2 }}>
        {/* Logo Section */}
        <Box display="flex" alignItems="center">
          <Box
            component="img"
            src={Logo}
            alt="HRBS Logo"
            sx={{ height: { xs: 58, sm: 66 }, width: "auto" }}
          />
        </Box>

        {/* Mobile Menu */}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "flex-end" }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {navItems.map((item) => (
              <MenuItem key={item.label} onClick={item.onClick}>
                <Button sx={{ width: "100%", justifyContent: "flex-start", textTransform: "none" }}>
                  {item.label}
                </Button>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Desktop Navigation */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

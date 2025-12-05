// // src/sections/landing/Navbar.jsx
// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Box,
//   Button,
//   IconButton,
//   Menu,
//   MenuItem,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useNavigate, useLocation } from "react-router-dom";
// import Logo from "../../assets/Short Logo.png";

// const Navbar = ({ onHomeClick, onCoursesClick, onConsultancyClick }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [anchorElNav, setAnchorElNav] = useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const goHomeAndScroll = (hash) => {
//     handleCloseNavMenu();

//     if (location.pathname === "/") {
//       if (hash === "#courses") onCoursesClick?.();
//       else if (hash === "#consultancy") onConsultancyClick?.();
//       else onHomeClick?.();
//     } else {
//       navigate(`/${hash}`);
//     }
//   };

//   const handleNavigation = (path) => {
//     handleCloseNavMenu();
//     navigate(path);
//   };

//   const navItems = [
//     { label: "Home", onClick: () => goHomeAndScroll("") },
//     { label: "Courses", onClick: () => goHomeAndScroll("#courses") },
//     { label: "Consultancy", onClick: () => goHomeAndScroll("#consultancy") },
//     { label: "About Us", onClick: () => handleNavigation("/aboutus") },
//     { label: "Contact", onClick: () => handleNavigation("/contact") },
//   ];

//   return (
//     <AppBar position="static" color="transparent" elevation={1} sx={{ borderRadius: 0,bgcolor: "#ffffff",  }}>
//       <Toolbar sx={{ px: { xs: 1.5, sm: 3 }, gap: 2 }}>
//         {/* Logo Section */}
//         <Box display="flex" alignItems="center">
//           <Box
//             component="img"
//             src={Logo}
//             alt="HRBS Logo"
//             sx={{ height: { xs: 58, sm: 66 }, width: "auto" }}
//           />
//         </Box>

//         {/* Mobile Menu */}
//         <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "flex-end" }}>
//           <IconButton
//             size="large"
//             aria-label="menu"
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
//             anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
//             keepMounted
//             transformOrigin={{ vertical: "top", horizontal: "left" }}
//             open={Boolean(anchorElNav)}
//             onClose={handleCloseNavMenu}
//             sx={{ display: { xs: "block", md: "none" } }}
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

//         {/* Desktop Navigation */}
//         <Box
//           sx={{
//             flexGrow: 1,
//             display: { xs: "none", md: "flex" },
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

    // 💡 FIX: Introduce a small delay for the scroll action on mobile
    // to allow the Menu component to fully close and avoid interference.
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
      setTimeout(scrollAction, 100); // 100ms should be enough
    } else {
      // Execute immediately on desktop (where the menu isn't used)
      scrollAction();
    }
  };

  const handleNavigation = (path) => {
    handleCloseNavMenu();
    // No need to delay navigation to a new page, but we'll include a small one for consistency
    if (anchorElNav) {
        setTimeout(() => navigate(path), 50);
    } else {
        navigate(path);
    }
  };

  // ... rest of the component remains the same ...
  const navItems = [
    { label: "Home", onClick: () => goHomeAndScroll("") },
    { label: "Courses", onClick: () => goHomeAndScroll("#courses") },
    { label: "Consultancy", onClick: () => goHomeAndScroll("#consultancy") },
    { label: "About Us", onClick: () => handleNavigation("/aboutus") },
    { label: "Contact", onClick: () => handleNavigation("/contact") },
  ];

  return (
    // ... rest of the JSX remains the same ...
    <AppBar position="static" color="transparent" elevation={1} sx={{ borderRadius: 0,bgcolor: "#ffffff", 	}}>
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
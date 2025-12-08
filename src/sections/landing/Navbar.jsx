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
//   // console.log(import.meta.env.VITE_HRBS_WEBSITE_URL);

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

//     // 💡 FIX: Introduce a small delay for the scroll action on mobile
//     // to allow the Menu component to fully close and avoid interference.
//     const scrollAction = () => {
//       if (location.pathname === "/") {
//         if (hash === "#courses") onCoursesClick?.();
//         else if (hash === "#consultancy") onConsultancyClick?.();
//         else onHomeClick?.();
//       } else {
//         navigate(`/${hash}`);
//       }
//     };

//     // Delay the scroll action only when the menu is open (mobile view)
//     if (anchorElNav) {
//       setTimeout(scrollAction, 100); // 100ms should be enough
//     } else {
//       // Execute immediately on desktop (where the menu isn't used)
//       scrollAction();
//     }
//   };

//   const handleNavigation = (path) => {
//     handleCloseNavMenu();
//     // No need to delay navigation to a new page, but we'll include a small one for consistency
//     if (anchorElNav) {
//       setTimeout(() => navigate(path), 50);
//     } else {
//       navigate(path);
//     }
//   };

//   // ... rest of the component remains the same ...
//   const navItems = [
//     { label: "Home", onClick: () => goHomeAndScroll("") },
//     { label: "Courses", onClick: () => goHomeAndScroll("#courses") },
//     { label: "Our Services", onClick: () => goHomeAndScroll("#consultancy") },
//     { label: "About Us", onClick: () => handleNavigation("/aboutus") },
//     { label: "Contact", onClick: () => handleNavigation("/contact") },
//   ];

//   return (
//     <AppBar
//       position="static"
//       color="transparent"
//       elevation={1}
//       sx={{ borderRadius: 0, bgcolor: "#ffffff", py: 1, px: 0 }}
//     >
//       <Box display={"flex"} justifyContent={"space-between"}>
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
//         <Box
//           sx={{
//             flexGrow: 1,
//             display: { xs: "flex", md: "none" },
//             justifyContent: "flex-end",
//           }}
//         >
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
//                 <Button
//                   sx={{
//                     width: "100%",
//                     justifyContent: "flex-start",
//                     textTransform: "none",
//                   }}
//                 >
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

//         {/* Health Score Button */}
//         <Button
//           component="a"
//           href={import.meta.env.VITE_HRBS_WEBSITE_URL}
//           target="_blank"
//           rel="noopener noreferrer"
//           variant="contained"
//           color="primary"
//           sx={{
//             fontSize: { xs: 12, sm: 14 },
//             px: 2,
//             textTransform: "none",
//             ml: "auto",
//           }}
//         >
//          Check Your Health Score
//         </Button>
//       </Box>
//     </AppBar>
//   );
// };

// export default Navbar;










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

  const navItems = [
    { label: "Home", onClick: () => goHomeAndScroll("") },
    { label: "Courses", onClick: () => goHomeAndScroll("#courses") },
    { label: "Our Services", onClick: () => goHomeAndScroll("#consultancy") },
    { label: "About Us", onClick: () => handleNavigation("/aboutus") },
    { label: "Contact", onClick: () => handleNavigation("/contact") },
  ];

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
          // 💡 REFINEMENT: Set flexGrow to 0 on mobile (xs) to ensure the logo takes only the space it needs.
          // flexGrow: 1 is kept for desktop (md) for centering logic.
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
            flexGrow: { xs: 0, md: 1 }, // xs: 0 ensures it doesn't take space on mobile.
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
            // 💡 REFINEMENT: Set flexGrow to 1 on mobile (xs) to push the right content as far as possible
            // while keeping flexGrow: 1 on desktop (md) for centering logic.
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
          </Menu>

          {/* Health Score Button (CTA) */}
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
            }}
          >
            Check Your Health Score
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
// // Navbar.jsx
// import React from "react";
// import { AppBar, Toolbar, Box, Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import Logo from "../../assets/Short Logo.png";

// const Navbar = ({ onHomeClick, onCoursesClick, onConsultancyClick }) => {
//   const navigate = useNavigate();

//   return (
//     <AppBar position="static" color="default" elevation={1} sx={{ borderRadius: 0 }}>
//       <Toolbar
//         sx={{
//           px: { xs: 1.5, sm: 3 },
//           gap: 2,
//         }}
//       >
//         {/* Left: Logo */}
//         <Box display="flex" alignItems="center">
//           <Box
//             component="img"
//             src={Logo}
//             alt="HRBS Logo"
//             sx={{
//               height: { xs: 58, sm: 66 },
//               width: "auto",
//             }}
//           />
//         </Box>

//         {/* Center: Menu items */}
//         <Box
//           sx={{
//             flexGrow: 1,
//             display: "flex",
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
//           <Button color="inherit" onClick={onHomeClick}>Home</Button>
//           <Button color="inherit" onClick={onCoursesClick}>Courses</Button>
//           <Button color="inherit" onClick={onConsultancyClick}>Consultancy</Button>
//           <Button color="inherit">About Us</Button>
//           <Button color="inherit">Contact</Button>
//         </Box>

//         {/* Right: Get a Quote */}
//         <Box>
//           <Button
//             variant="contained"
//             color="primary"
//             size="small"
//             sx={{ borderRadius: 2, px: 3, textTransform: "none" }}
//             onClick={() => navigate("/get-quote")}
//           >
//             Get a Quote
//           </Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;




// Navbar.jsx
import React from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/Short Logo.png";

const Navbar = ({ onHomeClick, onCoursesClick, onConsultancyClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const goHomeAndScroll = (hash) => {
    if (location.pathname === "/") {
      // already on landing – just scroll
      if (hash === "#courses") onCoursesClick?.();
      else if (hash === "#consultancy") onConsultancyClick?.();
      else onHomeClick?.();
    } else {
      // go to landing with hash, LandingPage will handle scroll
      navigate(`/${hash}`);
    }
  };

  return (
    <AppBar position="static" color="default" elevation={1} sx={{ borderRadius: 0 }}>
      <Toolbar sx={{ px: { xs: 1.5, sm: 3 }, gap: 2 }}>
        {/* Left: Logo */}
        <Box display="flex" alignItems="center">
          <Box
            component="img"
            src={Logo}
            alt="HRBS Logo"
            sx={{ height: { xs: 58, sm: 66 }, width: "auto" }}
          />
        </Box>

        {/* Center: Menu items */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
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
          <Button color="inherit" onClick={() => goHomeAndScroll("")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => goHomeAndScroll("#courses")}>
            Courses
          </Button>
          <Button color="inherit" onClick={() => goHomeAndScroll("#consultancy")}>
            Consultancy
          </Button>
          <Button color="inherit" onClick={()=>navigate("/aboutus")}>
            About Us
            </Button>
          <Button color="inherit" onClick={() => navigate("/contact")}>
            Contact
          </Button>
        </Box>

        {/* Right: Get a Quote */}
        <Box>
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ borderRadius: 2, px: 3, textTransform: "none" }}
            onClick={() => navigate("/get-quote")}
          >
            Get a Quote
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

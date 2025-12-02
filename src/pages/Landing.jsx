// import React from "react";
// import { Box } from "@mui/material";
// import Navbar from "../sections/landing/Navbar";
// import Headersection from "../components/Landing/Headersection";
// import CoursesSection from "../components/Landing/CoursesSection";
// import ConsultancySection from "../components/Landing/ConsultancySection";


// const LandingPage = () => {
//   return (
//     <Box display="flex" flexDirection="column"bgcolor="#fff">
//       <Navbar />
//       <Headersection/>
//       <CoursesSection/>
//       <ConsultancySection/>
          
//     </Box>
//   );
// };

// export default LandingPage;



// LandingPage.jsx
import React, { useRef, useEffect } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import Navbar from "../sections/landing/Navbar";
import Headersection from "../components/Landing/Headersection";
import CoursesSection from "../components/Landing/CoursesSection";
import ConsultancySection from "../components/Landing/ConsultancySection";

const LandingPage = () => {
  const topRef = useRef(null);
  const coursesRef = useRef(null);
  const consultancyRef = useRef(null);
  const location = useLocation();

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Handle initial load or navigation to /#courses, /#consultancy
  useEffect(() => {
    if (location.hash === "#courses") scrollTo(coursesRef);
    else if (location.hash === "#consultancy") scrollTo(consultancyRef);
    else scrollTo(topRef);
  }, [location.hash]);

  return (
    <Box display="flex" flexDirection="column" bgcolor="#fff" ref={topRef}>
      <Navbar
        onHomeClick={() => scrollTo(topRef)}
        onCoursesClick={() => scrollTo(coursesRef)}
        onConsultancyClick={() => scrollTo(consultancyRef)}
      />

      <Headersection />

      <Box ref={coursesRef}>
        <CoursesSection />
      </Box>

      <Box ref={consultancyRef}>
        <ConsultancySection />
      </Box>
    </Box>
  );
};

export default LandingPage;

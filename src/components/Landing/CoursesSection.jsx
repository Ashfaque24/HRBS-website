import React from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";

import course1 from "../../assets/courses/hrbs c 1.webp";
import course2 from "../../assets/courses/hrbs c 2.webp";
import course3 from "../../assets/courses/hrbs c 3.webp";
import course4 from "../../assets/courses/hrbs c 4.webp"
import course5 from "../../assets/courses/hrbs c 5.webp";
import course6 from "../../assets/courses/hrbs c 6.webp";

const courses = [
  {
    title: "Strategic Recruitment and Workforce Planning",
    description:
      "Align your hiring strategy with business goals to build a future-ready workforce.",
    image: course1,
  },
  {
    title: "HR Admin with AI",
    description:
      "Revolutionize your daily operations by leveraging AI to automate tasks and boost efficiency.",
    image: course2,
  },
  {
    title: "Learning and Development",
    description:
      "Empower your team to grow by designing impactful training programs that bridge skill gaps.",
    image: course3,
  },
  {
    title: "People and Performance Management",
    description:
      "Drive results through people with techniques to set goals, provide feedback, and maximize potential.",
    image: course4,
  },
  {
    title: "Culture and Employee Engagement",
    description:
      "Build a workplace people love by fostering a positive culture that improves retention and morale.",
    image: course5,
  },
  {
    title: "HR Tech and Analytics",
    description:
      "Make smarter, data-driven decisions by navigating the modern HR technology landscape.",
    image: course6,
  },
];

const CoursesSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 6 },
        bgcolor: "#f7f8fb",
      }}
    >
      <Box textAlign="center" mb={4}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mb: 1, fontSize: { xs: 24, md: 32 } }}
        >
          The HRBS Learning Suite Description
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", maxWidth: 520, mx: "auto" }}
        >
          Equip yourself with real-world HR skills. Take the first step toward becoming a High-Agency professional.

        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center">
        {courses.map((course) => (
          <Grid
            item
            key={course.title}
            xs={12}
            sm={6}
            md={4}
            sx={{ display: "flex" }}
          >
<Card
  sx={{
    borderRadius: 3,
    overflow: "hidden",
    boxShadow: "0 16px 30px rgba(15, 23, 42, 0.08)",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    maxWidth: 400,
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 20px 40px rgba(15, 23, 42, 0.15)",
      zIndex: 1,
    },
  }}
>

              <Box
                sx={{
                  position: "relative",
                  flexGrow: 1,
                  "&:hover .hoverOverlay": { opacity: 1 },
                }}
              >
                <CardMedia
                  component="img"
                  image={course.image}
                  alt={course.title}
                  sx={{
                    height: 220,
                    objectFit: "cover",
                  }}
                />
                <CardContent sx={{ textAlign: "left" }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, mb: 1, fontSize: 18 }}
                  >
                    {course.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", fontSize: 14 }}
                  >
                    {course.description}
                  </Typography>
                </CardContent>

                {/* Hover overlay */}
                <Box
                  className="hoverOverlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    bgcolor: "rgba(0,0,0,0.55)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "#fff", fontWeight: 600 }}
                  >
                    Coming Soon
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CoursesSection;







import React from "react";
import { Box, Typography, Grid, Card, CardContent, Link } from "@mui/material";

const services = [
  {
    title: "Compliance Health Checker",
    description:
      "Have your company’s compliances checked for free within minutes.",
  },
  {
    title: "Compliance Health Report",
    description:
      "Get a detailed roadmap of your risks and receive actionable insights to fix them.",
  },
  {
    title: "Compliance Certifications",
    description:
      "Fix your compliance with our expert agents and get certified by HRBS.",
  },
  {
    title: "Compliances Outsourcing",
    description:
      "Hand over your regulatory burden to experts and focus entirely on growing your business.",
  },
];

const ConsultancySection = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 6 },
        bgcolor: "#ffffff",
      }}
    >
      {/* Heading */}
      <Box textAlign="center" mb={4}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mb: 1, fontSize: { xs: 24, md: 32 } }}
        >
          Explore Our Services To Now How We Can Collaborate
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", maxWidth: 600, mx: "auto" }}
        >
          Comprehensive HR solutions tailored to your organization&apos;s
          unique needs.
        </Typography>
      </Box>

      {/* Cards */}
      <Grid
        container
        spacing={3}
        justifyContent="center"     // center the whole grid
      >
        {services.map((service) => (
          <Grid
            item
            key={service.title}
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }} // center each card
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: 520, // nice readable width, same for all
                borderRadius: 3,
                boxShadow: "0 18px 40px rgba(15, 23, 42, 0.08)",
                borderLeft: "4px solid #00b894",
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 1.5,
                    fontSize: { xs: 18, md: 20 },
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    mb: 2,
                    fontSize: { xs: 14, md: 15 },
                  }}
                >
                  {service.description}
                </Typography>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    fontWeight: 600,
                    color: "#1d4ed8",
                    fontSize: 14,
                  }}
                >
                  Learn More →
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ConsultancySection;

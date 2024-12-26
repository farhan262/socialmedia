import { Box, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { InstagramLogo } from "../../assets/constants";

const Sidebar = () => {
  return (
    <Box
      sx={{
        height: "100 vh",
        borderRight: "1px solid",
        borderColor: "white",
        py: 8,
        px: { base: 2, md: 4 },
        position: "sticky",
        top: 0,
        left: 0,
      }}
    >
      <Container
        sx={{ flexDirection: "column", gap: 10, width: "full", height: "full" }}
      >
        <Link to={"/"} style={{paddingLeft:2,display:{base:"none",md:"block"},cursor:"pointer"}}>
        <InstagramLogo />
        </Link>
      </Container>
    </Box>
  );
};

export default Sidebar;

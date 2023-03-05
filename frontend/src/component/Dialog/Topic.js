import { Box, Typography } from "@mui/material";
import React, { useMemo } from "react";

const Topic = ({ mainTheme, relatedTopics, selectedID, setSelectedID }) => {
  const isActive = useMemo(() => selectedID === mainTheme.id, [selectedID]);
  const themeOnClick = (id) => {
    setSelectedID(id);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ alignItems: "flex-start" }}
    >
      <Typography
        onClick={() => themeOnClick(mainTheme.id)}
        variant="h6"
        fontWeight={600}
        color={isActive ? "#bebebe" : "text.primary"}
        sx={{
          textDecoration: "underline",
          cursor: "pointer",
          ":hover": { color: "#bebebe" },
        }}
      >
        {mainTheme.label}
      </Typography>
      <ul style={{ textAlign: "left", marginLeft: "-20px" }}>
        {relatedTopics.map((topic) => (
          <li key={topic.id}>
            <Typography variant="subtitle1">{topic.label}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Topic;

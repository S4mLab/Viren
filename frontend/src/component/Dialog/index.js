import { Grid, Paper } from "@mui/material";
import React from "react";
import Topic from "./Topic";

const Dialog = ({ responses, setSelectedID, selectedID }) => {
  const mainTopic = Object.keys(responses);
  return (
    <Grid item xs={4}>
      <Paper
        elevation={3}
        sx={{ mt: 4, ml: 4, px: 2, py: 4, height: "80vh", overflowY: "scroll" }}
      >
        {mainTopic.map((main) => {
          const mainTopic = responses[main].find((item) => item.isMainTopic);
          const filteredRelatedResponses = responses[main].filter(
            (item) => !item?.isMainTopic
          );
          return (
            <Topic
              key={main}
              setSelectedID={setSelectedID}
              selectedID={selectedID}
              mainTheme={mainTopic}
              relatedTopics={filteredRelatedResponses}
            />
          );
        })}
      </Paper>
    </Grid>
  );
};

export default Dialog;

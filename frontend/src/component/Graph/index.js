import { Grid } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { generateGraphContent } from "../../util/graph";
import Graph from "react-graph-vis";

const Canvas = ({ responses, selectedID }) => {
  const graphRef = useRef(null);
  const options = {
    height: "100%",
    nodes: {
      shape: "box",
      widthConstraint: 100,
    },
    physics: {
      stabilization: false,
      barnesHut: {
        avoidOverlap: 0.2,
      },
    },
  };

  useEffect(() => {
    if (graphRef && selectedID !== null) {
      const nodesObj = graphRef.current.body.nodes;
      console.log(graphRef.current);
      const { x, y } = nodesObj[selectedID];
      const options = {
        position: {
          x,
          y,
        },
        scale: 1.3,
      };
      graphRef.current.moveTo(options);
    }
  }, [selectedID]);

  const graphs = generateGraphContent(responses);

  return (
    <Grid item xs={8}>
      <Graph
        getNetwork={(network) => {
          graphRef.current = network;
        }}
        graph={graphs}
        options={options}
      />
    </Grid>
  );
};

export default Canvas;

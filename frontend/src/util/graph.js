const shallowColors = [
  "#F5B7B1",
  "#D7BDE2",
  "#D4E6F1",
  "#A3E4D7",
  "#F9E79F",
  "#FDEBD0",
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * shallowColors.length);
  return shallowColors[randomIndex];
};
export const generateGraphContent = (responses) => {
  const mainTopic = Object.keys(responses);
  const graphs = [];

  mainTopic.forEach((topic) => {
    const respectiveColor = getRandomColor();
    const correspondingRelatedTopics = responses[topic].map((item) => ({
      ...item,
      color: respectiveColor,
    }));
    const correspondingTopicId = correspondingRelatedTopics.find(
      (item) => item.isMainTopic
    )?.id;
    const modifiedEdges = [];

    correspondingRelatedTopics.forEach((subTopic) => {
      if (
        correspondingTopicId !== undefined &&
        subTopic.id !== correspondingTopicId
      ) {
        modifiedEdges.push({ to: subTopic.id, from: correspondingTopicId });
      }
    });

    const singleGraphContent = {
      nodes: correspondingRelatedTopics,
      edges: modifiedEdges,
    };
    graphs.push(singleGraphContent);
  });

  const combinedGraph = {
    nodes: [],
    edges: [],
  };

  graphs.forEach((graph) => {
    combinedGraph.nodes.push(...graph.nodes);
    combinedGraph.edges.push(...graph.edges);
  });

  return combinedGraph;
};

export {};

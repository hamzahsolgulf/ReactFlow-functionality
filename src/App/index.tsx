import { ReactFlow, Controls, Panel, NodeOrigin } from "@xyflow/react";
import { shallow } from "zustand/shallow";

import useStore, { RFState } from "./store";

import "@xyflow/react/dist/style.css";

const selector = (state: RFState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
});

const nodeOrigin: NodeOrigin = [0.5, 0.5];


function Flow() {

  const { nodes, edges, onNodesChange, onEdgesChange } = useStore(
    selector,
    shallow,
  );

  return (
    <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeOrigin={nodeOrigin}
        fitView
    >
      <Controls showInteractive={false} />
      <Panel position="top-left">React Flow Mind Map</Panel>
    </ReactFlow>
  );
}

export default Flow;

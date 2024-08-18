import { ReactFlow, Controls, Panel, NodeOrigin } from "@xyflow/react";
import { shallow } from "zustand/shallow";

import useStore, { RFState } from "./store";

import MindMapNode from "./MindMapNode";
import MindMapEdge from "./MindMapEdge";

import "@xyflow/react/dist/style.css";

const selector = (state: RFState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
});

const nodeTypes = {
  mindmap: MindMapNode,
};

const edgeTypes = {
  mindmap: MindMapEdge,
};

const nodeOrigin: NodeOrigin = [0.5, 0.5];

function Flow() {
  const { nodes, edges, onNodesChange, onEdgesChange } = useStore(
    selector,
    shallow
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      nodeOrigin={nodeOrigin}
      fitView
    >
      <Controls showInteractive={false} />
      <Panel position="top-left">React Flow Mind Map</Panel>
    </ReactFlow>
  );
}

export default Flow;

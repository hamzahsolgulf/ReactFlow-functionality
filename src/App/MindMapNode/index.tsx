/*
    NodeData:
        NodeData is a TypeScript type definition that specifies the structure of 
        the data object expected by a node in your application. In this case, 
        NodeData has a single property:

        label: A string that represents some label or identifier for the node.
    
    Data Object:
        A data object is a structured way to store and pass data within your 
        application. In the context of the provided code, the data object adheres
        to the NodeData type and is used to provide information to a node component.
*/

import { Handle, NodeProps, Position } from "@xyflow/react";

export type NodeData = {
  data: {
    [key: string]: string;
  };
  id: string;
  position: { x: number; y: number }
  label: string;
  width: number;
  height: number;
};

function MindMapNode({ id, data }: NodeProps<NodeData>) {
  return (
    <>
      <input title="reactMindMap node" defaultValue={data.label} />

      <Handle type="target" position={Position.Top} /> 
      <Handle type="source" position={Position.Bottom} /> 
    </>
  );
}

export default MindMapNode;


/*
<Handle type="target" position={Position.Top} /> //the target handle is placed at the top of the node and This means other nodes can connect to this node via this handle.
      <Handle type="source" position={Position.Bottom} /> //the source handle is placed at the bottom of the node and this means it can connect to other nodes using this example
*/
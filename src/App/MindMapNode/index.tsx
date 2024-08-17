import { Handle, NodeProps, Position } from '@xyflow/react';

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
export type NodeData = {
    label: string; 

};

function MindMapNode({ id, data }: NodeProps<NodeData>) {
    return (
        <>
            <input defaultValue={data.label} />

            <Handle type="target" position={Position.Top} />
            <Handle type="source" position={Position.Bottom} />
        </>
    );
}



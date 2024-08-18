import {
    Edge,
    EdgeChange,
    Node,
    NodeChange,
    OnNodesChange,
    OnEdgesChange,
    applyNodeChanges,
    applyEdgeChanges,
} from '@xyflow/react'

import { createWithEqualityFn } from 'zustand/traditional'; 
//zustand is a small state-management library
/*The createWithEqualityFn function creates a store (a place where state is managed) 
with a custom equality function, which helps optimize re-renders by comparing 
the previous and next states.*/

export type RFState = {
    nodes: Node[]; //Node is a TypeScript type definition that specifies the structure of a node in your application.
    edges: Edge[];
    onNodesChange: OnNodesChange; //OnNodesChange is a TypeScript type definition that specifies the structure of the onNodesChange function.
    onEdgesChange: OnEdgesChange;
};

const useStore = createWithEqualityFn<RFState>((set, get) => ({
    nodes: [
        {
            id: 'root',
            type:'mindmap',
            data: { label: 'React Flow Mind Map' },
            position: { x: 0, y: 0 },
        },
    ],
    edges: [],
    onNodesChange: (changes: NodeChange[]) => {
        set({
            nodes: applyNodeChanges(changes, get().nodes),
        });
    },
    onEdgesChange: (changes: EdgeChange[]) => {
        set({
            edges: applyEdgeChanges(changes, get().edges),
        });
    },
}));

export default useStore;
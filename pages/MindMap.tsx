
import React from 'react';
import DiagramCanvas from '../components/DiagramCanvas';
import { NodeData, EdgeData } from '../types';

const MindMap: React.FC = () => {
  // Compacted Layout: Root at top center, branches spreading down/out
  // Canvas Max Width ~950px
  const nodes: NodeData[] = [
    // Root
    { id: '1', label: 'QNN Consciousness', type: 'root', x: 375, y: 20, width: 200, height: 60, description: 'Project Core' },
    
    // Level 1: Main Pillars
    { id: '2', label: 'IIT Theory', type: 'main', x: 25, y: 150, width: 160, height: 60 },
    { id: '3', label: 'Methodology', type: 'main', x: 255, y: 150, width: 160, height: 60 },
    { id: '4', label: 'Tech Stack', type: 'main', x: 495, y: 150, width: 160, height: 60 },
    { id: '5', label: 'Outcomes', type: 'main', x: 725, y: 150, width: 160, height: 60 },

    // Level 2: Details (IIT)
    { id: '2a', label: 'Phi (Φ) Metric', type: 'sub', x: 25, y: 250, width: 160, height: 50 },
    { id: '2b', label: 'Quantum Analogues', type: 'sub', x: 25, y: 320, width: 160, height: 50 },

    // Level 2: Details (Methodology)
    { id: '3a', label: 'Agent Modeling', type: 'sub', x: 255, y: 250, width: 160, height: 50 },
    { id: '3b', label: 'QNN Simulation', type: 'sub', x: 255, y: 320, width: 160, height: 50 },
    
    // Level 2: Details (Tech)
    { id: '4a', label: 'PennyLane/Qiskit', type: 'sub', x: 495, y: 250, width: 160, height: 50 },
    { id: '4b', label: 'PyPhi Lib', type: 'sub', x: 495, y: 320, width: 160, height: 50 },

    // Level 2: Details (Outcomes)
    { id: '5a', label: 'Conscious Stream', type: 'sub', x: 725, y: 250, width: 160, height: 50 },
    { id: '5b', label: 'Prototype', type: 'sub', x: 725, y: 320, width: 160, height: 50 },
  ];

  const edges: EdgeData[] = [
    { id: 'e1', from: '1', to: '2' },
    { id: 'e2', from: '1', to: '3' },
    { id: 'e3', from: '1', to: '4' },
    { id: 'e4', from: '1', to: '5' },
    
    { id: 'e2a', from: '2', to: '2a' },
    { id: 'e2b', from: '2', to: '2b' },

    { id: 'e3a', from: '3', to: '3a' },
    { id: 'e3b', from: '3', to: '3b' },

    { id: 'e4a', from: '4', to: '4a' },
    { id: 'e4b', from: '4', to: '4b' },

    { id: 'e5a', from: '5', to: '5a' },
    { id: 'e5b', from: '5', to: '5b' },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-bold text-slate-800">Project Mind Map</h2>
        <p className="text-slate-500">Visual breakdown of the FYP proposal components.</p>
      </div>
      
      {/* CENTERED CONTAINER */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[920px] bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <DiagramCanvas nodes={nodes} edges={edges} height={450} />
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-slate-200 text-sm text-slate-600">
        <strong className="text-slate-900">Overview:</strong> The project explores consciousness in AI through Quantum Neural Networks, grounded in Integrated Information Theory (IIT), implemented via Qiskit/PennyLane, and aiming for a prototype exhibiting conscious-like information streams.
      </div>
    </div>
  );
};

export default MindMap;

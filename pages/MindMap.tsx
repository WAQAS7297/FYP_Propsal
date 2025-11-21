import React from 'react';
import DiagramCanvas from '../components/DiagramCanvas';
import { NodeData, EdgeData } from '../types';

const MindMap: React.FC = () => {
  const nodes: NodeData[] = [
    // Center
    { id: '1', label: 'QNN Consciousness Stream', type: 'root', x: 700, y: 450, width: 220, height: 90, description: 'FYP Main Topic' },
    
    // Top Branch: Core Concept (IIT)
    { id: '2', label: 'Integrated Information Theory (IIT)', type: 'main', x: 700, y: 180, width: 220, height: 70 },
    { id: '2a', label: 'Phi (Φ) Metric', type: 'sub', x: 480, y: 60, width: 160, height: 50 },
    { id: '2b', label: 'Quantum Analogues', type: 'sub', x: 920, y: 60, width: 160, height: 50 },

    // Right Branch: Methodology
    { id: '3', label: 'Methodology', type: 'main', x: 1100, y: 450, width: 180, height: 70 },
    { id: '3a', label: 'Agent-Based Modeling', type: 'sub', x: 1350, y: 320, width: 170, height: 50 },
    { id: '3b', label: 'QNN Simulation', type: 'sub', x: 1400, y: 450, width: 170, height: 50 },
    { id: '3c', label: 'Comparison (Classical)', type: 'sub', x: 1350, y: 580, width: 170, height: 50 },

    // Bottom Branch: Outcomes
    { id: '4', label: 'Expected Outcomes', type: 'main', x: 700, y: 720, width: 200, height: 70 },
    { id: '4a', label: 'Conscious-like Stream', type: 'sub', x: 480, y: 850, width: 180, height: 50 },
    { id: '4b', label: 'QNN Prototype', type: 'sub', x: 920, y: 850, width: 180, height: 50 },

    // Left Branch: Technologies
    { id: '5', label: 'Tech Stack', type: 'main', x: 300, y: 450, width: 180, height: 70 },
    { id: '5a', label: 'PennyLane / Qiskit', type: 'sub', x: 50, y: 320, width: 160, height: 50 },
    { id: '5b', label: 'PyPhi', type: 'sub', x: 20, y: 450, width: 140, height: 50 },
    { id: '5c', label: 'Python / JAX', type: 'sub', x: 50, y: 580, width: 160, height: 50 },
  ];

  const edges: EdgeData[] = [
    { id: 'e1', from: '1', to: '2' },
    { id: 'e1a', from: '2', to: '2a' },
    { id: 'e1b', from: '2', to: '2b' },
    
    { id: 'e2', from: '1', to: '3' },
    { id: 'e2a', from: '3', to: '3a' },
    { id: 'e2b', from: '3', to: '3b' },
    { id: 'e2c', from: '3', to: '3c' },

    { id: 'e3', from: '1', to: '4' },
    { id: 'e3a', from: '4', to: '4a' },
    { id: 'e3b', from: '4', to: '4b' },

    { id: 'e4', from: '1', to: '5' },
    { id: 'e4a', from: '5', to: '5a' },
    { id: 'e4b', from: '5', to: '5b' },
    { id: 'e4c', from: '5', to: '5c' },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-bold text-slate-800">Project Mind Map</h2>
        <p className="text-slate-500">Visual breakdown of the FYP proposal components</p>
      </div>
      <div className="overflow-x-auto pb-4">
        <div className="min-w-[1600px]">
           <DiagramCanvas nodes={nodes} edges={edges} height={1000} />
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg border border-slate-200 text-sm text-slate-600">
        <strong className="text-slate-900">Explanation:</strong> This mind map centers on the investigation of conscious streams via Quantum Neural Networks. It branches into the theoretical framework (IIT), the methodological approach (ABM & Simulations), the toolset used (Qiskit, PyPhi), and the expected deliverables.
      </div>
    </div>
  );
};

export default MindMap;
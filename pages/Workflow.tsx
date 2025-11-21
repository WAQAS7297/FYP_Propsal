import React from 'react';
import DiagramCanvas from '../components/DiagramCanvas';
import { NodeData, EdgeData } from '../types';

const Workflow: React.FC = () => {
  const nodes: NodeData[] = [
    { id: '1', label: 'Start', type: 'root', x: 50, y: 400, width: 120, height: 60 },
    
    // Phase 1
    { id: '2', label: 'Agent Definition', type: 'process', x: 350, y: 200, width: 220, height: 80, description: 'Define Qubits as Agents' },
    { id: '3', label: 'Topology Setup', type: 'process', x: 350, y: 600, width: 220, height: 80, description: '1D, Random, Fully Connected' },
    
    // Phase 2
    { id: '4', label: 'QNN Evolution', type: 'main', x: 800, y: 400, width: 250, height: 100, description: 'Apply Unitaries & Entanglement' },
    
    // Phase 3
    { id: '5', label: 'Measurement Pipeline', type: 'main', x: 1250, y: 400, width: 250, height: 100, description: 'Extract ρ(t)' },
    
    // Phase 4
    { id: '6', label: 'IIT / QIIT Analysis', type: 'process', x: 1700, y: 250, width: 220, height: 80, description: 'Calc Φ & Persistence' },
    { id: '7', label: 'ABM Pattern Detection', type: 'process', x: 1700, y: 550, width: 220, height: 80, description: 'Cluster & Motif Analysis' },
    
    // End
    { id: '8', label: 'Evaluate Success', type: 'database', x: 2100, y: 400, width: 200, height: 80, description: 'Compare vs Classical' },
  ];

  const edges: EdgeData[] = [
    { id: 'e1', from: '1', to: '2' },
    { id: 'e2', from: '1', to: '3' },
    { id: 'e3', from: '2', to: '4' },
    { id: 'e4', from: '3', to: '4' },
    { id: 'e5', from: '4', to: '5', label: 'Timestep t' },
    { id: 'e6', from: '5', to: '6' },
    { id: 'e7', from: '5', to: '7' },
    { id: 'e8', from: '6', to: '8' },
    { id: 'e9', from: '7', to: '8' },
    { id: 'e10', from: '5', to: '4', dashed: true, label: 'Next t' }
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-bold text-slate-800">Methodology Workflow</h2>
        <p className="text-slate-500">Step-by-step execution pipeline from agent initialization to evaluation.</p>
      </div>
      <div className="overflow-x-auto pb-4">
        <div className="min-w-[2400px]">
           <DiagramCanvas nodes={nodes} edges={edges} height={900} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
        <div className="bg-white p-4 rounded border border-slate-200">
            <strong>Key Process:</strong> The QNN evolves over discrete timesteps. At each step, measurements are taken (without collapsing the full state if possible, or using copies) to compute Integrated Information.
        </div>
        <div className="bg-white p-4 rounded border border-slate-200">
            <strong>Dual Analysis:</strong> The system is analyzed both through information theory (Phi) and complexity science (Agent-Based patterns) to cross-verify consciousness signatures.
        </div>
      </div>
    </div>
  );
};

export default Workflow;
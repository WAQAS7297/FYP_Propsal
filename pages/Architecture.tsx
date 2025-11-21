
import React from 'react';
import DiagramCanvas from '../components/DiagramCanvas';
import { NodeData, EdgeData } from '../types';

const Architecture: React.FC = () => {
  const nodes: NodeData[] = [
    // Control Layer (Top) - Center around X=350 (canvas width ~750)
    { id: '1', label: 'Experiment Manager', type: 'main', x: 265, y: 30, width: 220, height: 60, description: 'Config & Params' },

    // Processing Layer (Middle - Split)
    { id: '2', label: 'QNN Core Module', type: 'process', x: 45, y: 150, width: 200, height: 80, description: 'Unitary Evolution' },
    { id: '3', label: 'Control & Baseline', type: 'process', x: 505, y: 150, width: 200, height: 80, description: 'Classical RNN/ABM' },

    // Analysis Layer (Bottom Middle)
    { id: '4', label: 'Conscious Analysis', type: 'main', x: 265, y: 290, width: 220, height: 80, description: 'Compute Phi (Φ)' },

    // Output Layer (Bottom)
    { id: '5', label: 'Visualization', type: 'database', x: 265, y: 430, width: 220, height: 60, description: 'Results & Graphs' },
  ];

  const edges: EdgeData[] = [
    { id: 'e1', from: '1', to: '2', label: 'Init' },
    { id: 'e2', from: '1', to: '3', label: 'Init' },
    { id: 'e3', from: '2', to: '4', label: 'Quantum State' },
    { id: 'e4', from: '3', to: '4', label: 'Classical State' },
    { id: 'e5', from: '4', to: '5', label: 'Metrics' },
    { id: 'e6', from: '5', to: '1', label: 'Loop', dashed: true },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-bold text-slate-800">System Architecture</h2>
        <p className="text-slate-500">High-level view of the four primary modules.</p>
      </div>
      
      {/* CENTERED CONTAINER */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[750px] bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
           <DiagramCanvas nodes={nodes} edges={edges} height={520} />
        </div>
      </div>

      {/* Legend / Description Blocks below */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-1">1. Manager</h3>
              <p className="text-xs text-slate-600">Orchestrates simulation, managing sweeps and noise.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-1">2. Core & Baseline</h3>
              <p className="text-xs text-slate-600">Runs parallel quantum (PennyLane) and classical (RNN) models.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-1">3. Analysis</h3>
              <p className="text-xs text-slate-600">Calculates Integrated Information ($\Phi$) to detect consciousness signatures.</p>
          </div>
      </div>
    </div>
  );
};

export default Architecture;

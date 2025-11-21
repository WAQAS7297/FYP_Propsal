import React from 'react';
import DiagramCanvas from '../components/DiagramCanvas';
import { NodeData, EdgeData } from '../types';

const Architecture: React.FC = () => {
  const nodes: NodeData[] = [
    // Control Layer
    { id: '1', label: 'Experiment Manager', type: 'main', x: 400, y: 50, width: 320, height: 80, description: 'Parameter Sweeps, Topologies, Noise' },

    // Processing Layer
    { id: '2', label: 'QNN Core Module', type: 'process', x: 150, y: 350, width: 250, height: 100, description: 'Unitary Evolution, Entanglement' },
    { id: '3', label: 'Control & Baseline Module', type: 'process', x: 720, y: 350, width: 250, height: 100, description: 'Classical RNN/LSTM, ABM' },

    // Analysis Layer
    { id: '4', label: 'Conscious-Stream Analysis', type: 'main', x: 400, y: 650, width: 320, height: 90, description: 'Tomography, Entropy, Phi Calculation' },

    // Data Store / Result
    { id: '5', label: 'Visualization & Reporting', type: 'database', x: 400, y: 920, width: 320, height: 70, description: 'Heatmaps, Phi-Curves, Statistics' },
  ];

  const edges: EdgeData[] = [
    { id: 'e1', from: '1', to: '2', label: 'Config' },
    { id: 'e2', from: '1', to: '3', label: 'Config' },
    { id: 'e3', from: '2', to: '4', label: 'Quantum State ρ(t)' },
    { id: 'e4', from: '3', to: '4', label: 'Classical State' },
    { id: 'e5', from: '4', to: '5', label: 'Metrics (Φ, Mutual Info)' },
    { id: 'e6', from: '5', to: '1', label: 'Feedback Loop', dashed: true },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-bold text-slate-800">System Architecture</h2>
        <p className="text-slate-500">High-level view of the four primary modules and their interactions.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 overflow-x-auto">
            <div className="min-w-[1000px]">
                <DiagramCanvas nodes={nodes} edges={edges} height={1100} />
            </div>
        </div>
        <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-2">1. Experiment Manager</h3>
                <p className="text-sm text-slate-600">Orchestrates the simulation, managing parameter sweeps, topologies (1D, Random), and noise injection.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-2">2. QNN Core & Baseline</h3>
                <p className="text-sm text-slate-600">Runs parallel simulations. The QNN Core executes quantum circuits (PennyLane/Qiskit) while the Baseline runs classical equivalents (RNNs) for comparison.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-2">3. Analysis Module</h3>
                <p className="text-sm text-slate-600">The "Brain" of the evaluation. Performs tomography on qubits and calculates information-theoretic measures ($\Phi$) to detect consciousness signatures.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Architecture;
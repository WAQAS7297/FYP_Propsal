
import React from 'react';
import DiagramCanvas from '../components/DiagramCanvas';
import { NodeData, EdgeData } from '../types';

const UML: React.FC = () => {
    // Simplified Class Diagram
    // Canvas Width ~720px
    const classNodes: NodeData[] = [
        { id: '1', label: 'ExperimentManager', type: 'main', x: 260, y: 50, width: 200, height: 50, description: '+runSimulation()' },
        { id: '2', label: 'QNNModel', type: 'process', x: 60, y: 200, width: 180, height: 60, description: '+applyUnitary()\n+entangle()' },
        { id: '3', label: 'Agent', type: 'process', x: 60, y: 350, width: 180, height: 50, description: '-state: Qubit' },
        { id: '4', label: 'Analyzer', type: 'process', x: 460, y: 200, width: 180, height: 60, description: '+calculatePhi()\n+getEntropy()' },
        { id: '5', label: 'Metrics', type: 'database', x: 460, y: 350, width: 180, height: 50, description: 'Phi, MutualInfo' },
    ];

    const classEdges: EdgeData[] = [
        { id: 'c1', from: '1', to: '2', label: 'creates' },
        { id: 'c2', from: '1', to: '4', label: 'uses' },
        { id: 'c3', from: '2', to: '3', label: 'consists of 1..*' },
        { id: 'c4', from: '4', to: '2', label: 'observes' },
        { id: 'c5', from: '4', to: '5', label: 'produces' },
    ];

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-bold text-slate-800">Structure & Logic (UML)</h2>
        <p className="text-slate-500">Conceptual Class Diagram of the simulation framework.</p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Class Relationship Diagram</h3>
        {/* CENTERED CONTAINER */}
        <div className="w-full flex justify-center">
            <div className="w-full max-w-[720px] border border-slate-100 rounded">
                <DiagramCanvas nodes={classNodes} edges={classEdges} height={500} />
            </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Use Case Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="border border-slate-100 p-4 rounded bg-slate-50">
                <h4 className="font-semibold text-indigo-700">Researcher</h4>
                <ul className="list-disc ml-5 mt-2 text-sm text-slate-600 space-y-1">
                    <li>Configure QNN Topology (1D, Random)</li>
                    <li>Set Noise Parameters (Decoherence)</li>
                    <li>Execute Simulation Steps</li>
                    <li>Visualize Phi vs Time</li>
                </ul>
             </div>
             <div className="border border-slate-100 p-4 rounded bg-slate-50">
                <h4 className="font-semibold text-teal-700">System (Automated)</h4>
                <ul className="list-disc ml-5 mt-2 text-sm text-slate-600 space-y-1">
                    <li>Initialize Qubit Agents</li>
                    <li>Apply Quantum Gates (Unitaries)</li>
                    <li>Compute State Tomography</li>
                    <li>Calculate IIT Metrics</li>
                    <li>Store Time-Series Data</li>
                </ul>
             </div>
        </div>
      </div>
    </div>
  );
};

export default UML;

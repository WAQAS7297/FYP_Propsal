
import React from 'react';
import DiagramCanvas from '../components/DiagramCanvas';
import { NodeData, EdgeData } from '../types';

const Workflow: React.FC = () => {
  // Snake Layout: Row 1 Left->Right, Row 2 Right->Left
  // Canvas Width ~850px
  const nodes: NodeData[] = [
    // Row 1
    { id: '1', label: 'Start', type: 'root', x: 20, y: 50, width: 100, height: 50 },
    { id: '2', label: 'Define Agents', type: 'process', x: 180, y: 50, width: 160, height: 60, description: 'Qubits Init' },
    { id: '3', label: 'Set Topology', type: 'process', x: 400, y: 50, width: 160, height: 60, description: '1D / Random' },
    { id: '4', label: 'QNN Evolution', type: 'main', x: 620, y: 50, width: 180, height: 80, description: 'Apply Unitaries' },
    
    // Row 2 (Backwards or Wrapped)
    { id: '5', label: 'Measure State', type: 'main', x: 620, y: 200, width: 180, height: 80, description: 'Extract ρ(t)' },
    { id: '6', label: 'IIT Analysis', type: 'process', x: 400, y: 200, width: 160, height: 60, description: 'Calc Φ' },
    { id: '7', label: 'Pattern Detect', type: 'process', x: 180, y: 200, width: 160, height: 60, description: 'ABM Clustering' },
    
    // Row 3
    { id: '8', label: 'Evaluate', type: 'database', x: 180, y: 350, width: 160, height: 60, description: 'Compare vs Classical' },
  ];

  const edges: EdgeData[] = [
    { id: 'e1', from: '1', to: '2' },
    { id: 'e2', from: '2', to: '3' },
    { id: 'e3', from: '3', to: '4' },
    
    { id: 'e4', from: '4', to: '5', label: 'Timestep t' },
    
    { id: 'e5', from: '5', to: '6' },
    { id: 'e6', from: '5', to: '7' },
    
    { id: 'e7', from: '6', to: '8' },
    { id: 'e8', from: '7', to: '8' },
    
    { id: 'e9', from: '5', to: '4', dashed: true, label: 'Next Loop' }
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-bold text-slate-800">Methodology Workflow</h2>
        <p className="text-slate-500">Execution pipeline from initialization to evaluation.</p>
      </div>
      
      {/* CENTERED CONTAINER */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[850px] bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
             <DiagramCanvas nodes={nodes} edges={edges} height={450} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
        <div className="bg-white p-4 rounded border border-slate-200">
            <strong>Process:</strong> The QNN evolves over discrete timesteps. Measurements extracts state information without full collapse where possible.
        </div>
        <div className="bg-white p-4 rounded border border-slate-200">
            <strong>Analysis:</strong> Data flows into IIT metrics ($\Phi$) and ABM pattern detection simultaneously to verify results.
        </div>
      </div>
    </div>
  );
};

export default Workflow;

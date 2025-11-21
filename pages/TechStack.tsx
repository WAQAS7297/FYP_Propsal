import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Code2, Cpu, FileJson, Calculator, Box } from 'lucide-react';

const TechStack: React.FC = () => {
  const data = [
    { name: 'Python', category: 'Language', level: 100, color: '#3b82f6' },
    { name: 'Qiskit', category: 'Quantum', level: 90, color: '#8b5cf6' },
    { name: 'PennyLane', category: 'Quantum ML', level: 85, color: '#10b981' },
    { name: 'PyPhi', category: 'IIT Analysis', level: 80, color: '#f59e0b' },
    { name: 'PyTorch', category: 'ML/DL', level: 75, color: '#ef4444' },
    { name: 'Mesa', category: 'ABM', level: 60, color: '#6366f1' },
  ];

  return (
    <div className="space-y-8">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-bold text-slate-800">Technology Stack</h2>
        <p className="text-slate-500">Tools and libraries required for simulation and analysis.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Core Components</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-indigo-50 rounded-lg flex flex-col items-center text-center">
                    <Cpu className="text-indigo-600 mb-2" size={32} />
                    <h4 className="font-bold text-slate-800">Qiskit & PennyLane</h4>
                    <p className="text-xs text-slate-500 mt-1">Quantum Circuit Design & Simulation</p>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg flex flex-col items-center text-center">
                    <Calculator className="text-amber-600 mb-2" size={32} />
                    <h4 className="font-bold text-slate-800">PyPhi</h4>
                    <p className="text-xs text-slate-500 mt-1">Integrated Information (Φ) Calculation</p>
                </div>
                <div className="p-4 bg-emerald-50 rounded-lg flex flex-col items-center text-center">
                    <Code2 className="text-emerald-600 mb-2" size={32} />
                    <h4 className="font-bold text-slate-800">Python & JAX</h4>
                    <p className="text-xs text-slate-500 mt-1">Core Logic & High-Perf Math</p>
                </div>
                <div className="p-4 bg-rose-50 rounded-lg flex flex-col items-center text-center">
                    <Box className="text-rose-600 mb-2" size={32} />
                    <h4 className="font-bold text-slate-800">Mesa / Custom</h4>
                    <p className="text-xs text-slate-500 mt-1">Agent-Based Modeling Framework</p>
                </div>
            </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm min-h-[300px]">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Usage Distribution (Estimated)</h3>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" width={80} tick={{fontSize: 12}} />
                    <Tooltip cursor={{fill: 'transparent'}} />
                    <Bar dataKey="level" fill="#6366f1" radius={[0, 4, 4, 0]} barSize={20} />
                </BarChart>
            </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-bold text-slate-800">Problem vs. Solution</h2>
        <p className="text-slate-500">Why this research is needed and what it proposes.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Problem */}
        <div className="flex-1 bg-rose-50 border border-rose-200 rounded-xl p-6 relative">
            <div className="absolute -top-4 left-6 bg-rose-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md flex items-center">
                <AlertCircle size={16} className="mr-2" /> Problem
            </div>
            <ul className="mt-4 space-y-4">
                <li className="bg-white p-4 rounded-lg shadow-sm text-slate-700 text-sm">
                    <strong>Lack of Integration:</strong> Classical Neural Networks (Deep Learning) process information in discrete layers. They lack the intrinsic, unified "stream" of integrated information required for consciousness (per IIT).
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm text-slate-700 text-sm">
                    <strong>Computational Gap:</strong> No established computational framework exists to test whether quantum dynamics (Superposition/Entanglement) can sustain temporally continuous information flows.
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm text-slate-700 text-sm">
                    <strong>Metric Absence:</strong> There is no unified approach combining Quantum Info Theory, IIT/QIIT metrics, and dynamic QNN evolution.
                </li>
            </ul>
        </div>

        {/* Arrow (Visual only, hidden on mobile) */}
        <div className="hidden md:flex items-center justify-center text-slate-300">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
        </div>

        {/* Solution */}
        <div className="flex-1 bg-emerald-50 border border-emerald-200 rounded-xl p-6 relative">
            <div className="absolute -top-4 left-6 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md flex items-center">
                <CheckCircle size={16} className="mr-2" /> Solution
            </div>
            <ul className="mt-4 space-y-4">
                <li className="bg-white p-4 rounded-lg shadow-sm text-slate-700 text-sm">
                    <strong>Quantum Neural Network (QNN):</strong> Design a QNN where qubits act as agents. Uses entanglement to create globally correlated states that classic bits cannot mimic.
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm text-slate-700 text-sm">
                    <strong>Unified Framework:</strong> Integrates Agent-Based Modeling (ABM) with Quantum Information Processing to simulate time-evolution of the system.
                </li>
                <li className="bg-white p-4 rounded-lg shadow-sm text-slate-700 text-sm">
                    <strong>QIIT Evaluation:</strong> Implementation of a measurement pipeline that specifically calculates Quantum $\Phi$ and entropy to quantify the "Conscious Stream" strength compared to classical baselines.
                </li>
            </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-8">
        <h3 className="font-bold text-slate-800 mb-4">Success Criteria</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-slate-100 rounded bg-slate-50">
                <div className="font-semibold text-indigo-600 mb-1">Validity</div>
                <p className="text-xs text-slate-500">$\Phi(t)$ remains above baseline for &ge;5 consecutive timesteps.</p>
            </div>
            <div className="p-4 border border-slate-100 rounded bg-slate-50">
                <div className="font-semibold text-indigo-600 mb-1">Continuity</div>
                <p className="text-xs text-slate-500">Autocorrelation &ge; 0.6; no abrupt fragmentation in information stream.</p>
            </div>
            <div className="p-4 border border-slate-100 rounded bg-slate-50">
                <div className="font-semibold text-indigo-600 mb-1">Differentiation</div>
                <p className="text-xs text-slate-500">Statistically significant improvement over Classical RNN baselines.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolution;
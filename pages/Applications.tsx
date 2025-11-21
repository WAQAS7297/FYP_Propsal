import React from 'react';
import { Cpu, Activity, TrendingUp, ShieldCheck, Zap, Brain } from 'lucide-react';

const Applications: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-bold text-slate-900">Potential Industrial Applications</h1>
        <p className="text-slate-500 mt-2">
          From theoretical exploration to high-value industrial utility: Quantum Utility & Stateful AI.
        </p>
      </div>

      {/* Intro Section */}
      <div className="bg-slate-900 text-white p-8 rounded-xl shadow-lg">
        <div className="max-w-3xl">
          <h2 className="text-xl font-bold mb-3 flex items-center">
            <Zap className="mr-2 text-yellow-400" /> Beyond Stateless AI
          </h2>
          <p className="text-slate-300 leading-relaxed">
            While the primary focus of this study is theoretical, the resulting computational framework offers significant utility. 
            By moving beyond "stateless" input-output processing to <strong>"stateful" integrated information processing</strong>, 
            this architecture addresses critical limitations in current AI regarding temporal continuity and complex system modeling.
          </p>
        </div>
      </div>

      {/* Application 1: Robotics */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-indigo-50 p-4 border-b border-indigo-100 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-600 text-white rounded-lg">
              <Cpu size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900">1. Autonomous Systems (Robotics & Defense)</h3>
              <p className="text-xs text-indigo-600 font-semibold uppercase tracking-wider">Quantum Context Engine</p>
            </div>
          </div>
        </div>
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">The Problem</h4>
            <p className="text-sm text-slate-600 mb-4">
              Current autonomous agents rely on classical deep learning, suffering from "catastrophic forgetting." 
              They process moments as discrete frames, leading to errors in long-duration tasks and lack of contextual persistence.
            </p>
            <h4 className="font-semibold text-slate-800 mb-2">The Solution</h4>
            <p className="text-sm text-slate-600">
              A <strong>Quantum Context Engine</strong> that maintains a high $\Phi$ (Integrated Information) value. 
              This ensures the agent's internal state is self-consistent and temporally unified.
            </p>
          </div>
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-100">
            <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
              <ShieldCheck size={16} className="mr-2 text-emerald-600" /> Technical Application
            </h4>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start">
                <span className="mr-2 text-indigo-500">•</span>
                <span>
                  <strong>Stateful Resilience:</strong> Uses quantum entanglement to maintain global state against sensor noise, preventing hallucinations.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-indigo-500">•</span>
                <span>
                  <strong>Safety Protocols:</strong> $\Phi$ serves as a real-time "Sanity Check." If coherence drops, the system automatically halts, essential for safety-critical environments.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Application 2: Pharma */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-teal-50 p-4 border-b border-teal-100 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-teal-600 text-white rounded-lg">
              <Brain size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900">2. In-Silico Neuroscience (Pharma)</h3>
              <p className="text-xs text-teal-600 font-semibold uppercase tracking-wider">Digital Twins for Discovery</p>
            </div>
          </div>
        </div>
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">The Problem</h4>
            <p className="text-sm text-slate-600 mb-4">
              Developing treatments for neurological disorders is prohibitively expensive due to reliance on animal models, 
              which often fail to replicate human information integration.
            </p>
            <h4 className="font-semibold text-slate-800 mb-2">The Solution</h4>
            <p className="text-sm text-slate-600">
              This architecture acts as a <strong>"Digital Twin"</strong> for neural tissues. By simulating qubit interaction via Agent-Based Modeling, 
              it mimics the quantum effects hypothesized to underlie consciousness.
            </p>
          </div>
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-100">
            <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
              <Activity size={16} className="mr-2 text-emerald-600" /> Technical Application
            </h4>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start">
                <span className="mr-2 text-teal-500">•</span>
                <span>
                  <strong>Anesthesia Simulation:</strong> Introduce "digital stressors" to observe effects on the Information Stream. Restore $\Phi$ to identify candidate drugs.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-teal-500">•</span>
                <span>
                  <strong>Reduced Risk:</strong> High-throughput in-silico screening of neuroactive compounds, reducing ethical burden and cost.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Application 3: FinTech */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-blue-50 p-4 border-b border-blue-100 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600 text-white rounded-lg">
              <TrendingUp size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900">3. Financial Risk Modeling (FinTech)</h3>
              <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider">Macroscopic Coherence Analysis</p>
            </div>
          </div>
        </div>
        <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-slate-800 mb-2">The Problem</h4>
            <p className="text-sm text-slate-600 mb-4">
              Financial markets are Complex Adaptive Systems. Classical models analyze assets in isolation, 
              failing to capture the global "mood" or coherence of the entire market, missing system-wide failure signals.
            </p>
            <h4 className="font-semibold text-slate-800 mb-2">The Solution</h4>
            <p className="text-sm text-slate-600">
              Treat the market as an entangled quantum system. The <strong>"Conscious Stream" metrics</strong> (irreducibility and global integration) 
              are repurposed to measure Market Coherence.
            </p>
          </div>
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-100">
            <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
              <ShieldCheck size={16} className="mr-2 text-emerald-600" /> Technical Application
            </h4>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <span>
                  <strong>Systemic Risk Detection:</strong> Detect "Decoherence Events" (Crashes) when global $\Phi$ drops despite stable asset prices.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">•</span>
                <span>
                  <strong>Alpha Generation:</strong> Utilize "Quantum Interference" properties to identify non-linear correlations classical models miss.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applications;

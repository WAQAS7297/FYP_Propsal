import React from 'react';
import { BookOpen, Users, Target, Calendar } from 'lucide-react';

const Overview: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Project Overview</h1>
        <p className="text-slate-500 mt-2">Design and Simulation of Quantum Neural Networks to Investigate the Possibility of Conscious Stream</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start space-x-4">
          <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600">
            <Users size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Group Leader</p>
            <h3 className="text-lg font-bold text-slate-800">Waqas Ramzan</h3>
            <p className="text-xs text-slate-400">SP23-BAI-055</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start space-x-4">
          <div className="p-3 bg-teal-50 rounded-lg text-teal-600">
            <BookOpen size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Supervisor</p>
            <h3 className="text-lg font-bold text-slate-800">Dr. Wajahat M. Qazi</h3>
            <p className="text-xs text-slate-400">Assistant Professor</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start space-x-4">
          <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
            <Target size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Domain</p>
            <h3 className="text-lg font-bold text-slate-800">Artificial Intelligence</h3>
            <p className="text-xs text-slate-400">Quantum Computing</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start space-x-4">
          <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
            <Calendar size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500">Session</p>
            <h3 className="text-lg font-bold text-slate-800">2023-2027</h3>
            <p className="text-xs text-slate-400">BS AI (CUI)</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Abstract Summary</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Consciousness remains an unresolved challenge in AI. Classical machine learning models recognize patterns but lack the unified, continuous information integration described by Integrated Information Theory (IIT).
          </p>
          <p className="text-slate-600 leading-relaxed">
            This project designs and simulates a <strong>Quantum Neural Network (QNN)</strong> to explore whether quantum properties (superposition, entanglement) can generate a "conscious-like" information stream. Using <strong>Agent-Based Modeling (ABM)</strong> and <strong>QIIT metrics</strong>, the study evaluates the emergence of stable, integrated information flows in 4-12 qubit systems.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Key Objectives</h2>
          <ul className="space-y-3">
            {[
              "Develop QNN with entanglement-based interactions",
              "Implement Classical vs Quantum comparison framework",
              "Compute Φ (Phi) and Quantum Analogues",
              "Simulate Qubits as Agents (ABM)",
              "Analyze Quantum coherence & continuity",
              "Evaluate for 'Conscious-like' signatures"
            ].map((obj, i) => (
              <li key={i} className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full text-xs font-bold mr-3 mt-0.5">{i + 1}</span>
                <span className="text-sm text-slate-600">{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Overview;
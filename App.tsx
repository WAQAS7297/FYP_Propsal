import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Overview from './pages/Overview';
import MindMap from './pages/MindMap';
import Architecture from './pages/Architecture';
import Workflow from './pages/Workflow';
import Timeline from './pages/Timeline';
import TechStack from './pages/TechStack';
import UML from './pages/UML';
import ProblemSolution from './pages/ProblemSolution';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/mindmap" element={<MindMap />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/uml" element={<UML />} />
          <Route path="/problem-solution" element={<ProblemSolution />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
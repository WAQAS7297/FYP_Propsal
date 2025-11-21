import React, { ReactNode } from 'react';
import { LayoutDashboard, Network, GitGraph, Calendar, Database, FileText, Share2, BrainCircuit, Briefcase } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Overview', icon: LayoutDashboard },
    { path: '/mindmap', label: 'Mind Map', icon: BrainCircuit },
    { path: '/architecture', label: 'System Architecture', icon: Network },
    { path: '/workflow', label: 'Methodology Flow', icon: GitGraph },
    { path: '/timeline', label: 'Project Timeline', icon: Calendar },
    { path: '/tech-stack', label: 'Tech Stack', icon: Database },
    { path: '/uml', label: 'UML & Structure', icon: FileText },
    { path: '/problem-solution', label: 'Problem vs Solution', icon: Share2 },
    { path: '/applications', label: 'Applications', icon: Briefcase },
  ];

  return (
    <div className="flex h-screen w-full bg-slate-50 text-slate-900 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-slate-900 text-white flex flex-col border-r border-slate-800 shadow-xl">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center space-x-2 text-indigo-400 mb-1">
            <BrainCircuit size={24} />
            <span className="font-bold text-lg tracking-tight">QNN Conscious</span>
          </div>
          <p className="text-xs text-slate-400">FYP Visualization Dashboard</p>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-slate-800 bg-slate-900">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white">
              WR
            </div>
            <div>
              <p className="text-sm font-medium text-white">Waqas Ramzan</p>
              <p className="text-xs text-slate-400">Group Leader</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-slate-50 relative">
        <div className="max-w-7xl mx-auto p-8 pb-20">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;

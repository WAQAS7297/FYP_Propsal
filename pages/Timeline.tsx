import React from 'react';
import { TimelineItem } from '../types';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const Timeline: React.FC = () => {
  const items: TimelineItem[] = [
    { id: '1', task: 'Literature Review', start: 'Sep 2025', end: 'Sep 2025', status: 'completed', category: 'Research' },
    { id: '2', task: 'Proposal Submission', start: 'Sep 2025', end: 'Oct 2025', status: 'completed', category: 'Documentation' },
    { id: '3', task: 'Design QNN Module', start: 'Oct 2025', end: 'Nov 2025', status: 'planned', category: 'Development' },
    { id: '4', task: 'QIIT Framework', start: 'Nov 2025', end: 'Dec 2025', status: 'planned', category: 'Development' },
    { id: '5', task: 'FYP-I Documentation', start: 'Dec 2025', end: 'Dec 2025', status: 'planned', category: 'Documentation' },
    { id: '6', task: 'Entanglement Impl.', start: 'Dec 2025', end: 'Jan 2026', status: 'planned', category: 'Development' },
    { id: '7', task: 'Module Integration', start: 'Jan 2026', end: 'Feb 2026', status: 'planned', category: 'Integration' },
    { id: '8', task: 'Testing & Optimization', start: 'Mar 2026', end: 'Apr 2026', status: 'planned', category: 'Testing' },
    { id: '9', task: 'Final Dissertation', start: 'Apr 2026', end: 'May 2026', status: 'planned', category: 'Documentation' },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-bold text-slate-800">Project Timeline</h2>
        <p className="text-slate-500">Schedule from September 2025 to May 2026.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Task</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Timeline</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50">
                  <td className="px-6 py-3 whitespace-nowrap">
                    {item.status === 'completed' ? (
                      <span className="flex items-center text-emerald-600 text-xs font-bold">
                        <CheckCircle2 size={14} className="mr-1" /> Done
                      </span>
                    ) : (
                      <span className="flex items-center text-slate-400 text-xs">
                        <Circle size={14} className="mr-1" /> Plan
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-3 text-sm text-slate-800 font-medium">{item.task}</td>
                  <td className="px-6 py-3 text-xs text-slate-500">{item.start} - {item.end}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Compact Visual Gantt */}
      <div className="mt-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-md font-bold text-slate-800 mb-4">Visual Schedule</h3>
        <div className="relative h-[400px] border-l border-slate-200 ml-4">
            {items.map((item) => {
                const totalMonths = 9; 
                const startMap: {[key:string]: number} = {'Sep 2025': 0, 'Oct 2025': 1, 'Nov 2025': 2, 'Dec 2025': 3, 'Jan 2026': 4, 'Feb 2026': 5, 'Mar 2026': 6, 'Apr 2026': 7, 'May 2026': 8};
                const startOffset = (startMap[item.start] / totalMonths) * 100;
                const duration = Math.max(1, (startMap[item.end] - startMap[item.start]) + 1);
                const width = (duration / totalMonths) * 100;
                
                return (
                    <div key={item.id} className="relative mb-4 h-6 flex items-center group">
                         {/* Reduced mb-14 to mb-4, h-8 to h-6 */}
                        <div className="w-36 absolute -left-40 text-right text-xs text-slate-500 truncate pr-2" title={item.task}>{item.task}</div>
                        <div 
                            className={`h-5 rounded-sm transition-all cursor-pointer opacity-90 hover:opacity-100
                            ${item.category === 'Development' ? 'bg-indigo-500' : 
                            item.category === 'Documentation' ? 'bg-amber-500' : 
                            item.category === 'Integration' ? 'bg-purple-500' :
                            'bg-slate-400'}`}
                            style={{ width: `${width}%`, marginLeft: `${startOffset}%` }}
                        ></div>
                        <div className="absolute left-full ml-2 text-[10px] text-slate-500 opacity-0 group-hover:opacity-100 bg-white px-1 border rounded z-10">
                            {item.start}-{item.end}
                        </div>
                    </div>
                )
            })}
            <div className="absolute bottom-0 w-full flex justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-100">
                <span>Sep</span>
                <span>Nov</span>
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
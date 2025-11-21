import React from 'react';
import { TimelineItem } from '../types';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const Timeline: React.FC = () => {
  const items: TimelineItem[] = [
    { id: '1', task: 'Literature Review & Background Study', start: 'Sep 2025', end: 'Sep 2025', status: 'completed', category: 'Research' },
    { id: '2', task: 'Problem Refinement & Proposal Submission', start: 'Sep 2025', end: 'Oct 2025', status: 'completed', category: 'Documentation' },
    { id: '3', task: 'Design of Core QNN Module', start: 'Oct 2025', end: 'Nov 2025', status: 'planned', category: 'Development' },
    { id: '4', task: 'Design of QIIT Metric Framework', start: 'Nov 2025', end: 'Dec 2025', status: 'planned', category: 'Development' },
    { id: '5', task: 'FYP-I Report Documentation', start: 'Dec 2025', end: 'Dec 2025', status: 'planned', category: 'Documentation' },
    { id: '6', task: 'Implementation of Entanglement & Agents', start: 'Dec 2025', end: 'Jan 2026', status: 'planned', category: 'Development' },
    { id: '7', task: 'Module Integration (QNN + Analysis)', start: 'Jan 2026', end: 'Feb 2026', status: 'planned', category: 'Integration' },
    { id: '8', task: 'Testing, Debugging & Optimization', start: 'Mar 2026', end: 'Apr 2026', status: 'planned', category: 'Testing' },
    { id: '9', task: 'Final Report & Dissertation', start: 'Apr 2026', end: 'May 2026', status: 'planned', category: 'Documentation' },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-bold text-slate-800">Project Timeline</h2>
        <p className="text-slate-500">Gantt-style schedule from September 2025 to May 2026.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Activity</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Category</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Timeline</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.status === 'completed' ? (
                      <span className="flex items-center text-emerald-600 text-sm font-medium">
                        <CheckCircle2 size={16} className="mr-2" /> Done
                      </span>
                    ) : (
                      <span className="flex items-center text-slate-400 text-sm font-medium">
                        <Circle size={16} className="mr-2" /> Planned
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-slate-900">{item.task}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${item.category === 'Development' ? 'bg-indigo-100 text-indigo-800' : 
                        item.category === 'Documentation' ? 'bg-amber-100 text-amber-800' :
                        item.category === 'Integration' ? 'bg-purple-100 text-purple-800' :
                        'bg-slate-100 text-slate-800'}`}>
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                    <div className="flex items-center">
                      <Clock size={14} className="mr-2 text-slate-400" />
                      {item.start} - {item.end}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Visual Gantt Bar Representation */}
      <div className="mt-8 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-6">Visual Schedule</h3>
        <div className="relative h-[800px] border-l border-slate-200 ml-4">
            {items.map((item, index) => {
                const totalMonths = 9; // Sep to May
                const startMap: {[key:string]: number} = {'Sep 2025': 0, 'Oct 2025': 1, 'Nov 2025': 2, 'Dec 2025': 3, 'Jan 2026': 4, 'Feb 2026': 5, 'Mar 2026': 6, 'Apr 2026': 7, 'May 2026': 8};
                const startOffset = (startMap[item.start] / totalMonths) * 100;
                const duration = Math.max(1, (startMap[item.end] - startMap[item.start]) + 1);
                const width = (duration / totalMonths) * 100;
                
                return (
                    <div key={item.id} className="relative mb-14 h-8 flex items-center group">
                        <div className="w-48 absolute -left-52 text-right text-sm text-slate-600 truncate pr-3 font-medium" title={item.task}>{item.task}</div>
                        <div 
                            className={`h-8 rounded-md transition-all hover:h-9 hover:shadow-md cursor-pointer opacity-90 hover:opacity-100
                            ${item.category === 'Development' ? 'bg-indigo-500' : 
                            item.category === 'Documentation' ? 'bg-amber-500' : 
                            item.category === 'Integration' ? 'bg-purple-500' :
                            'bg-slate-400'}`}
                            style={{ width: `${width}%`, marginLeft: `${startOffset}%` }}
                        ></div>
                        <div className="absolute left-full ml-3 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold bg-white px-2 py-1 rounded shadow border border-slate-100 z-10">
                            {item.start} - {item.end}
                        </div>
                    </div>
                )
            })}
            <div className="absolute bottom-0 w-full flex justify-between text-xs text-slate-400 pt-2 border-t border-slate-100">
                <span>Sep '25</span>
                <span>Nov '25</span>
                <span>Jan '26</span>
                <span>Mar '26</span>
                <span>May '26</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
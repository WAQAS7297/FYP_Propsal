import React from 'react';
import { NodeData, EdgeData } from '../types';

interface DiagramCanvasProps {
  nodes: NodeData[];
  edges: EdgeData[];
  height?: number;
}

const DiagramCanvas: React.FC<DiagramCanvasProps> = ({ nodes, edges, height = 600 }) => {
  return (
    <div className="w-full bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden relative" style={{ height: `${height}px` }}>
      <svg className="w-full h-full pointer-events-none absolute top-0 left-0">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
          </marker>
          <marker id="arrowhead-dashed" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
          </marker>
        </defs>
        {edges.map((edge) => {
          const fromNode = nodes.find((n) => n.id === edge.from);
          const toNode = nodes.find((n) => n.id === edge.to);

          if (!fromNode || !toNode) return null;

          // Simple center-to-center logic calculation
          const startX = fromNode.x + (fromNode.width || 180) / 2;
          const startY = fromNode.y + (fromNode.height || 60) / 2;
          const endX = toNode.x + (toNode.width || 180) / 2;
          const endY = toNode.y + (toNode.height || 60) / 2;

          // Bezier curve for smoother connections
          const controlX1 = startX;
          const controlY1 = startY + (endY - startY) / 2;
          const controlX2 = endX;
          const controlY2 = endY - (endY - startY) / 2;
          
          const path = `M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`;

          return (
            <g key={edge.id}>
              <path
                d={path}
                stroke={edge.dashed ? "#94a3b8" : "#64748b"}
                strokeWidth="2"
                fill="none"
                strokeDasharray={edge.dashed ? "5,5" : "none"}
                markerEnd={edge.dashed ? "url(#arrowhead-dashed)" : "url(#arrowhead)"}
              />
              {edge.label && (
                <rect 
                  x={(startX + endX) / 2 - 40} 
                  y={(startY + endY) / 2 - 10} 
                  width="80" 
                  height="20" 
                  fill="white" 
                  opacity="0.8" 
                />
              )}
              {edge.label && (
                <text
                  x={(startX + endX) / 2}
                  y={(startY + endY) / 2 + 4}
                  textAnchor="middle"
                  className="text-xs font-medium fill-slate-500"
                  style={{ fontSize: '10px' }}
                >
                  {edge.label}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {nodes.map((node) => (
        <div
          key={node.id}
          className={`absolute flex flex-col justify-center items-center p-3 rounded-lg shadow-sm border transition-all hover:shadow-md hover:scale-105 cursor-default
            ${node.type === 'root' ? 'bg-indigo-600 text-white border-indigo-700' : 
              node.type === 'main' ? 'bg-white text-slate-800 border-indigo-200 border-l-4 border-l-indigo-500' :
              node.type === 'process' ? 'bg-emerald-50 text-emerald-900 border-emerald-200 rounded-full' :
              node.type === 'database' ? 'bg-amber-50 text-amber-900 border-amber-200 rounded-none border-x-4' :
              'bg-slate-50 text-slate-700 border-slate-200'}
          `}
          style={{
            left: node.x,
            top: node.y,
            width: node.width || 180,
            height: node.height || 60,
          }}
        >
          <span className={`text-sm font-semibold text-center ${node.type === 'root' ? 'text-white' : ''}`}>
            {node.label}
          </span>
          {node.description && (
            <span className={`text-[10px] mt-1 text-center leading-tight ${node.type === 'root' ? 'text-indigo-100' : 'text-slate-500'}`}>
              {node.description}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default DiagramCanvas;
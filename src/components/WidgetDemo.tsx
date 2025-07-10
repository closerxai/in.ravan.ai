import { useEffect } from 'react';

interface WidgetDemoProps {
  tagName: string;
  agentId: string;
  schema: string;
  type?: string;
}

export const WidgetDemo = ({ tagName, agentId, schema, type }: WidgetDemoProps) => {
  useEffect(() => {
    if (!window.process || !window.process.env) {
      window.process = { env: {} };
    }
  }, []);

  const CustomWidget = tagName;
  const props = { agent_id: agentId, schema };
  if (type) props.type = type;

  return (
    <div className="widget-wrapper">
      <CustomWidget {...props} />
     
    </div>
  );
};


//  <style jsx>{`
//         .widget-wrapper {
//           min-height: 300px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           position: relative;
          
//           /* Orange theme CSS variables for widgets */
//           --widget-primary: #ea580c;
//           --widget-primary-hover: #dc2626;
//           --widget-secondary: #fed7aa;
//           --widget-accent: #f97316;
//           --widget-background: #fff7ed;
//           --widget-surface: #ffffff;
//           --widget-text: #1a1a1a;
//           --widget-text-secondary: #6b7280;
//           --widget-border: #fdba74;
//           --widget-shadow: 0 4px 12px rgba(234, 88, 12, 0.15);
//           --widget-radius: 12px;
//           --widget-spacing: 16px;
//         }
        
//         /* Global widget styling */
//         .widget-wrapper :global(*) {
//           border-radius: var(--widget-radius) !important;
//           font-family: 'Inter', system-ui, sans-serif !important;
//         }
        
//         /* Button styling */
//         .widget-wrapper :global(button) {
//           background: linear-gradient(135deg, var(--widget-primary) 0%, var(--widget-primary-hover) 100%) !important;
//           border: none !important;
//           color: white !important;
//           border-radius: var(--widget-radius) !important;
//           padding: 12px 24px !important;
//           font-weight: 600 !important;
//           font-size: 14px !important;
//           transition: all 0.3s ease !important;
//           box-shadow: var(--widget-shadow) !important;
//           cursor: pointer !important;
//         }
        
//         .widget-wrapper :global(button:hover) {
//           background: linear-gradient(135deg, var(--widget-primary-hover) 0%, #b91c1c 100%) !important;
//           transform: translateY(-2px) !important;
//           box-shadow: 0 8px 25px rgba(234, 88, 12, 0.25) !important;
//         }
        
//         .widget-wrapper :global(button:active) {
//           transform: translateY(0) !important;
//         }
        
//         /* Input styling */
//         .widget-wrapper :global(input) {
//           border: 2px solid var(--widget-border) !important;
//           border-radius: var(--widget-radius) !important;
//           background: var(--widget-surface) !important;
//           color: var(--widget-text) !important;
//           padding: 12px 16px !important;
//           font-size: 14px !important;
//           transition: all 0.3s ease !important;
//           outline: none !important;
//         }
        
//         .widget-wrapper :global(input:focus) {
//           border-color: var(--widget-primary) !important;
//           box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.1) !important;
//         }
        
//         .widget-wrapper :global(input::placeholder) {
//           color: var(--widget-text-secondary) !important;
//         }
        
//         /* Textarea styling */
//         .widget-wrapper :global(textarea) {
//           border: 2px solid var(--widget-border) !important;
//           border-radius: var(--widget-radius) !important;
//           background: var(--widget-surface) !important;
//           color: var(--widget-text) !important;
//           padding: 12px 16px !important;
//           font-size: 14px !important;
//           transition: all 0.3s ease !important;
//           outline: none !important;
//           resize: vertical !important;
//           min-height: 80px !important;
//         }
        
//         .widget-wrapper :global(textarea:focus) {
//           border-color: var(--widget-primary) !important;
//           box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.1) !important;
//         }
        
//         /* Select styling */
//         .widget-wrapper :global(select) {
//           border: 2px solid var(--widget-border) !important;
//           border-radius: var(--widget-radius) !important;
//           background: var(--widget-surface) !important;
//           color: var(--widget-text) !important;
//           padding: 12px 16px !important;
//           font-size: 14px !important;
//           transition: all 0.3s ease !important;
//           outline: none !important;
//           cursor: pointer !important;
//         }
        
//         .widget-wrapper :global(select:focus) {
//           border-color: var(--widget-primary) !important;
//           box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.1) !important;
//         }
        
//         /* Card/Panel styling */
//         .widget-wrapper :global(.card),
//         .widget-wrapper :global(.panel),
//         .widget-wrapper :global([class*="card"]),
//         .widget-wrapper :global([class*="panel"]) {
//           background: var(--widget-surface) !important;
//           border: 1px solid var(--widget-border) !important;
//           border-radius: var(--widget-radius) !important;
//           box-shadow: var(--widget-shadow) !important;
//           padding: var(--widget-spacing) !important;
//         }
        
//         /* Text styling */
//         .widget-wrapper :global(h1),
//         .widget-wrapper :global(h2),
//         .widget-wrapper :global(h3),
//         .widget-wrapper :global(h4),
//         .widget-wrapper :global(h5),
//         .widget-wrapper :global(h6) {
//           color: var(--widget-text) !important;
//           font-weight: 600 !important;
//           margin-bottom: 8px !important;
//         }
        
//         .widget-wrapper :global(p) {
//           color: var(--widget-text) !important;
//           line-height: 1.6 !important;
//           margin-bottom: 12px !important;
//         }
        
//         .widget-wrapper :global(.text-secondary) {
//           color: var(--widget-text-secondary) !important;
//         }
        
//         /* Link styling */
//         .widget-wrapper :global(a) {
//           color: var(--widget-primary) !important;
//           text-decoration: none !important;
//           font-weight: 500 !important;
//           transition: color 0.3s ease !important;
//         }
        
//         .widget-wrapper :global(a:hover) {
//           color: var(--widget-primary-hover) !important;
//           text-decoration: underline !important;
//         }
        
//         /* Loading states */
//         .widget-wrapper :global(.loading) {
//           background: linear-gradient(90deg, var(--widget-secondary) 0%, var(--widget-border) 50%, var(--widget-secondary) 100%) !important;
//           background-size: 200% 100% !important;
//           animation: shimmer 1.5s infinite !important;
//         }
        
//         @keyframes shimmer {
//           0% {
//             background-position: -200% 0;
//           }
//           100% {
//             background-position: 200% 0;
//           }
//         }
        
//         /* Responsive adjustments */
//         @media (max-width: 768px) {
//           .widget-wrapper {
//             min-height: 250px;
//           }
          
//           .widget-wrapper :global(button) {
//             padding: 10px 20px !important;
//             font-size: 13px !important;
//           }
          
//           .widget-wrapper :global(input),
//           .widget-wrapper :global(textarea),
//           .widget-wrapper :global(select) {
//             padding: 10px 14px !important;
//             font-size: 13px !important;
//           }
//         }
        
//         /* Accessibility improvements */
//         .widget-wrapper :global(*:focus) {
//           outline: 2px solid var(--widget-primary) !important;
//           outline-offset: 2px !important;
//         }
        
//         .widget-wrapper :global(button:disabled) {
//           background: #d1d5db !important;
//           color: #9ca3af !important;
//           cursor: not-allowed !important;
//           transform: none !important;
//           box-shadow: none !important;
//         }
//       `}</style>
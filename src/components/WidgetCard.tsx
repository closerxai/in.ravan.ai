import { ReactNode } from 'react';

interface WidgetCardProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const WidgetCard = ({ title, description, children }: WidgetCardProps) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      <div className="relative p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 bg-gray-50 dark:bg-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
};
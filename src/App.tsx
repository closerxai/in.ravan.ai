import { useState, useEffect } from 'react';
import { WidgetCard } from './components/WidgetCard';
import { WidgetDemo } from './components/WidgetDemo';

const widgets = [
  {
    title: 'Video Widget',
    description: 'A widget for video-related interactions with customizable features.',
    tagName: 'react-widget-rvw',
    agentId: 'ca9b354f-41a7-46ab-8e6d-8c56b6a1e727',
    schema: '09483b13-47ac-47b2-95cf-4ca89b3debfa',
  },
  {
    title: 'AI Interaction Widget',
    description: 'An AI-powered widget for user engagement and dynamic content.',
    tagName: 'react-widget-uv',
    agentId: '5f29901d-93d1-48d9-a9bd-d0c6525d26ac',
    schema: '6af30ad4-a50c-4acc-8996-d5f562b6987f',
  },
  {
    title: 'AI Calling Widget',
    description: 'A widget designed for AI-driven calling functionalities.',
    tagName: 'react-widget-ai',
    agentId: 'bd204830-afcb-4dbb-881c-4f7b2d00dd95',
    schema: '21babbd4-cd63-4763-9b08-671951c04470',
    type: 'customwidget',
  },
  {
    title: 'Multi-Thunder Widget',
    description: 'A versatile widget for multiple AI-driven use cases.',
    tagName: 'react-widget-maic',
    agentId: 'bd204830-afcb-4dbb-881c-4f7b2d00dd95',
    schema: '21babbd4-cd63-4763-9b08-671951c04470',
    type: 'customwidget',
  },
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">AI Widget Showcase</h1>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12">
          Discover our suite of AI-powered widgets designed to enhance engagement, streamline operations, and drive conversions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {widgets.map((widget, index) => (
            <WidgetCard
              key={index}
              title={widget.title}
              description={widget.description}
            >
              <WidgetDemo
                tagName={widget.tagName}
                agentId={widget.agentId}
                schema={widget.schema}
                type={widget.type}
              />
            </WidgetCard>
          ))}
        </div>
      </main>
      <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-200 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-600 dark:text-gray-300">
          <p>Powered by Advanced AI Technology</p>
          <p className="mt-2">&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
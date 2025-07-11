import { useState, useEffect } from "react";
import { WidgetDemo } from "./components/WidgetDemo";

const widgets = [
  {
    title: "Video Widget",
    description:
      "A widget for video-related interactions with customizable features and real-time communication capabilities.",
    tagName: "react-widget-rvw",
    agentId: "ca9b354f-41a7-46ab-8e6d-8c56b6a1e727",
    schema: "09483b13-47ac-47b2-95cf-4ca89b3debfa",
  },
  {
    title: "AI Calling Widget",
    description:
      "A widget designed for AI-driven calling functionalities with voice recognition and automated responses.",
    tagName: "react-widget-ai",
    agentId: "bd204830-afcb-4dbb-881c-4f7b2d00dd95",
    schema: "21babbd4-cd63-4763-9b08-671951c04470",
    type: "customwidget",
  },
  {
    title: "Multi-Thunder Widget",
    description:
      "A versatile widget for multiple AI-driven use cases including analytics, automation, and customer support.",
    tagName: "react-widget-maic",
    agentId: "bd204830-afcb-4dbb-881c-4f7b2d00dd95",
    schema: "21babbd4-cd63-4763-9b08-671951c04470",
    type: "customwidget",
  },
];

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <header className="text-center mb-16 lg:mb-20">
            <h1 className=" text-6xl sm:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6" style={{paddingTop:'5rem'}}>
              Widgets Showcase - Ravan.ai
            </h1>
          </header>
          <main className="space-y-16 lg:space-y-20">
            {widgets.map((widget, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="text-center mb-8 lg:mb-10 pt-4 pb-2">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    {widget.title}
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
                    {widget.description}
                  </p>
                </div>
                <div className="relative group">
                  <div className="bg-white/90 bg-gradient-to-br from-white to-orange-50 rounded-2xl p-6 sm:p-8 lg:p-10">
                    <WidgetDemo
                      tagName={widget.tagName}
                      agentId={widget.agentId}
                      schema={widget.schema}
                      type={widget.type}
                    />
                  </div>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
      <div className="p-6 sm:p-8">
        <WidgetDemo
          tagName="react-widget-uv"
          agentId="5f29901d-93d1-48d9-a9bd-d0c6525d26ac"
          schema="6af30ad4-a50c-4acc-8996-d5f562b6987f"
        />
      </div>
    </div>
  );
}

export default App;
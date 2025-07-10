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
      {/* Background decoration */}

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-8 py-16">
          {/* Widgets Section */}
          <main className="space-y-24">
            {widgets.map((widget, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                {/* Widget Header */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    {widget.title}
                  </h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    {widget.description}
                  </p>
                </div>

                {/* Widget Demo Container */}
                <div className="relative group">
                  {/* Gradient background */}

                  {/* Main widget container */}

                  <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 ">
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

      <div className="p-4 h-full">
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

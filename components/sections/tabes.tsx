"use client";
import React, { useState, useEffect, useRef } from 'react';

export const ProfessionalTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabRefs = useRef([]);
  const containerRef = useRef(null);

  // Sample tab data - 20 tabs with content
  const tabs = [
    { id: 0, title: "Dashboard", icon: "📊", content: "Your dashboard provides an overview of key metrics and performance indicators." },
    { id: 1, title: "Analytics", icon: "📈", content: "Dive deep into your data with advanced analytics and visualization tools." },
    { id: 2, title: "Reports", icon: "📝", content: "Generate and customize detailed reports for various aspects of your business." },
    { id: 3, title: "Users", icon: "👥", content: "Manage user accounts, permissions, and access levels across your organization." },
    { id: 4, title: "Settings", icon: "⚙️", content: "Configure system settings and preferences to match your workflow." },
    { id: 5, title: "Billing", icon: "💳", content: "View and manage your subscription, invoices, and payment methods." },
    { id: 6, title: "Notifications", icon: "🔔", content: "Configure and manage your notification preferences across all channels." },
    { id: 7, title: "Integrations", icon: "🔌", content: "Connect and manage third-party integrations with your account." },
    { id: 8, title: "Documents", icon: "📄", content: "Access and manage all your documents in one centralized location." },
    { id: 9, title: "Projects", icon: "📂", content: "Organize and track all your projects with detailed timelines and resources." },
    { id: 10, title: "Tasks", icon: "✅", content: "Create, assign, and monitor tasks for yourself and your team members." },
    { id: 11, title: "Calendar", icon: "📅", content: "Schedule events, meetings, and deadlines with our interactive calendar." },
    { id: 12, title: "Messages", icon: "💬", content: "Communicate with your team through our secure messaging platform." },
    { id: 13, title: "Files", icon: "📁", content: "Upload, organize, and share files with controlled access permissions." },
    { id: 14, title: "Teams", icon: "👪", content: "Create and manage teams to collaborate efficiently on projects." },
    { id: 15, title: "Help Center", icon: "❓", content: "Find answers to common questions and access our knowledge base." },
    { id: 16, title: "Feedback", icon: "💡", content: "Share your feedback and suggestions to help us improve our platform." },
    { id: 17, title: "Security", icon: "🔒", content: "Manage security settings, two-factor authentication, and access logs." },
    { id: 18, title: "Appearance", icon: "🎨", content: "Customize the look and feel of your workspace to match your preferences." },
    { id: 19, title: "API", icon: "🔑", content: "Access API documentation and manage your API keys and permissions." }
  ];

  // Update the indicator position when active tab changes
  useEffect(() => {
    if (tabRefs.current[activeTab]) {
      const activeTabElement = tabRefs.current[activeTab];
      const left = activeTabElement.offsetLeft;
      const width = activeTabElement.offsetWidth;
      
      setIndicatorStyle({
        left: `${left}px`,
        width: `${width}px`,
        opacity: 1
      });
    }
  }, [activeTab]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setActiveTab(prev => (prev + 1) % tabs.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveTab(prev => (prev - 1 + tabs.length) % tabs.length);
      } else if (e.key >= '1' && e.key <= '9') {
        const num = parseInt(e.key);
        if (num <= tabs.length) setActiveTab(num - 1);
      } else if (e.key === '0' && tabs.length >= 10) {
        setActiveTab(9);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [tabs.length]);

  // Scroll to active tab if not fully visible
  useEffect(() => {
    if (tabRefs.current[activeTab] && containerRef.current) {
      const tab = tabRefs.current[activeTab];
      const container = containerRef.current;
      
      const tabLeft = tab.offsetLeft;
      const tabWidth = tab.offsetWidth;
      const containerWidth = container.offsetWidth;
      const scrollLeft = container.scrollLeft;
      
      if (tabLeft < scrollLeft) {
        container.scrollTo({ left: tabLeft, behavior: 'smooth' });
      } else if (tabLeft + tabWidth > scrollLeft + containerWidth) {
        container.scrollTo({ left: tabLeft + tabWidth - containerWidth, behavior: 'smooth' });
      }
    }
  }, [activeTab]);

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-800">Professional Dashboard</h1>
          <p className="text-secondary-600 mt-2">Navigate through different sections using the tabs below</p>
        </div>

        {/* Tabs Container */}
        <div className="relative mb-8">
          {/* Scroll buttons for mobile */}
          <div className="flex justify-between items-center mb-2">
            <button 
              onClick={() => {
                containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
              }}
              className="p-2 rounded-full bg-primary-100 text-primary-700 hidden md:block"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              onClick={() => {
                containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
              }}
              className="p-2 rounded-full bg-primary-100 text-primary-700 hidden md:block"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* Tabs */}
          <div 
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide space-x-1 pb-2"
          >
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                ref={el => tabRefs.current[index] = el}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 rounded-lg tab-transition flex items-center whitespace-nowrap ${
                  activeTab === index
                    ? 'text-primary-700 bg-primary-50 font-semibold'
                    : 'text-secondary-600 hover:bg-secondary-100'
                }`}
                aria-selected={activeTab === index}
                role="tab"
              >
                <span className="mr-2 text-lg">{tab.icon}</span>
                <span>{tab.title}</span>
              </button>
            ))}
          </div>
          
          {/* Active tab indicator */}
          <div 
            className="h-1 bg-primary-500 transition-all duration-300 absolute bottom-0"
            style={indicatorStyle}
          />
        </div>

        {/* Tab Content */}
        <div 
          className="bg-secondary-50 rounded-xl p-6 min-h-[400px] transition-all duration-300"
          role="tabpanel"
        >
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">{tabs[activeTab].icon}</span>
            <h2 className="text-2xl font-semibold text-primary-800">{tabs[activeTab].title}</h2>
          </div>
          <p className="text-secondary-700">{tabs[activeTab].content}</p>
          <div className="mt-6 p-4 bg-white rounded-lg border border-secondary-200">
            <h3 className="text-lg font-medium text-primary-700 mb-2">Additional Information</h3>
            <p className="text-secondary-600">
              This section contains detailed information about {tabs[activeTab].title.toLowerCase()}. 
              You can explore various options and settings related to this feature.
            </p>
          </div>
        </div>

        {/* Tab Navigation Footer */}
        <div className="flex justify-between mt-6">
          <button 
            onClick={() => setActiveTab(prev => (prev - 1 + tabs.length) % tabs.length)}
            className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 transition-colors flex items-center"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Previous
          </button>
          
          <div className="hidden md:flex items-center space-x-2">
            {tabs.slice(0, 5).map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`w-3 h-3 rounded-full ${
                  activeTab === index ? 'bg-primary-500' : 'bg-secondary-300'
                }`}
                aria-label={`Go to ${tab.title}`}
              />
            ))}
            <span className="text-secondary-500">...</span>
            {tabs.slice(-2).map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tabs.length - 2 + index)}
                className={`w-3 h-3 rounded-full ${
                  activeTab === tabs.length - 2 + index ? 'bg-primary-500' : 'bg-secondary-300'
                }`}
                aria-label={`Go to ${tab.title}`}
              />
            ))}
          </div>
          
          <button 
            onClick={() => setActiveTab(prev => (prev + 1) % tabs.length)}
            className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg hover:bg-primary-200 transition-colors flex items-center"
          >
            Next
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

// Add the required CSS styles
export const Styles = () => (
  <style jsx global>{`
    .tab-transition {
      transition: all 0.3s ease;
    }
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `}</style>
);


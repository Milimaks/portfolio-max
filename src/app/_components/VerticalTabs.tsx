import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface TabItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface VerticalTabsProps {
  items: TabItem[];
}

export const VerticalTabs: React.FC<VerticalTabsProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState(items[0].id);

  return (
    <div className="flex min-h-[400px] bg-[#0D1117] text-gray-300">
      {/* Sidebar avec les onglets */}
      <div className="w-48 border-r border-gray-700">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center w-full px-4 py-3 text-left transition-colors ${
              activeTab === item.id
                ? 'bg-[#1C2128] border-l-2 border-[#3FB950] text-white'
                : 'hover:bg-[#1C2128] border-l-2 border-transparent'
            }`}
          >
            <ChevronRight
              className={`w-4 h-4 mr-2 transition-opacity ${
                activeTab === item.id ? 'opacity-100 text-[#3FB950]' : 'opacity-0'
              }`}
            />
            <span className="text-sm font-medium">{item.title}</span>
          </button>
        ))}
      </div>

      {/* Contenu de l'onglet actif */}
      <div className="flex-1 p-6">
        {items.find((item) => item.id === activeTab)?.content}
      </div>
    </div>
  );
};
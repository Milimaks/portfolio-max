"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

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
    <div className="flex min-h-[400px] text-gray-300">
      <div className="w-48 border-r border-gray-700">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center w-full px-4 py-3 text-left transition-colors ${
              activeTab === item.id
                ? "bg-gray-200 border-l-2 border-primary font-heading text-primary"
                : "hover:bg-gray-200 border-l-2 border-transparent"
            }`}
          >
            <ChevronRight
              className={`w-4 h-4 mr-2 transition-opacity ${
                activeTab === item.id ? "opacity-100 text-primary" : "opacity-0"
              }`}
            />
            <span className="text-sm text-primary">{item.title}</span>
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

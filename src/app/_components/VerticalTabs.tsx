"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

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
    <div className="flex  min-h-[400px] text-gray-300 max-md:flex-col">
      <div className="w-full md:w-48 border-b md:border-b-0 md:border-r border-gray-700 overflow-x-auto max-md:flex max-md:border-r-0 max-md:border-b">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center w-full px-4 py-3 text-left font-heading transition-colors ${
              activeTab === item.id
                ? "bg-gray-200 border-b-2 md:border-b-0 md:border-l-2 border-primary "
                : "hover:bg-gray-200 border-b-2 md:border-b-0 md:border-l-2  border-transparent"
            }`}
          >
            <ChevronDown
              className={`w-4 h-4 mr-2 transition-opacity hidden max-md:block  ${
                activeTab === item.id ? "opacity-100 text-primary" : "opacity-0"
              }`}
            />
            <ChevronRight
              className={`w-4 h-4 mr-2 transition-opacity max-md:hidden ${
                activeTab === item.id ? "opacity-100 text-primary" : "opacity-0"
              }`}
            />
            <span
              className={`text-sm ${
                activeTab === item.id ? "text-primary" : "text-primary/60"
              }`}
            >
              {item.title}
            </span>
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

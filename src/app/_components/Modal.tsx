import React from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4">
      <div className="fixed inset-0 bg-black bg-opacity-75" onClick={onClose} />
      <div className="relative bg-[#1C2128] w-full h-full sm:h-auto sm:max-h-[90vh] sm:rounded-lg sm:max-w-4xl overflow-y-auto [scrollbar-gutter:stable]">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white z-10"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="p-4 sm:p-6">{children}</div>
      </div>
    </div>
  );
};

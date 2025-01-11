import React from "react";

interface IconDisplayProps {
  icon: React.ReactNode; // Accepts any icon component
  title?: string; // Optional title
  subtitle?: string; // Optional subtitle
}

const IconDisplay = ({ icon, title, subtitle }: IconDisplayProps) => {
  return (
    <div className="flex flex-col items-center space-x-4 space-y-4 h-60 overflow-hidden">
      <div className="text-4xl bg-slate-900 p-5 rounded-full text-white font-thin">
        {icon}
      </div>
      <div className="mx-auto place-items-center space-y-2">
        {title && (
          <p className="text-lg font-semibold text-center text-slate-900">
            {title}
          </p>
        )}
        {subtitle && (
          <p className="text-sm text-center text-gray-600">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default IconDisplay;

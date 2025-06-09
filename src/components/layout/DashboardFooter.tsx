'use client'

import React from 'react';

interface DashboardFooterProps {
  companyName?: string;
  year?: number;
  technologies?: string[];
}

const DashboardFooter: React.FC<DashboardFooterProps> = ({ 
  companyName = "Sales Dashboard",
  year = 2024,
  technologies = ["Next.js", "TypeScript", "Recharts", "Tailwind CSS"]
}) => {
  return (
    <footer className="pt-8 border-t border-gray-200">
      <div className="text-center text-sm text-gray-500">
        <p>
          &copy; {year} {companyName}. Built with {technologies.join(", ")}.
        </p>
      </div>
    </footer>
  );
};

export default DashboardFooter;
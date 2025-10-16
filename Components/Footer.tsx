
import React from 'react';

const AlertIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
    </svg>
);


export const Footer: React.FC = () => (
  <footer className="w-full py-6 bg-gray-900 border-t border-gray-800">
    <div className="container mx-auto px-4 max-w-4xl text-center text-sm text-gray-500">
        <div className="flex items-center justify-center gap-2">
            <AlertIcon className="w-5 h-5 text-yellow-500" />
            <p>
                This tool is for educational and authorized security testing purposes only. 
                Use responsibly and with permission.
            </p>
        </div>
    </div>
  </footer>
);

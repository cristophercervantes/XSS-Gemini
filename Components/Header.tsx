
import React from 'react';

const TerminalIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M6.75 3.375a3.375 3.375 0 00-3.375 3.375v10.5a3.375 3.375 0 003.375 3.375h10.5a3.375 3.375 0 003.375-3.375V6.75a3.375 3.375 0 00-3.375-3.375H6.75zM8.25 8.625a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zm-1.5 3.375a.75.75 0 000 1.5h6.75a.75.75 0 000-1.5H6.75z"
      clipRule="evenodd"
    />
  </svg>
);

export const Header: React.FC = () => (
  <header className="text-center mb-8">
    <div className="flex items-center justify-center gap-3 mb-2">
      <TerminalIcon className="w-8 h-8 text-cyan-400" />
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        XSS Payload Generator
      </h1>
    </div>
    <p className="mt-4 text-lg text-gray-400">
      Craft advanced XSS payloads with AI for security research and penetration testing.
    </p>
  </header>
);

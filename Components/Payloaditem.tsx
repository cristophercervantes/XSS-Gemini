
import React, { useState } from 'react';
import type { Payload } from '../types';

interface PayloadItemProps {
  payload: Payload;
}

const CopyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
    </svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
);


export const PayloadItem: React.FC<PayloadItemProps> = ({ payload }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(payload.payload).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden transition-shadow hover:shadow-lg hover:shadow-cyan-900/20">
      <div className="p-4">
        <p className="text-gray-400 text-sm mb-2">{payload.description}</p>
        <div className="relative bg-gray-900 rounded-md p-3 group">
          <pre className="text-cyan-300 text-sm overflow-x-auto whitespace-pre-wrap break-all">
            <code>{payload.payload}</code>
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 p-1.5 bg-gray-700 text-gray-300 rounded-md opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-200 hover:bg-cyan-600 hover:text-white"
            aria-label="Copy payload"
          >
            {copied ? <CheckIcon className="w-5 h-5 text-green-400" /> : <CopyIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
};

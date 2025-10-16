
import React from 'react';
import type { Payload } from '../types';
import { PayloadItem } from './PayloadItem';

interface PayloadListProps {
  payloads: Payload[];
  isLoading: boolean;
  error: string | null;
}

const LoadingSkeleton: React.FC = () => (
    <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded-lg animate-pulse">
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-3"></div>
                <div className="h-8 bg-gray-700 rounded mt-1"></div>
            </div>
        ))}
    </div>
);


export const PayloadList: React.FC<PayloadListProps> = ({ payloads, isLoading, error }) => {
  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg text-center">
        <p className="font-bold">Error</p>
        <p>{error}</p>
      </div>
    );
  }

  if (payloads.length === 0) {
    return (
      <div className="text-center py-10 px-4 border-2 border-dashed border-gray-700 rounded-lg">
        <p className="text-gray-500">Your generated payloads will appear here.</p>
        <p className="text-gray-600 text-sm mt-1">Describe what you want to achieve, and let the AI assist.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-cyan-400 border-b-2 border-gray-700 pb-2">Generated Payloads</h2>
      {payloads.map((p, index) => (
        <PayloadItem key={index} payload={p} />
      ))}
    </div>
  );
};

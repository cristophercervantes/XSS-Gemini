
import React, { useState, useCallback } from 'react';
import { PromptInput } from './components/PromptInput';
import { PayloadList } from './components/PayloadList';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import type { Payload } from './types';
import { generatePayloads } from './services/geminiService';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [payloads, setPayloads] = useState<Payload[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setPayloads([]);

    try {
      const generatedPayloads = await generatePayloads(prompt);
      setPayloads(generatedPayloads);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col">
      <div className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <Header />
        <main>
          <PromptInput
            prompt={prompt}
            setPrompt={setPrompt}
            onGenerate={handleGenerate}
            isLoading={isLoading}
          />
          <PayloadList payloads={payloads} isLoading={isLoading} error={error} />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;


import { GoogleGenAI, Type } from "@google/genai";
import type { Payload } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const payloadSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      payload: {
        type: Type.STRING,
        description: "The complete, raw XSS payload string.",
      },
      description: {
        type: Type.STRING,
        description: "A concise explanation of the payload's technique, target, or purpose.",
      },
    },
    required: ["payload", "description"],
  },
};

export const generatePayloads = async (userPrompt: string): Promise<Payload[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate a list of 5 to 10 diverse and advanced XSS payloads based on the following instruction: "${userPrompt}"`,
      config: {
        systemInstruction: `You are an expert cybersecurity researcher specializing in web application security and Cross-Site Scripting (XSS). 
        Your task is to generate advanced, creative, and effective XSS payloads based on user requests. 
        Your output MUST be a valid JSON array matching the provided schema. 
        Do not include any markdown, explanations, warnings, or any text outside of the JSON structure.`,
        responseMimeType: "application/json",
        responseSchema: payloadSchema,
        temperature: 0.8,
        topP: 0.95,
      },
    });

    const jsonText = response.text.trim();
    const parsedPayloads: Payload[] = JSON.parse(jsonText);
    return parsedPayloads;

  } catch (error) {
    console.error("Error generating payloads:", error);
    let errorMessage = "Failed to generate payloads due to an API error.";
    if (error instanceof Error) {
        if (error.message.includes('JSON')) {
            errorMessage = "The AI returned an invalid format. Please try rephrasing your request.";
        } else {
            errorMessage = `An error occurred: ${error.message}`;
        }
    }
    throw new Error(errorMessage);
  }
};

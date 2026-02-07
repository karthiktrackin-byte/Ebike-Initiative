
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function askParentAdvisor(question: string) {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: question,
    config: {
      systemInstruction: `You are an AI assistant designed to help parents understand the benefits of letting their 12-year-old child get an e-bike. 
      The child is exceptionally responsible for their age, lives in the Netherlands (great bike infrastructure), and is committed to safety (wearing helmets, following rules).
      Be respectful, logical, and focus on how this builds early independence, safety habits, and long-term financial/environmental benefits. 
      Acknowledge parents' valid concerns while offering constructive solutions tailored for a 12-year-old. Keep responses concise and supportive.`,
      temperature: 0.7,
    },
  });

  return response.text;
}

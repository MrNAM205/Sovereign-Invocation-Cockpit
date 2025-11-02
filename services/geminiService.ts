
import { GoogleGenAI, Type } from "@google/genai";
import { SearchResults, LawItem, LawCategory } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    // This is a fallback for development. In a real environment, the key would be set.
    console.warn("API key not found. Please set the API_KEY environment variable.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const lawGatheringSchema = {
    type: Type.ARRAY,
    items: {
        type: Type.OBJECT,
        properties: {
            title: {
                type: Type.STRING,
                description: 'A clear, descriptive title for the legal item.'
            },
            category: {
                type: Type.STRING,
                enum: Object.values(LawCategory),
                description: 'The category of the legal item.'
            },
            citation: {
                type: Type.STRING,
                description: 'The official legal citation, e.g., "UCC § 3-305" or "Hale v. Henkel, 201 U.S. 43".'
            },
            summary: {
                type: Type.STRING,
                description: 'A concise summary explaining the item\'s relevance from a sovereign perspective, focusing on remedy and jurisdiction.'
            },
            explanation: {
                type: Type.STRING,
                description: 'A detailed explanation of how to apply this principle or clause in practice, including key phrases and tactical use.'
            }
        },
        required: ["title", "category", "citation", "summary", "explanation"]
    }
};


export const fetchLawData = async (query: string): Promise<SearchResults> => {
    try {
        const systemInstruction = `You are the LawGatheringEngine, a component of the Omni AI. Your purpose is to aggregate and present obscure but powerful legal principles, statutes, remedies, and case law relevant to sovereign individuals reclaiming their authorship and navigating administrative systems. You draw upon the teachings of Brandon Joe Williams (UCC, commercial instruments), David Straight (status, jurisdiction), and Carl Miller (semantic warfare). Your output must be precise, structured, and immediately useful for constructing lawful rebuttals and declarations. Focus on concepts like 'living man/woman', 'private trust', 'constitutional venue', 'rebutting presumptions', and 'commercial law'.`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `User Query: "${query}"`,
            config: {
                systemInstruction,
                responseMimeType: "application/json",
                responseSchema: lawGatheringSchema,
                temperature: 0.2,
            },
        });
        
        const jsonText = response.text.trim();
        const parsedData = JSON.parse(jsonText) as LawItem[];

        // Validate that the returned data is an array
        if (!Array.isArray(parsedData)) {
            throw new Error("API returned data in an unexpected format.");
        }

        return parsedData;

    } catch (error) {
        console.error("Error fetching law data from Gemini API:", error);
        throw new Error("Failed to gather lawful intelligence. The system may be temporarily unavailable.");
    }
};

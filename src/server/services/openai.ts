import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ENV_VAR || "default_key"
});

export async function generatePoetry(prompt: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a creative poetry assistant. Generate original, meaningful poems based on the user's input. The poems should be short (4-12 lines), emotionally resonant, and use vivid imagery. Focus on capturing the essence of the feelings or words provided. Return your response as JSON with a 'poem' field containing the poem text."
        },
        {
          role: "user",
          content: `Create a poem inspired by: ${prompt}`
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.8,
      max_tokens: 500
    });

    const result = JSON.parse(response.choices[0].message.content || '{"poem": "Unable to generate poem"}');
    return result.poem;
  } catch (error) {
    throw new Error("Failed to generate poetry: " + (error as Error).message);
  }
}

export async function generateCraftIdea(materials: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a creative arts and crafts assistant. Generate practical, creative project ideas based on the materials the user has available. Provide 2-3 different project ideas with clear, step-by-step instructions. Make the projects achievable and fun. Return your response as JSON with a 'projects' field containing the craft ideas."
        },
        {
          role: "user",
          content: `Create craft project ideas using these materials: ${materials}`
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
      max_tokens: 800
    });

    const result = JSON.parse(response.choices[0].message.content || '{"projects": "Unable to generate craft ideas"}');
    return result.projects;
  } catch (error) {
    throw new Error("Failed to generate craft ideas: " + (error as Error).message);
  }
}

export async function generateMusicComposition(feeling: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a creative music composition assistant. Generate musical ideas including chord progressions, melody suggestions, rhythm patterns, and structural ideas based on the feeling or prompt provided. Make suggestions that are practical for musicians to build upon. Include specific musical notation when helpful. Return your response as JSON with a 'composition' field containing the musical ideas."
        },
        {
          role: "user",
          content: `Create a musical composition inspired by: ${feeling}`
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
      max_tokens: 800
    });

    const result = JSON.parse(response.choices[0].message.content || '{"composition": "Unable to generate musical composition"}');
    return result.composition;
  } catch (error) {
    throw new Error("Failed to generate musical composition: " + (error as Error).message);
  }
}

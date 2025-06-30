import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertGenerationSchema } from "@shared/schema";
import { generatePoetry, generateCraftIdea, generateMusicComposition } from "./services/openai";

export async function registerRoutes(app: Express): Promise<Server> {
  // Poetry generation endpoint
  app.post("/api/generate/poetry", async (req, res) => {
    try {
      const { prompt } = req.body;
      
      if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
        return res.status(400).json({ error: "Prompt is required and must be a non-empty string" });
      }

      const response = await generatePoetry(prompt.trim());
      
      // Store the generation
      await storage.createGeneration({
        type: "poetry",
        prompt: prompt.trim(),
        response
      });

      res.json({ response });
    } catch (error) {
      console.error("Poetry generation error:", error);
      res.status(500).json({ error: "Failed to generate poetry. Please try again." });
    }
  });

  // Crafts generation endpoint
  app.post("/api/generate/crafts", async (req, res) => {
    try {
      const { prompt } = req.body;
      
      if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
        return res.status(400).json({ error: "Materials list is required and must be a non-empty string" });
      }

      const response = await generateCraftIdea(prompt.trim());
      
      // Store the generation
      await storage.createGeneration({
        type: "crafts",
        prompt: prompt.trim(),
        response
      });

      res.json({ response });
    } catch (error) {
      console.error("Crafts generation error:", error);
      res.status(500).json({ error: "Failed to generate craft ideas. Please try again." });
    }
  });

  // Music generation endpoint
  app.post("/api/generate/music", async (req, res) => {
    try {
      const { prompt } = req.body;
      
      if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
        return res.status(400).json({ error: "Feeling or prompt is required and must be a non-empty string" });
      }

      const response = await generateMusicComposition(prompt.trim());
      
      // Store the generation
      await storage.createGeneration({
        type: "music",
        prompt: prompt.trim(),
        response
      });

      res.json({ response });
    } catch (error) {
      console.error("Music generation error:", error);
      res.status(500).json({ error: "Failed to generate musical composition. Please try again." });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

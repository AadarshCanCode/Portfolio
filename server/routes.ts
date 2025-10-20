import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { contactFormSchema, chatRequestSchema } from "@shared/schema";
import { chatWithPortfolioAssistant } from "./lib/gemini";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);
      
      // Log contact form submission
      console.log("Contact form submission:", {
        name: data.name,
        email: data.email,
        message: data.message,
        timestamp: new Date().toISOString(),
      });

      // In a real application, you would:
      // - Send an email notification
      // - Save to database
      // - Send confirmation email to user
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          error: "Invalid form data", 
          details: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          error: "Failed to process contact form" 
        });
      }
    }
  });

  // AI chatbot endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const data = chatRequestSchema.parse(req.body);
      
      const response = await chatWithPortfolioAssistant(
        data.message,
        data.conversationHistory
      );

      res.json({ 
        success: true, 
        response 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          error: "Invalid request data", 
          details: error.errors 
        });
      } else {
        console.error("Chat API error:", error);
        res.status(500).json({ 
          success: false, 
          error: "Failed to generate response" 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

import { z } from "zod";

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;

// AI Chat Message Schema
export const chatMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string(),
});

export type ChatMessage = z.infer<typeof chatMessageSchema>;

export const chatRequestSchema = z.object({
  message: z.string().min(1, "Message cannot be empty"),
  conversationHistory: z.array(chatMessageSchema).optional(),
});

export type ChatRequest = z.infer<typeof chatRequestSchema>;

// Project Data Types
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  highlights: string[];
  date: string;
  slug: string;
  featured?: boolean;
}

// Experience Data Types
export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  achievements: string[];
  current?: boolean;
}

// Education Data Types
export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

// Achievement Data Types
export interface Achievement {
  id: string;
  title: string;
  description: string;
  date?: string;
  icon?: string;
}

// Skill/Technology Types
export interface Skill {
  name: string;
  category: string;
}

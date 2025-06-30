# Artist Block Creative Generator

## Overview

A React-based creative assistance application that helps users overcome artist's block by generating AI-powered content across three creative domains: poetry, crafts, and music composition. The application uses OpenAI's GPT-4o to provide personalized creative inspiration based on user prompts.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for development and production builds
- **Styling**: TailwindCSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (@tanstack/react-query) for API state management
- **UI Components**: Extensive use of Radix UI primitives through shadcn/ui

### Backend Architecture
- **Runtime**: Node.js with Express server
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful endpoints for generation services
- **Storage**: In-memory storage with interface for future database integration
- **AI Integration**: OpenAI GPT-4o for content generation

### Data Storage Solutions
- **Current**: PostgreSQL database with Drizzle ORM
- **Schema**: Drizzle ORM schema with users and generations tables
- **Database**: Live PostgreSQL connection via Neon serverless driver

## Key Components

### Creative Generation Services
1. **Poetry Generator** (`/api/generate/poetry`)
   - Generates 4-12 line poems based on user prompts
   - Uses emotionally resonant language and vivid imagery

2. **Crafts Generator** (`/api/generate/crafts`)
   - Creates project ideas based on available materials
   - Provides 2-3 different project suggestions with clear instructions

3. **Music Generator** (`/api/generate/music`)
   - Generates musical composition ideas and chord progressions
   - Based on user's mood or musical preferences

### UI Components
- **Home Page**: Landing page with three creative category cards
- **Generator Pages**: Dedicated interfaces for each creative type
- **Responsive Design**: Mobile-first approach with Tailwind utilities
- **Loading States**: Custom spinner component for generation feedback
- **Toast Notifications**: User feedback for errors and success states

### Shared Components
- **Schema Definitions**: Type-safe database models using Drizzle and Zod
- **API Client**: Centralized request handling with error management
- **Custom Hooks**: Mobile detection and toast notification management

## Data Flow

1. **User Input**: User enters creative prompt on generator page
2. **Client Validation**: Form validation ensures non-empty prompts
3. **API Request**: React Query handles POST request to generation endpoint
4. **AI Processing**: Server calls OpenAI API with structured prompts
5. **Data Storage**: Generated content stored in memory with metadata
6. **Response Handling**: Client receives generated content and displays results
7. **Error Management**: Comprehensive error handling with user-friendly messages

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Database connection (prepared for Neon PostgreSQL)
- **openai**: Official OpenAI SDK for AI content generation
- **drizzle-orm**: Type-safe ORM for database operations
- **wouter**: Lightweight React router
- **@tanstack/react-query**: Server state management

### UI Dependencies
- **@radix-ui/**: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for components
- **lucide-react**: Icon library for consistent iconography

### Development Dependencies
- **vite**: Fast development server and build tool
- **typescript**: Type safety and developer experience
- **@replit/vite-plugin-***: Replit-specific development enhancements

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev` - Runs development server with hot reload
- **Port**: Vite dev server with Express API backend
- **Environment Variables**: OpenAI API key configuration required

### Production Build
- **Frontend**: `vite build` compiles React app to static assets
- **Backend**: `esbuild` bundles Express server for Node.js deployment
- **Output**: `dist/` directory contains production-ready application
- **Start**: `npm start` runs production server

### Database Migration
- **Schema Push**: `npm run db:push` applies Drizzle schema to database
- **Migration Files**: Generated in `./migrations` directory
- **Environment**: Requires `DATABASE_URL` for PostgreSQL connection

### Environment Configuration
- **Development**: Uses local development server
- **Production**: Optimized builds with proper error handling
- **Database**: PostgreSQL via environment variable configuration
- **API Keys**: OpenAI API key required for AI functionality

## Changelog
- June 28, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.
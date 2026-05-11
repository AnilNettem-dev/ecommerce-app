Ecommerce App Monorepo

A modern full-stack ecommerce application built with a scalable monorepo architecture using Turborepo.

This project is focused on learning and implementing real-world frontend and backend architecture patterns including:

Feature-based frontend architecture
Design system architecture
JWT authentication
Protected layouts
API abstraction layer
Zustand state management
NestJS backend architecture
Monorepo scalability patterns
Tech Stack
Frontend (apps/web)
Next.js
React
Tailwind CSS
Shadcn/UI
Zustand
TypeScript
Backend (apps/api)
NestJS
Prisma
JWT Authentication
Refresh Tokens
Swagger API Documentation
Monorepo Tooling
Turborepo
ESLint
Prettier
TypeScript
Current Features
Authentication
JWT Login
Refresh Tokens
Protected Routes
Protected Layouts
Zustand Persisted Auth State
Frontend Architecture
Feature-based folder structure
Shared UI layer
API client abstraction
Manual form state management
Reusable design-system components
UI System
TailwindCSS setup
Shadcn component architecture
Reusable Button/Input components
Shared utility layer
Project Structure
apps/
  web/        → Next.js frontend
  api/        → NestJS backend

src/
  app/        → App router pages/layouts
  features/   → Feature modules
  shared/     → Shared UI/lib/hooks
  services/   → API/service layer
  store/      → Zustand stores
Getting Started
Install dependencies
npm install
Run Development Servers

From root:

npm run dev

This starts:

Frontend → http://localhost:3000
Backend → http://localhost:3001
Swagger API Docs

Available at:

http://localhost:3001/api
Build
npm run build
Learning Goals

This project is being built with a strong focus on learning:

Frontend architecture
React scalability patterns
Design systems
Authentication systems
API orchestration
Monorepo architecture
Full-stack TypeScript development
Future Improvements
React Hook Form + Zod
Role-based authorization
Product catalog
Cart & checkout
Admin dashboard
Theme system
Shared UI package
CI/CD pipeline
Docker deployment
Author

Built by Anil Kumar Nettem.

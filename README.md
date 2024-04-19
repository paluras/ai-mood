![Alt text](https://github.com/paluras/ai-mood/assets/98059798/9f37fc65-c477-4a3f-8c6b-2571bd83ca08)


# AI Mood Tracker Journal

AI Mood Tracker Journal is a Next.js application built with React 18, utilizing both new Server Components and Server Actions to optimize performance and user experience. This app helps users track their daily moods using AI technology, provided by LangChain, and visualize emotional trends over time. Authentication is managed securely via Clerk, and data is efficiently handled using Neon DB with Prisma ORM.


## Features

- **Mood Logging:** Users can log their mood along with a brief journal entry.
- **AI Mood Analysis:** Utilizes LangChain to analyze journal entries and assess the user's mood.
- **Mood Visualization:** Graphs and charts to visualize mood trends over time.
- **Secure Authentication:** Uses Clerk for user authentication and session management.
- **Data Management:** Prisma ORM with Neon DB for robust and scalable data storage.

## Technologies Used

- **[Next.js](https://nextjs.org/)** - The React framework for production.
- **[LangChain](https://langchain.com/)** - AI integration for natural language processing.
- **[Neon](https://www.neon.tech/)** - PostgreSQL-compatible database as a service.
- **[Prisma](https://www.prisma.io/)** - Next-generation ORM for Node.js and TypeScript.
- **[Clerk](https://clerk.dev/)** - Complete authentication solution.
- **[Zod](https://github.com/colinhacks/zod)** - TypeScript-first schema validation with static type inference.

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm/yarn
- A Neon DB account
- Clerk account for authentication

### Installation

1. **Clone the repository**

npm install
npm run dev

Open http://localhost:3000 with your browser to see the result.

Usage
After logging in, users can start logging their daily journal entries. The AI system will analyze the text to determine the mood and provide visual feedback in the form of graphs and charts based on the mood scores over time.

# Initialize Frontend

Initialize the frontend directory using Vite with React TypeScript. This command will:

1. Check if `frontend/` directory already exists (warns if it does)
2. Detect available package manager (prefers `bun`, falls back to `npm`)
3. Scaffold a new Vite + React + TypeScript project in the `frontend/` directory
4. Configure Vite to proxy `/api` requests to the backend during development
5. Set up Tailwind CSS for styling
6. Initialize shadcn/ui component library

## Steps

1. **Check for existing frontend directory:**
   - If `frontend/` exists and is not empty, warn the user and ask for confirmation before proceeding
   - If empty or doesn't exist, proceed

2. **Detect package manager:**
   - Check if `bun` is available: `command -v bun`
   - If bun is available, use `bun` for all operations
   - Otherwise, fall back to `npm`
   - Store the detected package manager in a variable for consistent use

3. **Scaffold Vite project:**
   - Run: `bun create vite frontend --template react-ts` (if using bun)
   - Or: `npm create vite@latest frontend -- --template react-ts` (if using npm)
   - This creates the frontend directory with React TypeScript template

4. **Install initial dependencies:**
   - Navigate to `frontend/` directory
   - Install `@types/node` as dev dependency:
     - `bun add -d @types/node` (if using bun)
     - `npm install -D @types/node` (if using npm)
   - Install Tailwind CSS with Vite plugin:
     - `bun add tailwindcss @tailwindcss/vite` (if using bun)
     - `npm install tailwindcss @tailwindcss/vite` (if using npm)

5. **Configure Vite (proxy, path aliases, Tailwind):**
   - Update `frontend/vite.config.ts` to add proxy, path aliases, and Tailwind plugin:
   ```typescript
   import path from "path"
   import tailwindcss from "@tailwindcss/vite"
   import react from "@vitejs/plugin-react"
   import { defineConfig } from "vite"

   export default defineConfig({
     plugins: [react(), tailwindcss()],
     resolve: {
       alias: {
         "@": path.resolve(__dirname, "./src"),
       },
     },
     server: {
       proxy: {
         '/api': {
           target: 'http://localhost:8000',
           changeOrigin: true,
         },
       },
     },
   })
   ```

6. **Configure TypeScript path aliases:**
   - Edit `frontend/tsconfig.json` to add `baseUrl` and `paths` in `compilerOptions`:
     ```json
     {
       "files": [],
       "references": [
         { "path": "./tsconfig.app.json" },
         { "path": "./tsconfig.node.json" }
       ],
       "compilerOptions": {
         "baseUrl": ".",
         "paths": {
           "@/*": ["./src/*"]
         }
       }
     }
     ```
   - Edit `frontend/tsconfig.app.json` to add the same `baseUrl` and `paths`:
     ```json
     {
       "compilerOptions": {
         // ... existing options
         "baseUrl": ".",
         "paths": {
           "@/*": ["./src/*"]
         }
         // ... rest of options
       }
     }
     ```

7. **Set up Tailwind CSS (official shadcn/ui method):**
   - Replace everything in `src/index.css` with:
     ```css
     @import "tailwindcss";
     ```

8. **Install remaining dependencies:**
   - Run: `bun install` (if using bun) or `npm install` (if using npm)

9. **Initialize shadcn/ui:**
   - Run: `bunx shadcn@latest init` (or `npx shadcn@latest init`) from the `frontend/` directory
   - Accept default prompts (or configure as needed):
     - Style: Default
     - Base color: Slate
     - CSS variables: Yes
   - This creates `components.json` and sets up the `src/components/ui/` directory structure
   - Note: shadcn/ui components are copied into your project (not installed as npm package)

10. **Update package.json scripts (if needed):**
   - Ensure scripts use the detected package manager consistently
   - If using bun, scripts can use `bun` directly

11. **Add API endpoint check to App.tsx:**
   - Update `frontend/src/App.tsx` to include an API check on component mount
   - Add a `useEffect` hook that calls `/api/hello` endpoint
   - Display the API message in the UI
   - Example implementation:
   ```typescript
   import { useState, useEffect } from 'react'
   import reactLogo from './assets/react.svg'
   import viteLogo from '/vite.svg'
   import './App.css'

   function App() {
     const [count, setCount] = useState(0)
     const [apiMessage, setApiMessage] = useState<string>('loading...')

     useEffect(() => {
       fetch('/api/hello')
         .then(res => res.json())
         .then(data => setApiMessage(data.message))
         .catch(err => setApiMessage('error: ' + err.message))
     }, [])

     return (
       <>
         {/* existing JSX */}
         <p>API: {apiMessage}</p>
       </>
     )
   }
   ```
   - The Vite proxy configuration already handles `/api` requests, so `/api/hello` will be proxied to `http://localhost:8000/api/hello`
   - The `/api/hello` endpoint returns `{ message: "Hello from FastAPI!" }`, so access `data.message` (not `data.status`)

## Notes

- The command should be run from the monorepo root directory
- This avoids maintaining static frontend files in the template
- Users get the latest Vite and React versions automatically
- Bun is preferred for faster installs, but npm is a reliable fallback
- Tailwind CSS uses the new `@tailwindcss/vite` plugin (no separate config file needed)
- shadcn/ui follows official Vite installation guide: https://ui.shadcn.com/docs/installation/vite
- ESLint config is included in the Vite React TypeScript template
- To add shadcn components later: `bunx shadcn@latest add <component-name>` (or `npx shadcn@latest add <component-name>`)

# melaniemcd-ai

A Next.js portfolio for Melanie McDonough with space for work samples, demos, and practical local government updates. Built for the Next.js App Router with TypeScript and Tailwind CSS so it can be deployed easily on Replit or other hosts.

## Project purpose
- Showcase work, demos, playbooks, and writing in a cohesive portfolio.
- Provide a lightweight newsletter capture flow with a modal and motion-aware confetti.
- Keep the design clean, accessible, and keyboard-friendly.

## Getting started locally
1. Ensure you have Node.js 18+ installed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deploying on Replit
1. Create a new Replit project and import this repository.
2. Set the run command to start the Next.js dev server in production mode (Replit uses `npm start` by default after `npm install`).
3. Add a `.replit` file if you want to customize the run command:
   ```
   run = "npm install && npm run dev -- --hostname 0.0.0.0 --port 3000"
   ```
4. Click **Run**. Replit will install dependencies and serve the Next.js app at the provided URL.

## Newsletter integration
The `SubscribeCTA` component (in `components/SubscribeCTA.tsx`) currently uses a placeholder submit handler that always succeeds. To wire up a real provider later (e.g., Mailchimp, Buttondown, Revue, custom API):
- Replace the `handleSubmit` logic with your API call.
- Surface validation errors in place of the placeholder success state.
- Keep the `triggerConfetti` function to maintain the lightweight celebration for successful subscriptions (with respect to `prefers-reduced-motion`).

## Scripts
- `npm run dev` – start the development server.
- `npm run build` – create an optimized production build.
- `npm run start` – run the production server.
- `npm run lint` – lint the codebase.

## Notes on accessibility
- Modal focus trapping, escape handling, and overlay closing are implemented in `SubscribeCTA`.
- Components use Tailwind focus-visible styles for clear keyboard outlines.

## Contributing
Feel free to open an issue or PR with improvements. Please avoid committing secrets; `.gitignore` excludes common environment files.

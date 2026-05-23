import 'dotenv/config';
import express from 'express';
import path from 'path';
import { generateRouter } from './server/api.js';

console.log("Starting Cloud Run server...");
console.log("PORT:", process.env.PORT);
console.log("GOOGLE_CLOUD_PROJECT:", process.env.GOOGLE_CLOUD_PROJECT);
console.log("GOOGLE_CLOUD_LOCATION:", process.env.GOOGLE_CLOUD_LOCATION);
console.log("GOOGLE_GENAI_USE_VERTEXAI:", process.env.GOOGLE_GENAI_USE_VERTEXAI);

async function startServer() {
  const app = express();
  const port = Number(process.env.PORT || 8080);

  app.use(express.json({ limit: '10mb' }));

  // Mount API routes
  app.use('/api', generateRouter);

  // Fallback endpoint to ensure /rpc format behaves cleanly if it was requested, though this app uses /api/generate 
  app.post('/rpc', (req, res) => {
    res.status(404).json({ success: false, error: "Not Implemented. Use /api routes." });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    console.log("Loading Vite in development mode...");
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    console.log("Loading production static files fallback...");
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});

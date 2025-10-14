import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { renderToString } from 'react-dom/server';
import React from 'react';
import App from '../src/App.jsx';
import { HelmetProvider } from 'react-helmet-async';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Serve static files from dist and public
app.use('/assets', express.static(path.join(__dirname, '../dist/assets')));
app.use(express.static(path.join(__dirname, '../public')));

app.get('*', async (req, res) => {
  try {
    const helmetContext = {};
    
    const appHtml = renderToString(
      <HelmetProvider context={helmetContext}>
        <App />
      </HelmetProvider>
    );
    
    const { helmet } = helmetContext;
    
    // Read and transform your index.html
    const templatePath = path.resolve(__dirname, '../dist/index.html');
    let template = fs.readFileSync(templatePath, 'utf-8');
    
    // Replace placeholders with rendered content
    const html = template
      .replace('<!--ssr-outlet-->', appHtml)
      .replace('<!--helmet-meta-->', 
        helmet.meta.toString() + 
        helmet.title.toString() + 
        helmet.link.toString()
      );
    
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).send('Server Error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
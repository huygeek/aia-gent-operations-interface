#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Theme deployment script for AI Agent Operations Interface
// This script prepares the theme for deployment to a web server

const THEME_PATH = path.join(__dirname, '../themes/custom-theme.json');
const OUTPUT_PATH = path.join(__dirname, '../public/themes/custom-theme.json');

// Ensure output directory exists
const outputDir = path.dirname(OUTPUT_PATH);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Copy theme to public directory for web access
try {
  const themeContent = fs.readFileSync(THEME_PATH, 'utf8');
  fs.writeFileSync(OUTPUT_PATH, themeContent);
  
  console.log('✅ Theme deployed successfully!');
  console.log(`📁 Theme location: ${OUTPUT_PATH}`);
  console.log('');
  console.log('🌐 To use this theme with shadcn/ui:');
  console.log('pnpm dlx shadcn@latest add https://your-domain.com/themes/custom-theme.json');
  console.log('');
  console.log('📋 For local development:');
  console.log('pnpm dlx shadcn@latest add ./public/themes/custom-theme.json');
  console.log('');
  console.log('🚀 To deploy to GitHub Pages:');
  console.log('1. Push this repository to GitHub');
  console.log('2. Enable GitHub Pages in repository settings');
  console.log('3. Use: pnpm dlx shadcn@latest add https://username.github.io/repo-name/themes/custom-theme.json');
  
} catch (error) {
  console.error('❌ Error deploying theme:', error.message);
  process.exit(1);
} 
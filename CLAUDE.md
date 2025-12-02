# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

UIC College of Business Administration AI Council website deployed to Vercel via GitHub.

**GitHub Repository**: https://github.com/dent424/uic-cba-ai-council-website

### Core Features
- **Events Schedule**: Upcoming brownbag events listing
- **Past Brownbags**: Video archive of past brownbag sessions

## Reference Data

The `Reference Data/` folder contains source data (not deployed):
- `AI Council brown bag booking schedule.xlsx` - Brownbag event schedule with columns:
  - Month, Date, Presenter, Presenter detail, Topic

This data should be used to populate the events on the website.

## Deployment Workflow

After any code changes, push to GitHub to trigger Vercel deployment:
```bash
git add .
git commit -m "descriptive commit message"
git push origin master
```

## Development Commands

*(To be updated once the project framework is initialized)*

Typical Next.js/Vercel project commands:
```bash
npm install        # Install dependencies
npm run dev        # Start development server
npm run build      # Production build
npm run lint       # Run linter
```

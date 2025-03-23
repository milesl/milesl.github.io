# Luke Miles Tech Consulting - Gatsby Site

## Overview
This is the official website for **Luke Miles Tech Consulting**, a technology consultant specialising in helping **non-profits and SMEs** achieve their business goals through **scalable, secure, and high-performance software solutions**. The site is built using **Gatsby** and hosted on **GitHub Pages**.

## Features
- **Experience Dashboard**: Interactive charts showcasing career experience distribution, technical expertise, and career progression.
- **Markdown-Based Blog**: Easy-to-manage content for sharing technical insights and case studies.
- **GitHub Actions Deployment**: Automated builds and deployment to GitHub Pages.

## Tech Stack
- **Framework**: Gatsby 
- **Theme**: [Minimal Blog (https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog)]
- **Hosting**: GitHub Pages
- **Charting Library**: Recharts
- **Deployment Automation**: GitHub Actions

## Setup Instructions
### Prerequisites
- Node.js (v18 or later)
- Gatsby CLI installed globally (`npm install -g gatsby-cli`)
- GitHub repository for deployment

### Installation
1. Clone the repository:
   ```sh
   git clone 
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   gatsby develop
   ```
4. Open **http://localhost:8000** in your browser.

## Deployment
### Manual Deployment
```sh
gatsby build
npx gh-pages -d public
```

### Automated Deployment via GitHub Actions
1. Ensure GitHub Pages is enabled in repo settings.
2. Push changes to `main` branch, and GitHub Actions will handle deployment.
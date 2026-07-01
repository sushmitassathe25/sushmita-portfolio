# sushmita-portfolio

This is a personal portfolio site for Sushmita Sathe. It uses a single static page (HTML/CSS/JS) and auto-loads public GitHub repos for the user `sushmitassathe25`. The repository includes a GitHub Actions workflow to deploy to GitHub Pages.

Files
- index.html — main site
- styles.css — styling
- script.js — loads GitHub repos and renders project cards
- projects.json — fallback project data
- My Resume.txt — plain-text resume (downloadable from the site)
- .github/workflows/deploy.yml — deploys the site to GitHub Pages on push to `main`

How to deploy (quick)
1. Create a new repository on GitHub (recommended name: `sushmita-portfolio`) and push these files to the `main` branch.
2. The included Actions workflow will deploy to GitHub Pages automatically. Your site will be available at:
   `https://<your-username>.github.io/<repo-name>/`

Command-line (example)
- git init
- git add .
- git commit -m "Initial portfolio"
- git branch -M main
- gh repo create sushmita-portfolio --public --source=. --remote=origin --push

or push to an existing repo:
- git remote add origin git@github.com:<owner>/<repo>.git
- git push -u origin main

Customize
- Edit `index.html` to change wording, contact info, avatar, or colors.
- Replace `projects.json` or add/pin specific projects manually.
- Add a `CNAME` file for a custom domain.

If you'd like, I can:
- Push these files into a new repository in your account (tell me the repo name and whether it should be public or private), or
- Push into an existing repository (tell me owner/repo and confirm write access),
- Customize the design (colors, fonts, or layout) before pushing.

License: MIT

# Local Setup Guide (New Machine)

This repo is developed across multiple laptops and operating systems. Follow these steps to get running locally with minimal friction.

## 1) Prerequisites

Install and verify:

- Git
- Node.js (LTS recommended)
- npm (bundled with Node)
- Cursor (or VS Code)

Verify:

git --version
node -v
npm -v

## 2) Clone the repo

Use SSH (recommended):

git clone git@github.com:melbamorph/melaniemcd-ai.git
cd melaniemcd-ai

## 3) GitHub auth (SSH)

Test first:

ssh -T git@github.com

If this is a new machine, create and add a key, then add the public key to GitHub:

ssh-keygen -t ed25519 -C "your_email@example.com"

Windows PowerShell:

Get-Service ssh-agent | Set-Service -StartupType Automatic
Start-Service ssh-agent
ssh-add $env:USERPROFILE\.ssh\id_ed25519
Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub | Set-Clipboard

GitHub:
- Settings → SSH and GPG keys → New SSH key

Re-test:

ssh -T git@github.com

## 4) Install dependencies

From the repo root:

npm install

(If you have package-lock.json and want a clean install, use npm ci.)

## 5) Environment variables

If needed:
- Look for .env.example or README notes
- Create .env.local and populate values

Do not commit .env.local.

## 6) Run locally

npm run dev

Usually available at:
http://localhost:3000

## 7) Git hygiene

Check status:

git status

Ignore local-only workspace files by adding this to .gitignore:

*.code-workspace

## 8) Normal workflow

git status
git add .
git commit -m "Short, clear message"
git push

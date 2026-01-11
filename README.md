# JH Outback San Diego

The San Diego website re-imagined for 2026. Matches more of the corporate looks.

## Framework

- React Vite + Tailwind CSS + pnpm

## Host Platform

- Switching over from a shared hosting to Cloudflare Pages.

---

# Blog System Guide

This guide explains how to create, edit, and delete blog articles on the website. No coding experience required!

## Overview

Blog articles are written in **Markdown** - a simple text format that's easy to learn. You write your article in a text file, run a command, and the website automatically updates.

---

## Getting Started

### Step 1: Open Terminal

1. Open the **Terminal** app on your Mac (search for "Terminal" in Spotlight)
2. Navigate to the project folder by typing:
   ```
   cd ~/Documents/GitHub/JHO-Public-Site/public-site
   ```
3. Press **Enter**

### Step 2: Install Dependencies (First Time Only)

If this is your first time, run:
```
pnpm install
```

---

## Creating a New Blog Article

### Step 1: Create Your Article File

1. Open the `blog-content` folder (located at `JHO-Public-Site/blog-content/`)
2. Create a new text file with a name like `my-article-title.md`
   - Use lowercase letters
   - Use hyphens (-) instead of spaces
   - End the filename with `.md`

### Step 2: Write Your Article

Copy this template into your new file and fill it in:

```markdown
---
title: Your Article Title Here
slug: my-article-title
excerpt: A brief 1-2 sentence description that appears on the blog listing page.
featuredImage: images/my-image.jpg
category: Bible Study
publishDate: 2024-01-15
author: Your Name
tags:
  - faith
  - community
---

Write your article content here!

## This is a Section Heading

Regular paragraph text goes here. You can write as much as you want.

### This is a Smaller Heading

- This is a bullet point
- Another bullet point
- And another one

**This text is bold** and *this text is italic*.

> This is a quote or callout box.
```

### Step 3: Add Your Featured Image

1. Find or create an image for your article (recommended size: 1200x600 pixels)
2. Save it in the `blog-content/images/` folder
3. Update the `featuredImage:` line in your article to match the filename

### Step 4: Build Your Article

1. Open Terminal and navigate to the project:
   ```
   cd ~/Documents/GitHub/JHO-Public-Site/public-site
   ```

2. Run the build command:
   ```
   pnpm blog:build
   ```

3. You'll see a menu:
   ```
   What would you like to do?
     [B] Build articles (default)
     [D] Delete an article

   Choose action [B/d]:
   ```

4. Press **Enter** (or type `B`) to build

5. Choose to build all articles or just one:
   ```
   Available articles:
     1. written-testimony
     2. book-of-james
     3. my-article-title

   Build [A]ll articles or enter article number/slug:
   ```

6. Press **Enter** to build all, or type the number of your new article

### Step 5: Preview Your Changes

Run the development server to see your changes:
```
pnpm dev
```

Then open your web browser and go to: `http://localhost:5173/blog`

---

## Editing an Existing Article

1. Open the `.md` file in the `blog-content` folder
2. Make your changes
3. Run `pnpm blog:build` and rebuild that article
4. Preview with `pnpm dev`

---

## Deleting an Article

### Option 1: Interactive Mode

1. Open Terminal and navigate to the project:
   ```
   cd ~/Documents/GitHub/JHO-Public-Site/public-site
   ```

2. Run:
   ```
   pnpm blog:delete
   ```

3. You'll see a list of articles:
   ```
   Generated articles:
     1. written-testimony
     2. book-of-james

   Enter article number/slug to delete (or 'c' to cancel):
   ```

4. Type the number of the article you want to delete and press **Enter**

5. **Important:** Also delete the `.md` file from `blog-content/` folder so it doesn't get rebuilt later

### Option 2: Quick Delete

If you know the article slug, you can delete directly:
```
pnpm blog:build -d article-slug-here
```

---

## Article Categories

Use one of these categories in your article:

| Category | Use For |
|----------|---------|
| `Testimony` | Personal faith stories |
| `Bible Study` | Scripture studies and devotionals |
| `Faith` | General faith topics |
| `Groups` | Huddle and small group info |
| `Events` | Event announcements and recaps |
| `Community` | Community news and updates |

---

## Markdown Formatting Cheat Sheet

| What You Type | What It Shows |
|---------------|---------------|
| `# Heading 1` | Large heading |
| `## Heading 2` | Medium heading |
| `### Heading 3` | Small heading |
| `**bold text**` | **bold text** |
| `*italic text*` | *italic text* |
| `- item` | Bullet point |
| `> quote` | Quote/callout box |
| `[link text](https://url.com)` | Clickable link |

---

## Quick Reference Commands

| Command | What It Does |
|---------|--------------|
| `pnpm blog:build` | Interactive mode - build or delete articles |
| `pnpm blog:build:all` | Build all articles at once |
| `pnpm blog:delete` | Interactive delete mode |
| `pnpm dev` | Start the website locally to preview |

---

## Troubleshooting

### "Command not found: pnpm"

You need to install pnpm first:
```
npm install -g pnpm
```

### "No markdown files found"

Make sure your `.md` file is in the `blog-content` folder (not inside `public-site`).

### Article not showing up

1. Make sure you ran `pnpm blog:build`
2. Check that your markdown file has the correct format (starts with `---`)
3. Restart the dev server with `pnpm dev`

### Images not showing

1. Make sure the image is in `blog-content/images/`
2. Check that the filename in your article matches exactly (case-sensitive)
3. Rebuild with `pnpm blog:build`

---

## Need Help?

Contact the website administrator for assistance.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a Jekyll-based personal portfolio website for Kishan Kumar Maurya (droiddevgeeks), built with a Gulp asset pipeline. It deploys to GitHub Pages.

## Development Commands

Requires Ruby 3.2.1 (see `.ruby-version`) with Jekyll 4.4.1, and Node.js with npm. Use **npm only** — `yarn.lock` has been removed.

```bash
# Install dependencies
npm install
gem install jekyll # if Jekyll not already installed

# Start dev server (compiles assets, builds Jekyll, watches for changes, opens browser-sync)
npm run dev        # or: gulp

# Build Jekyll site only (outputs to _site/)
jekyll build
```

The `gulp` default task runs: JS minification → SCSS compilation → font copying → Jekyll build → browser-sync server → watch mode.

## Architecture

### Asset Pipeline (Gulp)
Source files in `src/` are processed and output to `assets/`:
- `src/styles/**/*.scss` → compiled + minified → `assets/css/main.css`
- `src/js/**/*.js` → concatenated + minified → `assets/js/main.js`
- `src/fonts/` → copied to `assets/fonts/`
- `src/img/` → optimized → `assets/img/`

**Never edit files in `assets/` directly** — they are overwritten by Gulp. Edit source files in `src/` instead.

#### JS sources (`src/js/`)
- `app.js` — initialises particles.js background (header hero) and SweetScroll smooth-scrolling
- `chat.js` — chat widget (see [Chat Widget](#chat-widget) below)

#### SCSS partials (`src/styles/`)
- `_vars.scss` — CSS custom properties / design tokens
- `_base.scss` — global resets and base element styles
- `_animation.scss` — keyframe animations
- `_header.scss` — hero / particles header section; `.resume-link` button
- `_about.scss` — about / expertise section
- `_projects.scss` — projects grid section
- `_footer.scss` — footer section
- `_chat.scss` — floating chat widget
- `main.scss` — imports all partials (entry point)

### Jekyll Structure
- `_config.yml` — site metadata (title, username, social links, user description)
- `_layouts/default.html` — single layout; composes all sections via includes
- `_includes/` — page sections: `header.html`, `about.html`, `projects.html`, `footer.html`, `head.html`
- `_data/info.yml` — data file (currently unused by templates; projects are hardcoded in `_includes/projects.html`)
- `index.html` — the only page, uses `default` layout
- `_site/` — Jekyll build output; do not edit

### Content Updates
- **Personal info / bio**: edit `_config.yml` (site variables like `username`, `user_description`, `user_title`)
- **About section skills**: edit `_includes/about.html`
- **Projects**: edit `_includes/projects.html` directly (hardcoded HTML, not data-driven)
- **Project images**: add to `src/img/` (Gulp will optimize to `assets/img/`) or directly to `assets/img/`
- **Styles**: edit SCSS partials in `src/styles/` — `_vars.scss` holds CSS variables, section-specific files match include names

## Features

### Chat Widget
A floating chat bubble (bottom-right) that answers questions about Kishan's profile using keyword-based Q&A — no external API.

- **Source**: `src/js/chat.js` — contains `PROFILE` (answer strings) and `INTENTS` (keyword → answer mappings)
- **Styles**: `src/styles/_chat.scss`
- **Mount point**: `<div id="chat-widget-mount">` in `_includes/footer.html`
- To add/update answers: edit the `PROFILE` object in `chat.js`
- To add new question topics: add an entry to the `INTENTS` array with keywords and an answer key

### Download Resume
- Button appears in the header nav and the About section
- PDF path: `assets/resume/kishan_maurya_resume.pdf` — replace this file to update the resume
- Header button styled via `.resume-link` in `src/styles/_header.scss`

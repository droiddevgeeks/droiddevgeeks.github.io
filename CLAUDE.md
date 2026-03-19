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

# Bleeds

An interactive 3D audio-visual experience built with Three.js, featuring real-time audio spectrum analysis and procedurally generated tree landscapes.

## Features

- Real-time audio spectrum analysis using Web Audio API
- Interactive 3D environment with skybox and procedural trees
- Three.js-based rendering with WebGL
- Keyboard controls for interaction

## Live Demo

This application is hosted on GitHub Pages and can be accessed at:
https://controllingtransmission.github.io/bleeds/

## Running Locally

This is a static web application that can be run locally by serving the files from a web server:

### Using Python (Python 3)
```bash
python3 -m http.server 8000
```

### Using Node.js (with http-server)
```bash
npx http-server -p 8000
```

### Using PHP
```bash
php -S localhost:8000
```

Then open your browser and navigate to `http://localhost:8000`

## Browser Requirements

- Modern web browser with WebGL support
- Microphone access permission (for audio spectrum analysis)
- JavaScript enabled

## Controls

- Keyboard controls are available (see `hotkeys.js` for specific key bindings)
- Mouse interaction for camera control

## Technical Details

The application consists of:
- `index.html` - Main entry point
- `Spectrum.js` - Audio spectrum analysis
- `Trees.js` - Procedural tree generation
- `Skybox.js` - 3D skybox rendering
- Various Three.js libraries and utilities

## GitHub Pages Setup

This repository is configured for GitHub Pages deployment from the main branch. The static files are served directly without any build process required.
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

### Keyboard Commands

#### Display Controls
- `space`: toggle band name display

#### Tree/Branch Controls
- `b`: add branches to trees on first planet
- `n`: advance tree growth step on first planet
- `m`: grow trees on all planets
- `shift+m`: close trees on all planets

#### Tree Color Controls
- `z`: set all trees to white
- `x`: set all trees to magenta
- `c`: set all trees to yellow
- `v`: set all trees to cyan

#### Planet Controls
- `p`: create new planet
- `shift+p`: remove last planet
- `0`: reset all planets rotation and sync speed to first planet
- `shift+0`: create new planet with same rotation speed as first planet
- `ctrl+0`: sync all planets rotation speed to first planet

#### Planet Rotation
- `o`: rotate current planet right
- `shift+o`: rotate all planets right
- `ctrl+o`: increase current planet rotation speed right
- `ctrl+shift+o`: increase all planets rotation speed right
- `i`: rotate current planet left
- `shift+i`: rotate all planets left
- `ctrl+i`: decrease current planet rotation speed left
- `ctrl+shift+i`: decrease all planets rotation speed left
- `l`: rotate current planet up
- `shift+l`: rotate all planets up
- `ctrl+l`: increase current planet rotation speed up
- `ctrl+shift+l`: increase all planets rotation speed up
- `k`: rotate current planet down
- `shift+k`: rotate all planets down
- `ctrl+k`: decrease current planet rotation speed down
- `ctrl+shift+k`: decrease all planets rotation speed down
- `a`: reset all planets rotation position
- `ctrl+a`: stop all planets rotation speed
- `shift+ctrl+a`: reset all planets rotation position and speed

#### Skybox/Camera Rotation
- `y`: rotate skybox right
- `ctrl+y`: increase skybox rotation speed right
- `u`: rotate skybox left
- `ctrl+u`: decrease skybox rotation speed left
- `6`: rotate skybox up
- `ctrl+6`: increase skybox rotation speed up
- `7`: rotate skybox down
- `ctrl+7`: decrease skybox rotation speed down
- `h`: rotate skybox clockwise
- `ctrl+h`: increase skybox rotation speed clockwise
- `j`: rotate skybox counter-clockwise
- `ctrl+j`: decrease skybox rotation speed counter-clockwise
- `s`: stop skybox rotation
- `ctrl+s`: reset skybox rotation position
- `alt+ctrl+s`: randomize skybox rotation position

#### Skybox Material
- `q`: cycle skybox materials (hold to advance, release to reset)

#### Camera Controls
- `A`: camera rotate mode (with mouse)
- `S`: camera zoom mode (with mouse)
- `D`: camera pan mode (with mouse)

### Mouse Controls
- Mouse interaction for camera control (combined with A/S/D keys)
- Mouse wheel for zooming

## Technical Details

The application consists of:
- `index.html` - Main entry point
- `Spectrum.js` - Audio spectrum analysis
- `Trees.js` - Procedural tree generation
- `Skybox.js` - 3D skybox rendering
- Various Three.js libraries and utilities

## GitHub Pages Setup

This repository is configured for GitHub Pages deployment from the main branch. The static files are served directly without any build process required.
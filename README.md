# FitHub

[![License](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](https://github.com/your-username/weight-tracker-app/blob/main/LICENSE)

A web application that helps you track your weight over time and visualize it using charts with different calorie deficits. Additionally, it allows you to add your actual weight for easy comparison.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Weight Tracker Web App is designed to assist you in monitoring your weight and managing your calorie deficits effectively. With its intuitive interface and interactive charts, you can easily visualize your progress over time and make informed decisions about your health and fitness goals.

## Features

- Chart visualization of your current weight and weight over time with different calorie deficits.
- Ability to add your actual weight to compare and analyze your progress.
- User-friendly interface with intuitive navigation and clear data representation.

<div align="center" margin="10px">
<img src="https://github.com/Extbech/weightTrakcer/blob/main/Images/weight-chart.png" alt="Chart" style="width:70%;" />
</div>

## Technologies

The Weight Tracker Web App is built using the following technologies:

- Backend:
  - Python Flask server for handling API requests and serving the frontend.
  - SQLite3 database for storing weight data securely.

- Frontend:
  - React for building the user interface.
  - TypeScript for type-safe development.
  - Material-UI (MUI) for a modern and responsive design.
  - Vite as the build tool for fast and efficient development.
  - Tailwind CSS for styling and layout.

## Installation

Follow these steps to set up the Weight Tracker Web App locally:

1. Clone the repository:

```shell
git clone https://github.com/Extbech/weightTrakcer
cd weightTracker
```

2. Backend setup:

```shell
cd server
pip install -r requirements.txt
```

3. Frontend setup:

- Install Node.js (if not already installed).
- Install project dependencies:

```shell
cd weightTracker
npm install
```

## Usage

1. Start the backend server:

```
python app.py
```

2. Launch the frontend development server:

```shell
npm run dev
```
3. Access the web app in your browser (replace `<PORT>` with the correct port number):
```shell
http://localhost:<PORT>
```

## Contributing
Contributions are welcome! If you find any issues or would like to suggest enhancements, please open an issue or submit a pull request. Make sure to follow the contribution guidelines when contributing to this project.

## License
The Weight Tracker Web App is open-source and released under the GNU General Public License v3.0 (GPL-3.0). Feel free to use, modify, and distribute the code for personal or commercial purposes, subject to the terms and conditions of the license.

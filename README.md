# 🚀 Project Name (Mobile + API)

> A modern, full-stack application leveraging React Native for the mobile client and a robust NestJS backend.

## 🌟 Introduction

Welcome! This repository contains the source code for the [Project Name] application. The project is designed for scalability and high performance, utilizing a clean separation between the mobile client and the dedicated REST API.

## 🛠️ Technology Stack

This project is built using the following core technologies and libraries:

### Frontend (Mobile App)
* **Framework:** React Native (Managed by Expo)
* **State Management:** Redux Toolkit
* **Styling/UI:** React Native Paper (for Material Design components)
* **Icons:** `react-native-vector-icons`
* **API Client:** Axios

### Backend (API)
* **Framework:** NestJS (built on Node.js/Express)
* **Language:** TypeScript
* **Database:** [Specify your Database, e.g., PostgreSQL, MongoDB]
* **Deployment:** AWS ([Specify the service, e.g., AWS App Runner, ECS])

## 🏗️ Getting Started

To run both the mobile application and the API locally, follow these steps.

### Prerequisites

* Node.js (v18+)
* Git
* Nest CLI (`npm i -g @nestjs/cli`)
* Expo CLI (`npm i -g expo-cli`)

### 1. Backend API Setup (NestJS)

1.  Navigate to the backend directory:
    ```bash
    cd backend-api
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server (runs on `http://localhost:3000` by default):
    ```bash
    npm run start:dev
    ```

### 2. Frontend App Setup (React Native / Expo)

1.  Navigate to the mobile app directory (in a new terminal window):
    ```bash
    cd mobile-app
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the Expo server:
    ```bash
    npm start
    ```
    * **Note:** Scan the QR code using the **Expo Go** app on your physical device, or use the controls to launch on an emulator/simulator.
    * **Crucial:** Ensure the API client (`axios` setup) uses your local machine's IP address if running the mobile app on a physical device, or `http://10.0.2.2:3000` for Android emulators.

## 🌳 Branching Strategy (For Collaborators)

We utilize a **Feature Branch Workflow** to manage sprint cycles and maintain a stable main branch.

| Branch Name | Purpose | Status |
| :--- | :--- | :--- |
| `main` | Production-ready, stable code. Only receives merges from completed release branches. **Protected.** | Stable |
| `release/sprint-01` | The current primary development branch for all work in Sprint 01. All features/tasks are merged here after review. | Active |
| `feature/task-name` | A branch created for a single, specific task (e.g., `feature/user-auth`, `bugfix/api-error`). | Ephemeral |

### How to Contribute:

1.  Always base your work on the current active sprint branch (`release/sprint-01`):
    ```bash
    git checkout release/sprint-01
    git pull origin release/sprint-01
    ```
2.  Create your new task branch:
    ```bash
    git checkout -b feature/TASK-NAME-HERE
    ```
3.  When finished, open a **Pull Request (PR)** on GitHub targeting the **`release/sprint-01`** branch. The team leader will review and merge it.

## 📝 License

This project is licensed under the [LICENSE NAME] - see the `LICENSE` file for details.

## 🧑‍💻 Contact

* **Leader:** [Your Name] - [Your Email/GitHub Profile]
* **Project GitHub:** [https://github.com/YOUR_USERNAME/REPO_NAME]
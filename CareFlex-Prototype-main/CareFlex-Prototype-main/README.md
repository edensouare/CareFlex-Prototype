# CareFlex Prototype

CareFlex is a front-end prototype for a patient portal that helps people understand their care plan, track follow-up tasks, and review recent visit and lab updates in plain language.

## What the UI does

The prototype simulates a healthcare dashboard for a patient named Sophia Miller.

The interface includes:

- Overview dashboard with a care summary, reminder for a medication follow-up, recent visit highlights, and active lab progress
- Navigation between sections: Overview, Appointments, Lab results, Messages, and Health records
- A medication follow-up flow that lets the user:
  - review a reminder from Dr. Elena Chen
  - send a message to the care team
  - choose a date and time for a follow-up appointment
  - confirm the appointment
- Modal detail views for:
  - a plain-language visit summary
  - a lab test tracking panel with a sample journey timeline
- A patient profile menu with profile/settings options (presented as demo controls, not connected to a real backend)

This is a static UX prototype, so the data shown is pre-filled demo content. There is no real patient record system, no live messaging backend, and no database.

## Required setup

The prototype is designed to run without installing any additional software beyond the project’s dependencies.

Minimum requirements:

- A modern browser: Chrome, Edge, Firefox, or Safari
- Node.js 18 or later (20+ recommended)
- pnpm package manager

No login, API key, or external service is required to run the UI.

## Running the prototype

From the repository root, use the following commands:

```sh
cd /workspaces/CareFlex-Prototype/CareFlex-Prototype-main/CareFlex-Prototype-main
pnpm --dir "CareFlex Prototype" install
pnpm --dir "CareFlex Prototype" dev --host 0.0.0.0
```

Then open the app in your browser:

- Local URL: http://localhost:8443

The app is configured to run on port 8443 by default.

## Demo login and test usage

This prototype does not require a real username or password.

Use the interface as a demo patient session:

- Patient name: Sophia Miller
- User ID: not required
- Password: not required

The app opens directly into the patient dashboard. Any login prompt is intentionally omitted because the project is a front-end mockup rather than a production authentication flow.

## Browser and device notes

- Recommended display: desktop or tablet-sized browser window
- The layout is optimized for standard desktop screens and may not be fully tuned for very small mobile screens
- For the best experience, use a recent version of Chrome, Edge, or Firefox
- If you are using a remote environment or a virtual machine, the app is configured for host access via `0.0.0.0` so it can be reached from the browser session

## Building for production

To verify the compiled app builds successfully:

```sh
cd /workspaces/CareFlex-Prototype/CareFlex-Prototype-main/CareFlex-Prototype-main
pnpm --dir "CareFlex Prototype" build
```

A preview version can then be served locally with:

```sh
pnpm --dir "CareFlex Prototype" preview --host 0.0.0.0
```

## Limitations

This prototype is intentionally limited to front-end behavior. It does not include:

- real authentication or user accounts
- a backend API or database
- live appointment booking or messaging
- actual lab result data or patient records
- data persistence between browser refreshes
- secure medical workflow handling

Everything in the interface is simulated to demonstrate the UX and interaction flow only.

## Deployment

The app is configured for static deployment and can be published to GitHub Pages. The project includes the necessary Vite base-path configuration for a GitHub Pages deployment.

To publish, use the repository’s GitHub Pages settings and deploy from GitHub Actions, or trigger the deployment workflow manually in the repository Actions tab.
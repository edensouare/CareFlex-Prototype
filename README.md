# CareFlex Prototype

CareFlex is an interactive patient portal prototype designed to help patients better understand their healthcare information, stay informed about their care, and take appropriate next steps.

The interface emphasizes plain-language communication, clear information hierarchy, and intuitive navigation to make healthcare information more accessible and actionable.

**Live prototype:** https://edensouare.github.io/CareFlex-Prototype/

## Project Overview

CareFlex explores how patient portals can make healthcare information easier to understand and navigate.

The prototype focuses on three areas of the patient experience:

- **Lab test tracking:** Helping patients understand the current status of a lab test and what happens next.
- **Visit summaries:** Presenting important information from recent healthcare visits in clear, accessible language.
- **Follow-up care:** Supporting patients as they review recommendations and schedule follow-up appointments.

The interface is built around a fictional healthcare scenario with preloaded sample medical records.

## Demo Experience

CareFlex is an interactive demonstration, not a live healthcare service.

Users create an account or sign in using their own credentials. After authentication, they enter **demo mode**, where they can explore a patient portal populated with sample medical information.

The demo includes fictional medical records, lab updates, visit summaries, provider messages, and appointment availability.

### Demo Mode Welcome Screen

A welcome screen appears after a user successfully signs up or logs in.

It explains that:

- The user is exploring CareFlex in demo mode.
- Sample medical records and care information are already available.
- All medical information is fictional.
- No real healthcare providers or patient record systems are connected.
- Messaging and appointment booking are simulated.

Users select **Explore CareFlex** to continue to the dashboard.

The welcome screen appears after each new login but does not reappear when navigating between pages or refreshing the application during the same login session.

A persistent demo-mode indicator helps users distinguish sample healthcare information from real medical records.

## Features

### Account Registration and Authentication

CareFlex uses Supabase Authentication to support:

- Email and password registration
- Email and password login
- User account information, including the registered name
- Persistent authentication sessions
- Account logout

Authentication is functional, while the healthcare information displayed after login is fictional.

### Patient Dashboard

The overview dashboard provides a centralized view of sample healthcare information, including:

- Personalized greeting using the signed-in user's account name
- Follow-up care reminders
- Recent visit highlights
- Active lab test progress
- Appointment information
- Health-related guidance

The dashboard prioritizes information that may require the user's attention.

### Lab Test Tracking

The lab results interface presents the progress of a sample laboratory test through stages such as:

1. Sample collected
2. Sample received by the laboratory
3. Testing in progress
4. Results available

A detailed timeline provides additional context about the testing process.

Lab statuses and estimated completion times are fictional and do not represent real-time laboratory information.

### Visit Summaries

CareFlex presents healthcare visit information in a patient-friendly format.

The visit summary includes:

- Key takeaways from the appointment
- Relevant health findings
- Medication information and changes
- Recommended next steps
- Access to the original sample clinical notes

The interface is designed to help users quickly identify important information without having to interpret lengthy clinical documentation.

### Follow-Up Appointment Scheduling

The prototype includes an interactive appointment scheduling flow.

Users can:

- Review a follow-up recommendation
- Explore sample appointment availability
- Select a date and time
- Review appointment details
- Confirm a simulated appointment

Appointment confirmations are part of the demo experience. No appointments are booked with real healthcare providers.

### Provider Messaging

CareFlex includes a simulated messaging interface that demonstrates how patients might communicate with their care team.

Messages are not delivered to real healthcare professionals.

### Additional Navigation

The interface includes the following sections:

- Overview
- Appointments
- Lab results
- Messages
- Health records
- Profile and settings

Some secondary controls are included for interface demonstration and may not have complete functionality.

## Technology Stack

| Technology | Purpose |
|---|---|
| React | User interface development |
| TypeScript | Application logic and type safety |
| Vite | Development server and build tooling |
| CSS
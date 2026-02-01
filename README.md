# 🏨 The Wild Oasis

**The Wild Oasis** is a custom internal management application designed for a small boutique hotel featuring eight luxurious wooden cabins. This application serves as a back-office tool allowing hotel employees to manage bookings, cabins, and guests.

## 🔗 Live Preview
**[View the Live Application](https://the-wild-oasis28.netlify.app/)**

## 📋 Project Overview
The primary goal is to build an internal system to check guests in and out and manage all hotel data.

* **Target Audience:** Hotel employees (internal use).
* **Data Handling:** The app utilizes a custom API via Supabase to model and store data, functioning as a complete interface for managing remote data.
* **Future Scope:** While a customer-facing website for self-booking may be built later, this project focuses strictly on the internal management application.



## 🚀 Features & Requirements
The project requirements are grouped into specific functional categories:

* **Authentication:** Secure user login and internal account creation for hotel employees.
* **Cabins Management:** Full capabilities to view, edit, and delete cabin details (pricing, capacity, etc.).
* **Bookings Management:** Comprehensive view of past, current, and future bookings.
* **Check-In/Out:** Functionality to check guests in upon arrival and out upon departure.
* **Guest Management:** Overview and management of guest data.
* **Dashboard:** A visual dashboard displaying operational statistics and charts.
* **Settings:** Management of application-wide settings and individual user profiles (avatar, password, etc.).

## 🛠 Technology Stack
This project utilizes a modern React stack, prioritizing client-side rendering (CSR) for an optimal internal tool experience.

### Core Framework & Architecture
* **React (SPA):** Built as a standard Single Page Application.
* **Vite:** Used as the build tool and development server.
* **Decision Rationale:** CSR was chosen over SSR (like Next.js) because the app is an internal tool hidden behind a login, meaning SEO is not a requirement.

### Routing & State Management
* **React Router:** Handles navigation within the application.
* **React Query (TanStack Query):** Manages remote state, providing caching, auto re-fetching, and offline support.
* **Context API:** Manages simple global UI state.

### Styling & UI
* **Styled Components:** For component-level CSS logic.
* **React Icons:** For professional UI iconography.
* **Recharts:** For data visualization and dashboard analytics.
* **React Hot Toast:** For streamlined user notifications and alerts.

### Data & Forms
* **Supabase:** Serves as the backend-as-a-service (BaaS), providing the database and API.
* **React Hook Form:** Manages complex form states and validation.
* **date-fns:** Used for date manipulation and formatting.

## 📂 Application Structure

| Page | Description |
| :--- | :--- |
| **Dashboard** | The homepage featuring charts and statistics. |
| **Bookings** | Detailed view of all past, present, and future bookings. |
| **Cabins** | Interface to display, edit, and delete cabin records. |
| **Check-In** | A specific route for processing guest arrivals. |
| **Users** | Restricted area for registering new hotel employees (no public sign-ups). |
| **Settings** | Configuration for hotel operational settings. |
| **Account** | Personal user settings (avatar, password updates). |
| **Login** | The entry point for unauthenticated users. |
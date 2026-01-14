# ☕ Loyalist – Café Loyalty System

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/react-18.3-61dafb.svg)
![Vite](https://img.shields.io/badge/vite-5.4-646cff.svg)
![Coverage](https://img.shields.io/badge/coverage-85%25-brightgreen.svg)

**Loyalist** is a modern, digital loyalty platform designed to help cafés and coffee shops increase customer retention and boost revenue. This repository contains the source code for the landing page and marketing website.

## 🚀 Key Features

- **⚡ High Performance:** Optimized with Vite, code splitting, and lazy loading (98+ Google Lighthouse score).
- **📱 Fully Responsive:** Mobile-first design with smooth animations and touch-friendly interactions.
- **🎨 Modern UI/UX:** Built with Tailwind CSS, shadcn/ui, and Framer Motion for a premium feel.
- **🌍 Multilingual:** Full support for English and Russian languages via `react-i18next` approach.
- **🔍 SEO Optimized:** JSON-LD structured data, dynamic meta tags, sitemap, and canonical URLs.
- **♿ Accessible:** WCAG 2.1 compliant with ARIA labels, semantic HTML, and keyboard navigation.
- **📲 PWA Support:** Installable as a native-like app with offline capabilities.
- **🛡️ Secure:** Environment variable management and Error Boundaries.

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 5 (SWC)
- **Styling:** Tailwind CSS, shadcn/ui, Radix UI
- **Animations:** Framer Motion
- **State Management:** Zustand
- **Routing:** React Router v6
- **Testing:** Vitest + React Testing Library
- **PWA:** VitePWA

## 📂 Project Structure

```
├── .github/            # CI/CD workflows
├── public/             # Static assets (images, fonts, robotic.txt)
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── ui/         # Base shadcn/ui components
│   │   └── ...         # Feature components
│   ├── context/        # React contexts (Language, etc.)
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utilities and configurations
│   ├── pages/          # Page components (Index.tsx)
│   └── test/           # Test setup and mocks
├── .env.example        # Environment variables template
├── index.html          # Entry HTML
├── package.json        # Dependencies and scripts
└── vite.config.ts      # Vite configuration
```

## 🏁 Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/loyalist-web.git
    cd loyalist-web
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Setup environment variables:**
    Copy `.env.example` to `.env` and fill in the values.
    ```bash
    cp .env.example .env
    ```

### Development

Start the development server with hot reload:

```bash
npm run dev
```

### Production Build

Build the application for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 🧪 Testing

Run minute tests using Vitest:

```bash
npm test
```

Run tests with UI coverage report:

```bash
npm run test:coverage
```

## 🌐 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_WEB_APP_URL` | URL of the main web application | `https://app.loyalist.app` |
| `VITE_API_URL` | Backend API URL | `https://api.loyalist.app` |
| `VITE_ENABLE_ANALYTICS`| Enable/Disable analytics | `true` |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

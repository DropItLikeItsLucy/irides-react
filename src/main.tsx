// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import routing components
import './index.css';
import './i18n'; // Ensure i18n is initialized

// Import Page and Layout components
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import QuotePage from './pages/QuotePage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap everything in BrowserRouter */}
      <Routes> {/* Define available routes */}
        <Route path="/" element={<Layout />}> {/* Parent route with Layout */}
          <Route index element={<HomePage />} /> {/* Default child route for "/" */}
          <Route path="quote" element={<QuotePage />} /> {/* Route for "/quote" */}
          {/* Add other page routes here later if needed */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
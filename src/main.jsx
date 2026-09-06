import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

// Design tokens and base styles first, then shared layout utilities,
// then page-specific styles (order matters for cascade/specificity).
import './styles/tokens.css';
import './styles/layout.css';
import './pages/About.css';
import './pages/Events.css';
import './pages/Donation.css';
import './pages/Contact.css';
import './pages/Detail.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@cloudface/tokens/css/variables.css';
import '@cloudface/assets/css/fonts.css';
import { App } from './App';
import './styles.css';

const root = document.getElementById('root');
if (!root) throw new Error('root ausente');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

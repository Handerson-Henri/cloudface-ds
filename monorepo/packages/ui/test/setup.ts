import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
import '@testing-library/jest-dom/vitest';
import '@cloudface/tokens/css/variables.css';

afterEach(() => {
  cleanup();
});

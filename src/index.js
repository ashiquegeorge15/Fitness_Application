import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
<BrowserRouter>
<App />
</BrowserRouter>
);
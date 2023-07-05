import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './Components/Search/SearchProvider';
import { FilterProvider } from './Components/Filter/FilterProvider';
import { TypeProvider } from './Components/Filter/TypeProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SearchProvider>
      <FilterProvider>
          <TypeProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </TypeProvider>
      </FilterProvider>
    </SearchProvider>
  </React.StrictMode>
);


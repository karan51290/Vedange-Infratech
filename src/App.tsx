/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Businesses } from './pages/Businesses';
import { Manufacturing, Roofing, Pipes } from './pages/BusinessDetails';
import { Contact, Terms, Privacy } from './pages/InfoPages';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="businesses" element={<Businesses />}>
            <Route path="manufacturing" element={<Manufacturing />} />
            <Route path="roofing" element={<Roofing />} />
            <Route path="pipes" element={<Pipes />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

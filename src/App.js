import React from 'react';

import HeroContent from './components/HeroContent';
import Documentation from './components/Documentation';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <HeroContent />
      <Documentation />
      <Footer />
    </React.Fragment>
  );
}

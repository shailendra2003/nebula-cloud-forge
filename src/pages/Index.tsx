
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { ApiDocs } from '@/components/ApiDocs';
import { Architecture } from '@/components/Architecture';
import { Quickstart } from '@/components/Quickstart';
import { Limitations } from '@/components/Limitations';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <ApiDocs />
        <Architecture />
        <Quickstart />
        <Limitations />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

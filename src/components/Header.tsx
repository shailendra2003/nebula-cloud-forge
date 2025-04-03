
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GitHubIcon } from './icons/GitHubIcon';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-nebula-400 to-nebula-700 flex items-center justify-center animate-pulse-slow">
                <div className="w-5 h-5 rounded-full bg-white"></div>
              </div>
              <span className="ml-3 text-xl font-bold">Nebula</span>
            </div>
          </Link>
        </div>
        <div className="ml-auto flex gap-2">
          <Link to="/features" className="hidden sm:flex">
            <Button variant="ghost" className="text-sm font-medium">Features</Button>
          </Link>
          <Link to="/api" className="hidden sm:flex">
            <Button variant="ghost" className="text-sm font-medium">API</Button>
          </Link>
          <Link to="/architecture" className="hidden sm:flex">
            <Button variant="ghost" className="text-sm font-medium">Architecture</Button>
          </Link>
          <Link to="/quickstart" className="hidden sm:flex">
            <Button variant="ghost" className="text-sm font-medium">Quickstart</Button>
          </Link>
          <Link to="/roadmap" className="hidden sm:flex">
            <Button variant="ghost" className="text-sm font-medium">Roadmap</Button>
          </Link>
          <a href="https://github.com/Annany2002/nebula-backend" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="rounded-full">
              <GitHubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
          <Button className="bg-gradient-to-r from-nebula-600 to-blue-600 hover:from-nebula-700 hover:to-blue-700">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

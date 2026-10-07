import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 pt-12 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold tracking-tighter text-white">
            Preetham<span className="text-accent">.</span>
          </div>
          
          <p className="text-slate-400 text-sm text-center">
            &copy; {new Date().getFullYear()} Preetham A S. Designed & Built for the Future.
          </p>

          <a href="#home" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-accent transition-colors" aria-label="Scroll to top">
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

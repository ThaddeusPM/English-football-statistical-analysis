import Link from 'next/link';
import { Inter, Playfair_Display } from 'next/font/google';

// Font setup
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export default function HomePage() {
  return (
    <main className={`${inter.variable} ${playfair.variable} min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white`}>
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <header className="mb-16 pb-8 border-b border-slate-800/50">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500">
            Football Statistical Analysis
          </h1>
          <p className="text-slate-300 text-xl font-light tracking-wide">
            Deep insights
          </p>
        </header>

        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-slate-100">Recent Match Analysis</h2>
            <div className="h-px flex-grow bg-slate-800 ml-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              href="/wrexham-exeter-analysis"
              className="group relative overflow-hidden rounded-2xl border border-slate-800/80 shadow-lg transition-all duration-300 hover:shadow-emerald-500/10 hover:border-slate-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="font-medium text-2xl mb-2 group-hover:text-emerald-400 transition-colors">
                    Wrexham vs Exeter
                  </h3>
                  <p className="text-slate-400">March 2025</p>
                  <div className="mt-4 text-slate-300 text-sm">
                    Tactical breakdown and key performance metrics
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <div className="bg-emerald-500/10 p-2 rounded-full group-hover:bg-emerald-500/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
            
            <div className="relative rounded-2xl border border-slate-800/50 border-dashed p-8 flex flex-col justify-center items-center">
              <div className="text-slate-400 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <p className="text-slate-500 text-center">More match analyses coming soon</p>
            </div>
          </div>
        </section>
        
        <section className="mt-20">
          <div className="bg-slate-800/20 backdrop-blur-sm rounded-2xl p-8 border border-slate-800/80 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-slate-100">About This Project</h2>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Advanced AI and cloud computing based statistical analysis.
            </p>
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-800/50">
              <p className="text-slate-400 text-sm">
                Updated inconsistently and unpredictably
              </p>
              <div className="flex space-x-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-900/30 text-blue-300">AI</span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-900/30 text-emerald-300">Statistics</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <footer className="mt-24 py-8 border-t border-slate-800/50 bg-slate-950">
        <div className="container mx-auto px-6 flex justify-between items-center max-w-5xl">
          <p className="text-slate-500 text-sm">
            Made with ❤️ by Thaddeus
          </p>
          <div className="text-slate-600">
            &copy; {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </main>
  );
}
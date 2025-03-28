import Link from 'next/link';
import { Inter, Playfair_Display } from 'next/font/google';

// Font setup
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export default function HomePage() {
  return (
    <main className={`${inter.variable} ${playfair.variable} min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white`}>
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <header className="mb-12 border-b border-slate-700 pb-6">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
            Football Statistical Analysis
          </h1>
          <p className="text-slate-300 text-lg">
            This took me way too long to do
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-slate-200">Recent Match Analysis</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              href="/wrexham-exeter-analysis"
              className="flex items-center justify-between p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:bg-slate-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 group"
            >
              <div>
                <h3 className="font-medium text-xl mb-2 group-hover:text-emerald-400 transition-colors">
                  Wrexham vs Exeter
                </h3>
                <p className="text-slate-400 text-sm">March 2025</p>
              </div>
              <div className="bg-emerald-500/10 p-2 rounded-full group-hover:bg-emerald-500/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
            
            <div className="flex items-center justify-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 border-dashed">
              <p className="text-slate-500">More matches coming soon... maybe</p>
            </div>
          </div>
        </section>
        
        <section className="mt-12">
          <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
            <h2 className="text-2xl font-semibold mb-4 text-slate-200">About My Analysis</h2>
            <p className="text-slate-300 mb-4">
              Using all my AI + AWS credits to guess on football stuff
            </p>
            <p className="text-slate-400 text-sm">
              Updated inconsistently and unpredictably
            </p>
          </div>
        </section>
      </div>
      
      <footer className="mt-16 py-8 border-t border-slate-800 bg-slate-900/50">
        <div className="container mx-auto px-6 text-center text-slate-500 text-sm">
          made with love ❤️ by Thaddeus
        </div>
      </footer>
    </main>
  );
}
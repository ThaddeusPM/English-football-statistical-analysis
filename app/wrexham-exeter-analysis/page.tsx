import Link from 'next/link';
import { Inter, Playfair_Display } from 'next/font/google';

// Font setup
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export default function MatchAnalysisPage() {
  return (
    <main className={`${inter.variable} ${playfair.variable} min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white`}>
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <header className="mb-12 border-b border-slate-700 pb-6">
          <Link href="/" className="inline-flex items-center text-slate-400 hover:text-emerald-400 mb-6 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
            Wrexham AFC vs Exeter City Prediction
          </h1>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-slate-700 text-slate-200 px-3 py-1 rounded-full text-sm">March 2025</span>
            <span className="bg-emerald-900/30 text-emerald-400 px-3 py-1 rounded-full text-sm">League One</span>
            <span className="bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-sm">Final Score: Wrexham 1-0</span>
          </div>
          <p className="text-slate-300 text-lg">
            View AI-powered match analysis from different models
          </p>
        </header>

        <section className="mb-12">
          <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700">
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center">
                <div className="bg-red-500 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-white">W</span>
                </div>
                <div>
                  <h2 className="font-medium">Wrexham AFC</h2>
                  <p className="text-slate-400 text-sm">Away</p>
                </div>
              </div>
              <div className="text-3xl font-bold">1</div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-white">E</span>
                </div>
                <div>
                  <h2 className="font-medium">Exeter City</h2>
                  <p className="text-slate-400 text-sm">Home</p>
                </div>
              </div>
              <div className="text-3xl font-bold">0</div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6 text-slate-200">AI Analysis Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link 
              href="/wrexham-exeter-analysis/openai"
              className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:bg-slate-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-medium text-xl mb-2 group-hover:text-green-400 transition-colors">
                  OpenAI Analysis
                </h3>
                <p className="text-slate-400 text-sm">
                  Match insights powered by o3 deep search
                </p>
              </div>
            </Link>
            
            <Link 
              href="/wrexham-exeter-analysis/gemini"
              className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:bg-slate-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-medium text-xl mb-2 group-hover:text-blue-400 transition-colors">
                  Google Gemini
                </h3>
                <p className="text-slate-400 text-sm">
                  Tactical breakdown by Gemini Advanced
                </p>
              </div>
            </Link>
            
            <Link 
              href="/wrexham-exeter-analysis/anthropic"
              className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:bg-slate-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="font-medium text-xl mb-2 group-hover:text-purple-400 transition-colors">
                  Anthropic Claude
                </h3>
                <p className="text-slate-400 text-sm">
                  Match analysis via Claude Sonnet 3.7
                </p>
              </div>
            </Link>
          </div>
        </section>
        
        <section className="mt-12">
          <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
            <h2 className="text-2xl font-semibold mb-4 text-slate-200">Match Highlights</h2>
            <p className="text-slate-300 mb-4">
              This League Two fixture saw Wrexham secure a crucial 2-1 victory over Exeter City at the Racecourse Ground, 
              further strengthening their promotion ambitions.
            </p>
            <div className="space-y-3 mt-6">
              <div className="flex items-start gap-3">
                <div className="bg-emerald-500/10 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <p className="text-slate-400 text-sm">Select an AI analysis option above to get detailed insights on this match</p>
              </div>
            </div>
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
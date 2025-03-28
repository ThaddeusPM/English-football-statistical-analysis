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
          <Link href="/" className="inline-flex items-center text-slate-400 hover:text-emerald-400 mb-6 transition-colors duration-300 hover:translate-x-1 transform">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              Wrexham AFC vs Exeter City
            </h1>
            <div className="flex items-center gap-2 bg-slate-800/70 px-4 py-2 rounded-lg border border-slate-700">
              <div className="text-slate-300 font-semibold text-lg">Pred: Wxm 1 - 0</div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-slate-700 text-slate-200 px-3 py-1 rounded-full text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              March 2025
            </span>
            <span className="bg-emerald-900/30 text-emerald-400 px-3 py-1 rounded-full text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              League One
            </span>
            <span className="bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              last update: Mar 28, 2025
            </span>
          </div>
          <p className="text-slate-300 text-lg">
            Compare AI-powered match analysis from leading models
          </p>
        </header>

        <section className="mb-12">
          <div className="bg-gradient-to-r from-slate-800/70 to-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6 w-full md:w-auto justify-center">
                <div className="flex flex-col items-center">
                  <div className="bg-red-500 h-16 w-16 rounded-full flex items-center justify-center mb-2 border-4 border-slate-700 shadow-lg">
                    <span className="font-bold text-white text-2xl">W</span>
                  </div>
                  <div className="text-center">
                    <h2 className="font-medium text-lg">Wrexham AFC</h2>
                    <p className="text-slate-400 text-sm">Away</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-1">
                  <div className="text-4xl font-bold text-slate-400">vs</div>
                  <div className="bg-blue-500/10 px-3 py-1 rounded-full text-blue-400 text-xs font-semibold">
                    Mar 29
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="bg-blue-600 h-16 w-16 rounded-full flex items-center justify-center mb-2 border-4 border-slate-700 shadow-lg">
                    <span className="font-bold text-white text-2xl">E</span>
                  </div>
                  <div className="text-center">
                    <h2 className="font-medium text-lg">Exeter City</h2>
                    <p className="text-slate-400 text-sm">Home</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                <div className="text-center px-4">
                  <div className="text-4xl font-bold text-slate-400">1</div>
                  <div className="text-slate-400 text-sm">Goals</div>
                </div>
                <div className="h-12 w-px bg-slate-700"></div>
                <div className="text-center px-4">
                  <div className="text-4xl font-bold text-slate-400">0</div>
                  <div className="text-slate-400 text-sm">Goals</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-gradient-to-br from-slate-800/50 to-slate-800/30 rounded-xl p-6 border border-slate-700 shadow-lg">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-red-500 h-10 w-10 rounded-full flex items-center justify-center">
                      <span className="font-bold text-white">W</span>
                    </div>
                    <h3 className="text-xl font-semibold">Wrexham AFC</h3>
                    <span className="bg-slate-700 text-emerald-400 px-2 py-1 rounded text-xs font-bold">2nd</span>
                  </div>
                  
                  <div className="bg-slate-900/30 p-4 rounded-lg border border-slate-700/50">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center bg-slate-800/50 p-3 rounded">
                        <span className="text-slate-400 text-xs">Points</span>
                        <span className="text-2xl font-bold text-emerald-400">74</span>
                      </div>
                      <div className="flex flex-col items-center bg-slate-800/50 p-3 rounded">
                        <span className="text-slate-400 text-xs">Goal Diff</span>
                        <span className="text-2xl font-bold text-emerald-400">+22</span>
                      </div>
                      <div className="flex flex-col items-center bg-slate-800/50 p-3 rounded">
                        <span className="text-slate-400 text-xs">Form</span>
                        <div className="flex gap-1 mt-1">
                          <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-bold text-white">W</span>
                          <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-bold text-white">W</span>
                          <span className="w-4 h-4 rounded-full bg-slate-500 flex items-center justify-center text-xs font-bold text-white">D</span>
                          <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-bold text-white">W</span>
                          <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-bold text-white">W</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center bg-slate-800/50 p-3 rounded">
                        <span className="text-slate-400 text-xs">Top Scorer</span>
                        <span className="text-emerald-400 text-sm font-medium">Smith (14)</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-600 h-10 w-10 rounded-full flex items-center justify-center">
                      <span className="font-bold text-white">E</span>
                    </div>
                    <h3 className="text-xl font-semibold">Exeter City</h3>
                    <span className="bg-slate-700 text-blue-400 px-2 py-1 rounded text-xs font-bold">16th</span>
                  </div>
                  
                  <div className="bg-slate-900/30 p-4 rounded-lg border border-slate-700/50">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center bg-slate-800/50 p-3 rounded">
                        <span className="text-slate-400 text-xs">Points</span>
                        <span className="text-2xl font-bold text-blue-400">45</span>
                      </div>
                      <div className="flex flex-col items-center bg-slate-800/50 p-3 rounded">
                        <span className="text-slate-400 text-xs">Goal Diff</span>
                        <span className="text-2xl font-bold text-blue-400">-11</span>
                      </div>
                      <div className="flex flex-col items-center bg-slate-800/50 p-3 rounded">
                        <span className="text-slate-400 text-xs">Form</span>
                        <div className="flex gap-1 mt-1">
                          <span className="w-4 h-4 rounded-full bg-slate-500 flex items-center justify-center text-xs font-bold text-white">D</span>
                          <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-bold text-white">W</span>
                          <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-bold text-white">W</span>
                          <span className="w-4 h-4 rounded-full bg-slate-500 flex items-center justify-center text-xs font-bold text-white">D</span>
                          <span className="w-4 h-4 rounded-full bg-slate-500 flex items-center justify-center text-xs font-bold text-white">D</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center bg-slate-800/50 p-3 rounded">
                        <span className="text-slate-400 text-xs">Top Scorer</span>
                        <span className="text-blue-400 text-sm font-medium">Millenic (9)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-slate-900/30 p-4 rounded-lg border border-slate-700/50">
                <h3 className="text-lg font-medium text-slate-200 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Head-to-Head History
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center p-2 rounded bg-red-500/10">
                    <span className="text-red-400 text-sm font-medium">Wrexham</span>
                    <span className="text-2xl font-bold text-red-400">1</span>
                    <span className="text-slate-400 text-xs">Wins</span>
                  </div>
                  <div className="flex flex-col items-center p-2 rounded bg-slate-700/30">
                    <span className="text-slate-400 text-sm font-medium">Draws</span>
                    <span className="text-2xl font-bold text-slate-300">0</span>
                    <span className="text-slate-400 text-xs">Matches</span>
                  </div>
                  <div className="flex flex-col items-center p-2 rounded bg-blue-500/10">
                    <span className="text-blue-400 text-sm font-medium">Exeter</span>
                    <span className="text-2xl font-bold text-blue-400">0</span>
                    <span className="text-slate-400 text-xs">Wins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6 text-slate-200 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            AI Analysis Options
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              href="/wrexham-exeter-analysis/openai"
              className="relative p-6 bg-gradient-to-br from-slate-800/70 to-slate-800/40 rounded-xl border border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 mb-4 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-medium text-xl mb-2 group-hover:text-green-400 transition-colors">
                  OpenAI Analysis
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Match insights powered by o3 deep search
                </p>
                <span className="inline-flex items-center text-green-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                  View Analysis
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
            
            <Link 
              href="/wrexham-exeter-analysis/gemini"
              className="relative p-6 bg-gradient-to-br from-slate-800/70 to-slate-800/40 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-medium text-xl mb-2 group-hover:text-blue-400 transition-colors">
                  Google Gemini
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Tactical breakdown by Gemini Advanced
                </p>
                <span className="inline-flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                  View Analysis
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
            
            <Link 
              href="/wrexham-exeter-analysis/anthropic"
              className="relative p-6 bg-gradient-to-br from-slate-800/70 to-slate-800/40 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-16 h-16 mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="font-medium text-xl mb-2 group-hover:text-purple-400 transition-colors">
                  Anthropic Claude
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Match analysis via Claude Sonnet 3.7
                </p>
                <span className="inline-flex items-center text-purple-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                  View Analysis
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </section>
        
        <section className="mt-12">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 rounded-xl p-6 border border-slate-700 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-semibold text-slate-200">Matchday Information</h2>
              <span className="bg-blue-500/10 px-3 py-1 rounded-full text-blue-400 text-xs font-semibold">MARCH 29, 2025</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/30 p-4 rounded-lg border border-slate-700/50 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <div className="text-slate-400 text-xs">Venue</div>
                  <div className="text-slate-200">St James Park, Exeter</div>
                </div>
              </div>
              <div className="bg-slate-900/30 p-4 rounded-lg border border-slate-700/50 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="text-slate-400 text-xs">Kick-off Time</div>
                  <div className="text-slate-200">15:00 GMT</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <footer className="mt-16 py-8 border-t border-slate-800 bg-slate-900/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500 text-sm">made with love ❤️ by Thaddeus + AI</p>
          <p className="text-slate-600 text-xs mt-2">© 2025</p>
        </div>
      </footer>
    </main>
  );
}
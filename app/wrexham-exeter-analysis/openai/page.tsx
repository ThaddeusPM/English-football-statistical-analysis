'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Inter, Playfair_Display } from 'next/font/google';

// Font setup
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

const OpenAIAnalysisPage = () => {
  // State to track PDF loading status
  const [pdfLoaded, setPdfLoaded] = useState(false);
  
  // Handle PDF load event
  const handlePdfLoad = () => {
    setPdfLoaded(true);
  };
  
  // Handle PDF error event
  const handlePdfError = () => {
    setPdfLoaded(false);
  };
  
  // Scoreline probability data
  const data = [
    [12.2, 9.8, 3.9, 1.0, 0.0],
    [15.9, 12.7, 5.1, 1.4, 0.0],
    [10.3, 8.3, 3.3, 0.9, 0.0],
    [4.5, 3.6, 1.4, 0.4, 0.0],
  ];

  // Color scale for the heatmap
  const getColorClass = (value: number) => {
    if (value >= 20) return "bg-blue-900 text-white";
    if (value >= 10) return "bg-blue-800 text-white";
    if (value >= 5) return "bg-blue-700 text-white";
    if (value >= 2) return "bg-blue-600 text-white";
    if (value >= 1) return "bg-blue-500 text-white";
    if (value >= 0.5) return "bg-blue-400 text-black";
    if (value >= 0.2) return "bg-blue-300 text-black";
    if (value > 0) return "bg-blue-200 text-black";
    return "bg-gray-100 text-gray-400";
  };

  return (
    <main className={`${inter.variable} ${playfair.variable} min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white`}>
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <header className="mb-12">
          <div className="flex items-center justify-between border-b border-slate-700 pb-6 mb-6">
            <Link href="/wrexham-exeter-analysis" className="inline-flex items-center text-slate-400 hover:text-emerald-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Match Overview
            </Link>
            
            <div className="flex items-center bg-green-900/30 rounded-full px-4 py-2">
              <div className="w-6 h-6 mr-2 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-green-400 font-medium">OpenAI Analysis</span>
            </div>
          </div>
          
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
            Wrexham vs Exeter Analysis
          </h1>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-slate-700 text-slate-200 px-3 py-1 rounded-full text-sm">March 2025</span>
            <span className="bg-emerald-900/30 text-emerald-400 px-3 py-1 rounded-full text-sm">League One</span>
            <span className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm">OpenAI o3 Deep Research</span>
          </div>
          <p className="text-slate-300 text-lg">
            Comprehensive match analysis powered by OpenAI's advanced models
          </p>
        </header>

        {/* BEGIN: ENHANCED PANELS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Match Overview Panel */}
          <div className="relative overflow-hidden group rounded-xl border border-slate-700/60 shadow-lg transition-all duration-300 hover:border-green-600/30 hover:shadow-green-900/10">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 to-slate-900/90 z-0"></div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
            
            {/* Content container */}
            <div className="relative z-10 p-6">
              {/* Header with icon */}
              <div className="flex items-center mb-4">
                <div className="p-2 mr-3 rounded-lg bg-gradient-to-br from-green-500/20 to-green-700/20 text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-medium text-xl text-green-400">Match Overview</h3>
              </div>
              
              {/* Team information */}
              <div className="mb-5">
                <div className="flex items-center mb-3 hover:transform hover:translate-x-1 transition-transform duration-200">
                  <div className="w-2 h-8 bg-gradient-to-b from-red-500 to-red-700 rounded-full mr-3"></div>
                  <p className="text-slate-200 font-medium">
                    Wrexham <span className="text-slate-400 text-sm ml-1">(2nd, 74 points)</span>
                  </p>
                </div>
                <div className="flex items-center hover:transform hover:translate-x-1 transition-transform duration-200">
                  <div className="w-2 h-8 bg-gradient-to-b from-slate-400 to-slate-600 rounded-full mr-3"></div>
                  <p className="text-slate-200 font-medium">
                    Exeter City <span className="text-slate-400 text-sm ml-1">(16th, 45 points)</span>
                  </p>
                </div>
              </div>
              
              {/* Probabilities with improved styling */}
              <div className="space-y-3 text-sm">
                {/* Wrexham win */}
                <div className="group/stat">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-400 group-hover/stat:text-slate-300 transition-colors">Wrexham win</span>
                    <span className="font-medium text-slate-300 group-hover/stat:text-green-400 transition-colors">49%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-700/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full" style={{ width: '49%' }}></div>
                  </div>
                </div>
                
                {/* Draw */}
                <div className="group/stat">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-400 group-hover/stat:text-slate-300 transition-colors">Draw</span>
                    <span className="font-medium text-slate-300 group-hover/stat:text-blue-400 transition-colors">27%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-700/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full" style={{ width: '27%' }}></div>
                  </div>
                </div>
                
                {/* Exeter win */}
                <div className="group/stat">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-400 group-hover/stat:text-slate-300 transition-colors">Exeter win</span>
                    <span className="font-medium text-slate-300 group-hover/stat:text-slate-300 transition-colors">24%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-700/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-slate-600 to-slate-400 rounded-full" style={{ width: '24%' }}></div>
                  </div>
                </div>
                
                {/* Predicted score with highlight */}
                <div className="flex justify-between items-center pt-3 mt-3 border-t border-slate-700/50">
                  <span className="text-slate-400">Predicted score</span>
                  <span className="font-medium px-3 py-1 bg-green-500/10 text-green-400 rounded-md border border-green-500/20">1-0</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Expectation Panel */}
          <div className="relative overflow-hidden group rounded-xl border border-slate-700/60 shadow-lg transition-all duration-300 hover:border-blue-600/30 hover:shadow-blue-900/10">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 to-slate-900/90 z-0"></div>
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-green-500/5 rounded-full blur-xl"></div>
            
            {/* Content container */}
            <div className="relative z-10 p-6">
              {/* Header with icon */}
              <div className="flex items-center mb-4">
                <div className="p-2 mr-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-700/20 text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-medium text-xl text-blue-400">Expectation</h3>
              </div>
              
              {/* Content with quote styling */}
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-16 w-16 -top-2 -left-2 text-slate-700/20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div className="pl-8 pt-4">
                  <p className="text-slate-300 leading-relaxed">
                    Expect a tight encounter with few clear-cut chances. 
                    Wrexham's need for a win is greater and their quality a bit higher, 
                    so a <span className="text-green-400 font-medium">narrow Wrexham win (1–0)</span> is the most likely outcome in our 
                    analysis – but it will be hard-fought.
                  </p>
                </div>
              </div>
              
              {/* Additional insight (optional) */}
              <div className="mt-5 pt-5 border-t border-slate-700/50">
                <div className="flex items-center">
                  <div className="p-1.5 rounded-full bg-blue-500/10 text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="ml-2 text-sm text-slate-400">Analysis based on vibes</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recent Form Panel */}
          <div className="relative overflow-hidden group rounded-xl border border-slate-700/60 shadow-lg transition-all duration-300 hover:border-purple-600/30 hover:shadow-purple-900/10">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 to-slate-900/90 z-0"></div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-28 h-28 bg-purple-500/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl"></div>
            
            {/* Content container */}
            <div className="relative z-10 p-6">
              {/* Header with icon */}
              <div className="flex items-center mb-4">
                <div className="p-2 mr-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-700/20 text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                  </svg>
                </div>
                <h3 className="font-medium text-xl text-purple-400">Recent Form</h3>
              </div>
              
              {/* Recent results with improved styling */}
              <div className="space-y-4">
                <div className="p-3 bg-green-900/20 rounded-lg border border-green-900/30 transition-transform duration-200 hover:translate-x-1">
                  <div className="flex items-center mb-1">
                    <span className="text-green-400 font-medium">Last Match</span>
                    <span className="ml-2 px-2 py-0.5 bg-green-500/10 text-green-400 rounded text-xs">Win</span>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Wrexham secured a 1-0 victory against Stockport County, showing momentum going into this match.
                  </p>
                </div>
                
                <div className="p-3 bg-green-900/20 rounded-lg border border-green-900/30 transition-transform duration-200 hover:translate-x-1">
                  <div className="flex items-center mb-1">
                    <span className="text-green-400 font-medium">Previous Meeting</span>
                    <span className="ml-2 px-2 py-0.5 bg-green-500/10 text-green-400 rounded text-xs">Win</span>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Wrexham won 3-0 against Exeter in November 2024 at the STōK Cae Ras.
                  </p>
                </div>
              </div>
              
              {/* Form guide (mini visual indicator) */}
              <div className="mt-4 pt-4 border-t border-slate-700/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-slate-400">Wrexham Form (Last 5)</span>
                  <div className="flex space-x-1">
                    <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 text-xs flex items-center justify-center font-medium">W</span>
                    <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 text-xs flex items-center justify-center font-medium">W</span>
                    <span className="w-6 h-6 rounded-full bg-slate-500/20 text-slate-400 text-xs flex items-center justify-center font-medium">D</span>
                    <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 text-xs flex items-center justify-center font-medium">W</span>
                    <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 text-xs flex items-center justify-center font-medium">L</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Exeter Form (Last 5)</span>
                  <div className="flex space-x-1">
                    <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 text-xs flex items-center justify-center font-medium">L</span>
                    <span className="w-6 h-6 rounded-full bg-slate-500/20 text-slate-400 text-xs flex items-center justify-center font-medium">D</span>
                    <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 text-xs flex items-center justify-center font-medium">L</span>
                    <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 text-xs flex items-center justify-center font-medium">W</span>
                    <span className="w-6 h-6 rounded-full bg-slate-500/20 text-slate-400 text-xs flex items-center justify-center font-medium">D</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END: ENHANCED PANELS */}
        
        {/* BEGIN: ENHANCED DARK THEME HEATMAP */}
        <section className="mb-12">
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-xl border border-slate-700/60 shadow-lg">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 p-8">
              {/* Header Section with badge */}
              <div className="flex flex-col items-center mb-6">
                <div className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm mb-3">
                  Match Prediction
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-3 text-center">
                  Wrexham vs Exeter Scoreline Probability
                </h2>
                
                <div className="text-center text-slate-400 mb-2">
                  OpenAI o3 Deep Research
                </div>
                
                <div className="text-center text-slate-500 text-sm mb-6">
                  March 29, 2025 | EFL League One
                </div>
              </div>
              
              {/* Team legends with improved styling */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center mr-8 px-4 py-2 bg-red-900/20 rounded-lg border border-red-900/30">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-red-500 to-red-700 mr-2"></div>
                  <span className="font-medium text-red-400">Wrexham</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-slate-700/20 rounded-lg border border-slate-700/30">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 mr-2"></div>
                  <span className="font-medium text-slate-400">Exeter City</span>
                </div>
              </div>
              
              {/* Heatmap with dark theme styling */}
              <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 mb-8">
                <div className="flex justify-center">
                  <div className="flex flex-col">
                    <div className="flex mb-6 ml-20">
                      <div className="font-semibold text-slate-300">
                        Exeter Goals →
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex flex-col mr-5">
                        <div className="font-semibold text-slate-300 mb-6">
                          Wrexham<br />Goals<br />↓
                        </div>
                        <div className="h-5"></div>
                      </div>
                      
                      <div className="flex flex-col">
                        <div className="flex mb-3 ml-8">
                          {[0, 1, 2, 3, 4].map(goals => (
                            <div key={`col-${goals}`} className="w-16 text-center font-semibold text-slate-300">
                              {goals}
                            </div>
                          ))}
                        </div>
                
                        {data.map((row, wrexhamGoals) => (
                          <div key={`row-${wrexhamGoals}`} className="flex mb-2">
                            <div className="w-8 h-16 flex items-center justify-center font-semibold text-slate-300">
                              {wrexhamGoals}
                            </div>
                            
                            <div className="flex">
                              {row.map((probability, exeterGoals) => {
                                // Calculate a highlight effect for the most likely outcomes
                                const isHighProbability = probability >= 10;
                                const highlightClass = isHighProbability ? 'ring-2 ring-green-400/50 scale-105 z-10' : '';
                                const mostLikely = probability >= 15 ? 'after:content-["Most_Likely"] after:absolute after:text-[8px] after:-top-3 after:bg-green-600/90 after:text-white after:px-1 after:rounded-sm after:font-bold' : '';
                                
                                return (
                                  <div
                                    key={`cell-${wrexhamGoals}-${exeterGoals}`}
                                    className={`relative w-16 h-16 flex flex-col items-center justify-center border border-slate-600 ${getColorClass(probability)} transition-all duration-300 hover:scale-110 hover:z-10 group ${highlightClass} ${mostLikely}`}
                                  >
                                    <div className="text-sm font-bold group-hover:text-white transition-colors duration-200">{`${wrexhamGoals}-${exeterGoals}`}</div>
                                    <div className="text-xs group-hover:text-white transition-colors duration-200">{`${probability.toFixed(1)}%`}</div>
                                    
                                    {/* Tooltip with additional context */}
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-slate-900 text-white rounded shadow-lg text-xs opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-20 pointer-events-none">
                                      {probability > 0 ? (
                                        <>
                                          <p className="font-semibold mb-1">Wrexham {wrexhamGoals} - {exeterGoals} Exeter</p>
                                          <p className="text-slate-300">Probability: {probability.toFixed(1)}%</p>
                                          <p className="text-slate-400 mt-1">
                                            {probability > 10 ? 'Highly likely outcome' : 
                                             probability > 5 ? 'Moderately likely outcome' : 
                                             probability > 1 ? 'Possible outcome' : 'Less likely outcome'}
                                          </p>
                                        </>
                                      ) : (
                                        <p className="text-slate-400">Extremely unlikely outcome</p>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Legend for the colors */}
                <div className="flex justify-center mt-8">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-slate-400">Probability: </span>
                    <div className="flex">
                      <div className="flex flex-col items-center mx-1">
                        <div className="w-6 h-3 bg-blue-200"></div>
                        <span className="text-[10px] text-slate-400">0.1-1%</span>
                      </div>
                      <div className="flex flex-col items-center mx-1">
                        <div className="w-6 h-3 bg-blue-300"></div>
                        <span className="text-[10px] text-slate-400">1-2%</span>
                      </div>
                      <div className="flex flex-col items-center mx-1">
                        <div className="w-6 h-3 bg-blue-400"></div>
                        <span className="text-[10px] text-slate-400">2-5%</span>
                      </div>
                      <div className="flex flex-col items-center mx-1">
                        <div className="w-6 h-3 bg-blue-500"></div>
                        <span className="text-[10px] text-slate-400">5-10%</span>
                      </div>
                      <div className="flex flex-col items-center mx-1">
                        <div className="w-6 h-3 bg-blue-600"></div>
                        <span className="text-[10px] text-slate-400">10-15%</span>
                      </div>
                      <div className="flex flex-col items-center mx-1">
                        <div className="w-6 h-3 bg-blue-700"></div>
                        <span className="text-[10px] text-slate-400">15%+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Prediction Summary Cards - Dark Themed */}
              <div className="mb-6">
                <h3 className="font-semibold text-green-400 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Prediction Summary:
                </h3>
                
                {/* Match Outcome Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {/* Wrexham Win Card */}
                  <div className="group relative overflow-hidden p-4 bg-gradient-to-br from-red-900/30 to-red-800/10 rounded-lg border border-red-900/30 shadow-sm hover:border-red-500/30 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/10 rounded-full blur-xl group-hover:bg-red-500/20 transition-all duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-center text-red-400 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Wrexham Win
                      </div>
                      <div className="flex items-center">
                        <div className="text-2xl font-bold text-red-400 mr-3 group-hover:text-red-300 transition-colors">49%</div>
                        <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-red-800 to-red-500 rounded-full" style={{ width: '49%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Draw Card */}
                  <div className="group relative overflow-hidden p-4 bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-lg border border-blue-900/30 shadow-sm hover:border-blue-500/30 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-center text-blue-400 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Draw
                      </div>
                      <div className="flex items-center">
                        <div className="text-2xl font-bold text-blue-400 mr-3 group-hover:text-blue-300 transition-colors">27%</div>
                        <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-800 to-blue-500 rounded-full" style={{ width: '27%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Exeter Win Card */}
                  <div className="group relative overflow-hidden p-4 bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-lg border border-slate-700/50 shadow-sm hover:border-slate-500/50 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-slate-500/10 rounded-full blur-xl group-hover:bg-slate-500/20 transition-all duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-center text-slate-400 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                        Exeter Win
                      </div>
                      <div className="flex items-center">
                        <div className="text-2xl font-bold text-slate-400 mr-3 group-hover:text-slate-300 transition-colors">24%</div>
                        <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-slate-600 to-slate-400 rounded-full" style={{ width: '24%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Expected Goals and Most Likely Scoreline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Expected Goals Card */}
                  <div className="group relative overflow-hidden p-4 bg-gradient-to-br from-green-900/30 to-emerald-800/10 rounded-lg border border-green-900/30 shadow-sm hover:border-green-500/30 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-full blur-xl group-hover:bg-green-500/20 transition-all duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-center text-green-400 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Expected Goals (xG)
                      </div>
                      
                      {/* Wrexham xG */}
                      <div className="mb-3">
                        <div className="flex justify-between items-center mb-1">
                          <div>
                            <span className="font-medium text-red-400">Wrexham:</span>
                          </div>
                          <div className="text-green-400 font-medium">1.25</div>
                        </div>
                        <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-red-800 to-red-500 rounded-full" style={{ width: '58%' }}></div>
                        </div>
                      </div>
                      
                      {/* Exeter xG */}
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <div>
                            <span className="font-medium text-slate-400">Exeter:</span>
                          </div>
                          <div className="text-green-400 font-medium">0.9</div>
                        </div>
                        <div className="h-2 w-full bg-slate-700/50 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-slate-600 to-slate-400 rounded-full" style={{ width: '42%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Most Likely Scoreline Card */}
                  <div className="group relative overflow-hidden p-4 bg-gradient-to-br from-purple-900/30 to-purple-800/10 rounded-lg border border-purple-900/30 shadow-sm hover:border-purple-500/30 transition-all duration-300">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all duration-500"></div>
                    <div className="relative z-10">
                      <div className="flex items-center text-purple-400 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Most Likely Scoreline
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-900/30 to-red-800/10 border border-red-900/30 rounded-lg text-red-400 font-bold mr-2 group-hover:border-red-500/30 transition-all duration-300">1</div>
                          <div className="text-slate-400 font-medium mx-2">-</div>
                          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-700/30 rounded-lg text-slate-400 font-bold group-hover:border-slate-500/30 transition-all duration-300">0</div>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">16%</div>
                          <div className="text-purple-600 text-sm">probability</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Interactive Elements - View More Data Section */}
              <div className="mt-8 pt-6 border-t border-slate-700/30">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Based on way to much of time -- need to touch grass</span>
                  <div className="flex items-center">
                    <button className="flex items-center text-sm bg-green-900/20 border border-green-900/30 text-green-400 px-3 py-1 rounded-lg hover:bg-green-900/30 transition-colors mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                      </svg>
                      Download Data
                    </button>
                    <button className="flex items-center text-sm bg-blue-900/20 border border-blue-900/30 text-blue-400 px-3 py-1 rounded-lg hover:bg-blue-900/30 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      View Advanced Stats (coming soonish)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END: ENHANCED DARK THEME HEATMAP */}
        
        <section className="mb-12">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h2 className="text-2xl font-semibold mb-4 text-slate-200">Mathematical Analysis</h2>
            <div className="text-slate-300 space-y-4">
              <p>
              1. Deriving Each Team's Expected Goals (λ)
              </p>
              <p>
                Exeter's 4-3-3 struggled to contain Wrexham's central overloads, with their wingers often caught too high up the pitch. The visitors' pressing was inconsistent, allowing Wrexham to build attacks comfortably from the back.
              </p>
              <p>
                The expected goals (xG) of 1.25 vs 0.9 reflects Wrexham's superior chance creation, though the final scoreline of 2-1 suggests a closer contest than the underlying numbers indicate.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-slate-200">Full Match Report</h2>
              <a 
                href="/match-report.pdf" 
                download="Wrexham_vs_Exeter_Match_Analysis.pdf"
                className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </a>
            </div>
            
            <div className="bg-white rounded-lg p-3">
              {/* PDF Embedded Viewer */}
              <object 
                data="/wrexham-vs-exeter-openAI-o3.pdf#toolbar=1&navpanes=0&scrollbar=1&view=FitH"  
                type="application/pdf" 
                className="w-full h-[500px] rounded"
              >
                <div className="w-full h-[500px] bg-gray-100 rounded flex items-center justify-center">
                  <div className="text-gray-400 flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="font-medium">PDF viewer not supported in your browser</span>
                    <a 
                      href="/match-report.pdf" 
                      download 
                      className="mt-2 text-green-600 hover:text-green-800 underline"
                    >
                      Download PDF instead
                    </a>
                  </div>
                </div>
              </object>
            </div>
          </div>
        </section>
        
        <section className="mt-12">
          <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
            <h2 className="text-2xl font-semibold mb-4 text-slate-200">Methodology overview</h2>
            <p className="text-slate-300 mb-4">
            To perform the probabilistic scoreline analysis we use Poisson modeling. The Poisson distribution is well suited to 
            capture the characteristics of football goals. Other methods exist -- might try some others 
            </p>
            <p className="text-slate-300 mb-4">
            In order to do Poisson modeling, we need to estimate the expected goals (xG) for this specific match up. 
            This estimation is primarily determined by examining: League Position & Context, Recent Form (Last 5-6 Matches), 
            Home vs. Away Performance, Goal Statistics & Style of Play, Head-to-Head (H2H), Team News, and Expert Forecasts.
            </p>
            <div className="flex items-center mt-6">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Analysis powered by</p>
                <p className="text-green-400 font-medium">OpenAI o3 Deep Research</p>
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
};

export default OpenAIAnalysisPage;
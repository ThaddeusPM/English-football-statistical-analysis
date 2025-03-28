import React from 'react';

const ScorelineHeatmap = () => {
  // Scoreline probability data
  const data = [
    [8,10,6,2,1],
    [18,16,7,3,1],
    [12,14,5,2,0.5],
    [5,6,3,1,0.3],
    [2,2,1,0.5,0.2],
  ];

  // Color scale for the heatmap - using inline styles to ensure colors render
  const getColorStyle = (value: number) => {
    if (value >= 20) return { backgroundColor: '#1e3a8a', color: 'white' };
    if (value >= 10) return { backgroundColor: '#1e40af', color: 'white' };
    if (value >= 5) return { backgroundColor: '#1d4ed8', color: 'white' };
    if (value >= 2) return { backgroundColor: '#2563eb', color: 'white' };
    if (value >= 1) return { backgroundColor: '#3b82f6', color: 'white' };
    if (value >= 0.5) return { backgroundColor: '#60a5fa', color: 'black' };
    if (value >= 0.2) return { backgroundColor: '#93c5fd', color: 'black' };
    if (value > 0) return { backgroundColor: '#bfdbfe', color: 'black' };
    return { backgroundColor: '#f3f4f6', color: '#9ca3af' };
  };

  return (
    <div style={{ padding: '16px', margin: '0 auto', backgroundColor: 'white', color: 'black', maxWidth: '800px' }}>
      <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '16px', textAlign: 'center' }}>
        Wrexham vs Exeter Scoreline Probability Heatmap
      </h2>

      <div style={{ marginBottom: '8px', textAlign: 'center', fontSize: '1rem', color: 'gray' }}>
        Anthropic Claude  Sonnet 3.7 extended thinking
      </div>
      
      <div style={{ marginBottom: '8px', textAlign: 'center', fontSize: '0.875rem', color: '#4b5563' }}>
        March 29, 2025 | EFL League One
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px', marginTop: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '32px' }}>
          <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#dc2626', marginRight: '8px' }}></div>
          <span style={{ fontWeight: '600' }}>Wrexham</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#4b5563', marginRight: '8px' }}></div>
          <span style={{ fontWeight: '600' }}>Exeter City</span>
        </div>
      </div>
      
      {/* Main heatmap container */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 'fit-content' }}>
          {/* Exeter header */}
          <div style={{ display: 'flex', marginBottom: '40px', marginLeft: '80px' }}>
            <div style={{ fontWeight: '600', fontSize: '18px' }}>
              Exeter →
            </div>
          </div>
          
          {/* Grid with row label and column headers */}
          <div style={{ display: 'flex' }}>
            {/* Wrexham label */}
            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
              <div style={{ fontWeight: '600', fontSize: '18px', marginBottom: '40px' }}>
                Wrexham<br />↓
              </div>
              
              {/* Empty space to align with grid */}
              <div style={{ height: '20px' }}></div>
            </div>
            
            {/* Column numbers and grid */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Column numbers */}
              <div style={{ display: 'flex', marginBottom: '20px', marginLeft: '30px' }}>
                {[0, 1, 2, 3, 4].map(goals => (
                  <div key={`col-${goals}`} style={{ width: '64px', textAlign: 'center', fontWeight: '600', fontSize: '18px' }}>
                    {goals}
                  </div>
                ))}
              </div>
      
              {/* Main grid with row numbers and cells */}
              {data.map((row, wrexhamGoals) => (
                <div key={`row-${wrexhamGoals}`} style={{ display: 'flex', marginBottom: '0' }}>
                  {/* Row number */}
                  <div style={{ width: '30px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '18px' }}>
                    <span>{wrexhamGoals}</span>
                  </div>
                  
                  {/* Row cells */}
                  <div style={{ display: 'flex' }}>
                    {row.map((probability, exeterGoals) => (
                      <div
                        key={`cell-${wrexhamGoals}-${exeterGoals}`}
                        style={{
                          width: '64px', 
                          height: '64px', 
                          display: 'flex', 
                          flexDirection: 'column', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          border: '1px solid #e5e7eb',
                          ...getColorStyle(probability)
                        }}
                      >
                        <div style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>{`${wrexhamGoals}-${exeterGoals}`}</div>
                        <div style={{ fontSize: '0.75rem' }}>{`${probability.toFixed(1)}%`}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '32px' }}>
        <h3 style={{ fontWeight: '600', marginBottom: '8px' }}>Prediction Summary:</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          <div style={{ padding: '12px', backgroundColor: '#fee2e2', borderRadius: '4px', border: '1px solid #fecaca', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
            <div style={{ fontSize: '0.875rem', color: '#991b1b' }}>Wrexham Win</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#dc2626' }}>48%</div>
          </div>
          <div style={{ padding: '12px', backgroundColor: '#dbeafe', borderRadius: '4px', border: '1px solid #bfdbfe', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
            <div style={{ fontSize: '0.875rem', color: '#1e40af' }}>Draw</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#2563eb' }}>28%</div>
          </div>
          <div style={{ padding: '12px', backgroundColor: '#e5e7eb', borderRadius: '4px', border: '1px solid #d1d5db', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
            <div style={{ fontSize: '0.875rem', color: '#1f2937' }}>Exeter Win</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#4b5563' }}>24%</div>
          </div>
        </div>
        
        <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          <div style={{ padding: '12px', backgroundColor: '#d1fae5', borderRadius: '4px', border: '1px solid #a7f3d0', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
            <div style={{ fontSize: '0.875rem', color: '#065f46' }}>Expected Goals</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px', color: '#047857' }}>
              <div>
                <span style={{ fontWeight: '600', color: '#dc2626' }}>Wrexham:</span> 1.4
              </div>
              <div>
                <span style={{ fontWeight: '600', color: '#4b5563' }}>Exeter:</span> 0.9
              </div>
            </div>
          </div>
          <div style={{ padding: '12px', backgroundColor: '#f3e8ff', borderRadius: '4px', border: '1px solid #e9d5ff', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
            <div style={{ fontSize: '0.875rem', color: '#6b21a8' }}>Most Likely Scoreline</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#7e22ce' }}>1-0 (18%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScorelineHeatmap;
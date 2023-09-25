import React from 'react';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

function App() {
  return (
    <div 
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',  
      margin:'1rem'  
    }}
    >
      <Page1/>
    </div>
  );
}

export default App;

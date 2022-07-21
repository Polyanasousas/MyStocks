import React from 'react';
import AppRoutes from './routes/Routes';
import StockProvider
 from './context/StockProvider';
 
function App() {
  return (
    <StockProvider>
      <AppRoutes />
    </StockProvider>
  );
}

export default App;

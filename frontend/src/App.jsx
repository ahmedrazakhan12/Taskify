import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SplashScreen from "./components/splash/SplashScreen";
import AppContent from "./components/appcontent/AppContent";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) return <SplashScreen />;

  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
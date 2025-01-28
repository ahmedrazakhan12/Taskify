import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./data";
import { motion } from "framer-motion";
import { AlarmClockCheck, Car } from "lucide-react";
import Sidebar from "./components/ui/sidebar/Index";

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-1 to-purple-800 text-white flex flex-col items-center justify-center h-screen">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 mt-[50%] md:mt-0"
      >
        <AlarmClockCheck
          size={80}
          className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
        />
      </motion.div>
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-sans"
      >
        TaskSphere.com
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-sm md:text-[14px] mb-8 font-light font-Monsterrat"
      >
        Manage Tasks, The Smart Way.
      </motion.p>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex space-x-2"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};

const BLOBS_CONFIG = [
  { color: "pink", duration: 3, delay: 0, size: "h-24 w-[300px]" },
];

 
const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="transition-all duration-500 relative ">
      <div className="absolute ">
        {BLOBS_CONFIG.map((blob, index) => (
          <motion.div
            key={index}
            className={`absolute ${blob.size} rounded-full bg-${blob.color}-300 opacity-50 blur-3xl`}
            animate={{
              x: [
                `${Math.random() * 100}%`,
                `${Math.random() * 40}%`,
                `${Math.random() * 30}%`,
                `${Math.random() * 100}%`,
              ],
              y: [
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
                `${Math.random() * 100}%`,
              ],
            }}
            transition={{
              duration: blob.duration,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
              // delay: blob.delay,
            }}
          />
        ))}
      </div>
      {!showSplash && <Sidebar />}
        {showSplash ? (
          <SplashScreen />
        ) : (
          <div className="ml-16">
            <Router>
              <Routes>
                {publicRoutes.map(({ path, element }) => (
                  <Route
                    key={path}
                    path={path}
                    element={<AuthRoute>{element}</AuthRoute>}
                  />
                ))}
                {privateRoutes.map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
                ))}
              </Routes>
            </Router>
          </div>
        )}
    </div>
  );
};

export default App;

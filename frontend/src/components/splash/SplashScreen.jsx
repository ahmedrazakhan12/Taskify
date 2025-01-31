import { useEffect, useState } from "react";
import { AlarmClockCheck, Car } from "lucide-react";
import { motion } from "framer-motion";

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
        Taskify.com
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

export default SplashScreen;

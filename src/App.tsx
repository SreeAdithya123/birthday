import React, { useEffect, useState } from 'react';
import { Cake } from 'lucide-react';

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fireworks"></div>
      <div className="balloons">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`balloon balloon-${i + 1}`}></div>
        ))}
      </div>

      {/* Main Content */}
      <div className={`flex flex-col items-center justify-center min-h-screen relative z-10 transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-center p-8 rounded-xl backdrop-blur-sm bg-white/30">
          <h1 className="text-6xl font-bold mb-6 text-white animate-bounce">
            Happy Birthday Adithya! 🎉
          </h1>
          
          <div className="cake-container mb-8 animate-pulse">
            <Cake size={120} className="text-white mx-auto" />
            <div className="candle-flames">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="candle-flame"></div>
              ))}
            </div>
          </div>

          <p className="text-2xl text-white mb-6 animate-fade-in">
            May your day be filled with joy, laughter, and unforgettable moments!
          </p>
          
          <div className="birthday-message text-xl text-white space-y-4">
            <p className="animate-slide-up">Wishing you a year ahead full of success and happiness!</p>
            <p className="animate-slide-up delay-300">May all your dreams come true!</p>
            <p className="animate-slide-up delay-600">Keep smiling and spreading joy! 🌟</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
import React, { createContext, useState, useContext, useRef, useCallback } from 'react';

// 1. Create the Context
const AlertContext = createContext();

// 2. Create the Provider Component
export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ isOpen: false, message: '', type: 'info' });
  const timerRef = useRef(null);

  const showAlert = useCallback((message, type = 'info', duration = 3000) => {
    // Support calling as showAlert(message, duration) for backwards compatibility
    if (typeof type === 'number') {
      duration = type;
      type = 'info';
    }

    setAlert({ isOpen: true, message, type });

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setAlert({ isOpen: false, message: '', type: 'info' });
    }, duration);
  }, []);

  const closeAlert = () => {
    setAlert({ isOpen: false, message: '', type: 'info' });
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  // Dynamic styles based on alert type
  const styles = {
    info: {
      bg: 'bg-[#FFD700]',
      text: 'text-gray-900',
      btn: 'bg-gray-900 text-[#FFD700] hover:bg-gray-800 focus:ring-gray-900 focus:ring-offset-[#FFD700]'
    },
    success: {
      bg: 'bg-green-600',
      text: 'text-white',
      btn: 'bg-white text-green-700 hover:bg-gray-100 focus:ring-white focus:ring-offset-green-600'
    },
    error: {
      bg: 'bg-red-600',
      text: 'text-white',
      btn: 'bg-white text-red-700 hover:bg-gray-100 focus:ring-white focus:ring-offset-red-600'
    }
  };

  const currentStyle = styles[alert.type] || styles.info;

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}

      {/* The Tailwind Visual Pop-up */}
      {alert.isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-fade-in">
          <div className={`w-full max-w-sm rounded-xl p-6 text-center shadow-2xl animate-slide-up ${currentStyle.bg}`}>
            
            {/* Message */}
            <p className={`mb-6 text-lg font-medium ${currentStyle.text}`}>
              {alert.message}
            </p>

            {/* Action Button */}
            <button
              onClick={closeAlert}
              className={`rounded-lg px-6 py-2.5 text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${currentStyle.btn}`}
            >
              OK
            </button>
            
          </div>
        </div>
      )}
    </AlertContext.Provider>
  );
};

// 3. Create a custom hook for easy access
export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
};

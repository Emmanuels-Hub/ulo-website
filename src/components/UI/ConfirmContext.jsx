import React, { createContext, useState, useContext, useCallback } from 'react';

// 1. Create the Context
const ConfirmContext = createContext();

// 2. Create the Provider Component
export const ConfirmProvider = ({ children }) => {
  const [confirmState, setConfirmState] = useState({
    isOpen: false,
    message: '',
    resolve: null, // This will hold the promise resolution function
  });

  // The function you will call from your components
  const showConfirm = useCallback((message) => {
    return new Promise((resolve) => {
      setConfirmState({
        isOpen: true,
        message,
        resolve,
      });
    });
  }, []);

  // Handlers for the buttons
  const handleConfirm = () => {
    if (confirmState.resolve) confirmState.resolve(true);
    setConfirmState({ isOpen: false, message: '', resolve: null });
  };

  const handleCancel = () => {
    if (confirmState.resolve) confirmState.resolve(false);
    setConfirmState({ isOpen: false, message: '', resolve: null });
  };

  return (
    <ConfirmContext.Provider value={{ showConfirm }}>
      {children}

      {/* The Tailwind Visual Modal */}
      {confirmState.isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-sm rounded-xl bg-[#FFD700] p-6 text-center shadow-2xl animate-slide-up">
            
            {/* Message */}
            <p className="mb-8 text-lg font-medium text-gray-900">
              {confirmState.message}
            </p>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
              {/* Cancel Button - Outline style */}
              <button
                onClick={handleCancel}
                className="w-full rounded-lg border-2 border-gray-900 px-4 py-2.5 text-sm font-bold text-gray-900 transition-colors hover:bg-gray-900 hover:text-[#FFD700] focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-[#FFD700]"
              >
                Cancel
              </button>

              {/* Confirm Button - Solid dark style */}
              <button
                onClick={handleConfirm}
                className="w-full rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-bold text-[#FFD700] transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:ring-offset-[#FFD700]"
              >
                Confirm
              </button>
            </div>
            
          </div>
        </div>
      )}
    </ConfirmContext.Provider>
  );
};

// 3. Custom hook for easy access
export const useConfirm = () => {
  const context = useContext(ConfirmContext);
  if (!context) {
    throw new Error('useConfirm must be used within a ConfirmProvider');
  }
  return context;
};
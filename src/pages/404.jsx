import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md text-center">
        
        {/* Playful Error Icon / Text */}
        <p className="text-base font-semibold text-yellow-600">404</p>
        <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
          Page not found.
        </h1>
        <p className="mt-4 text-base text-gray-500">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
          <button
            onClick={() => navigate(-1)} // Goes back to the previous page in history
            className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            &larr; Go Back
          </button>
          
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-bold rounded-lg shadow-sm text-gray-900 bg-yellow-400 hover:bg-yellow-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Take me Home
          </Link>
        </div>

        {/* Optional: Support Link */}
        <div className="mt-10">
          <p className="text-sm text-gray-500">
            Think this is a mistake?{' '}
            <Link to="/contact" className="font-medium text-yellow-600 hover:text-yellow-500 transition-colors">
              Contact Support
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
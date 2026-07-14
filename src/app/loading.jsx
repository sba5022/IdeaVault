import React from 'react';

const LoadingPage = () => {
    return (
        <div>
              <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <span className="loading loading-spinner loading-xl text-primary"></span>

      <p className="text-lg font-medium">
        Loading...
      </p>
    </div>
        </div>
    );
};

export default LoadingPage;
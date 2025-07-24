import React from 'react';

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24">
      {children}
    </div>
  );
} 
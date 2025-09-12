import { useState, useEffect } from 'react';

export function useLoading(isLoadingInitial = true) {
  const [isLoading, setIsLoading] = useState(isLoadingInitial);

  useEffect(() => {
    // You can add logic here to fetch data or perform a task that
    // sets the loading state to false when it's complete.
    // For this example, we'll just simulate a delay.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Simulates a 2-second loading time

    return () => clearTimeout(timer);
  }, []);

  return isLoading;
}
import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const DarkModeContext = createContext();

// Create a custom hook to use the context
export const useDarkMode = () => useContext(DarkModeContext);

// Create the provider component
const DarkModeProvider = ({ children }) => {
  // Initialize dark mode state with local storage value
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  // Effect to store dark mode state in local storage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Function to toggle dark mode
  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;

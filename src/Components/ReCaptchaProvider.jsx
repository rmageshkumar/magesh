import React, { createContext, useContext, useEffect, useState } from 'react';

const ReCaptchaContext = createContext(null);

export const useReCaptcha = () => useContext(ReCaptchaContext);

export const ReCaptchaProvider = ({ children }) => {
  const [reCaptchaLoaded, setReCaptchaLoaded] = useState(false);
  const [reCaptchaInstance, setReCaptchaInstance] = useState(null);

  useEffect(() => {
    // Only load the script once
    if (!window.grecaptcha && !document.querySelector('script[src*="recaptcha/api.js"]')) {
      // Define the callback function that Google will call when the API is loaded
      window.onReCaptchaLoad = () => {
        setReCaptchaLoaded(true);
      };

      // Create and append the script
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?onload=onReCaptchaLoad&render=explicit`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } else if (window.grecaptcha && window.grecaptcha.ready) {
      // If grecaptcha is already available
      window.grecaptcha.ready(() => {
        setReCaptchaLoaded(true);
      });
    }

    // Cleanup function
    return () => {
      // Remove the global callback when component unmounts
      delete window.onReCaptchaLoad;
    };
  }, []);

  // Function to get a reCAPTCHA token
  const executeReCaptcha = async (action = 'submit') => {
    if (!reCaptchaLoaded) {
      console.warn('ReCaptcha not yet loaded');
      return null;
    }

    try {
      const token = await window.grecaptcha.execute(
        process.env.GOOGLE_RECAPTCH_SITE_KEY,
        { action }
      );
      return token;
    } catch (error) {
      console.error('ReCaptcha execution error:', error);
      return null;
    }
  };

  return (
    <ReCaptchaContext.Provider value={{ reCaptchaLoaded, executeReCaptcha }}>
      {children}
    </ReCaptchaContext.Provider>
  );
};
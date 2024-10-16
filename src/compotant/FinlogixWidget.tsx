import React, { useEffect } from 'react';
declare global {
  interface Window {
    Widget: {
      init: (config: {
        widgetId: string;
        type: string;
        language: string;
        isAdaptive: boolean;
        withBorderBox: boolean;
      }) => void;
    };
  }
}

const FinlogixWidget: React.FC = () => {
  useEffect(() => {
    // Load the external script
    const script = document.createElement('script');
    script.src = 'https://widget.finlogix.com/Widget.js';
    script.async = true;
    script.onload = () => {
      // Initialize the widget after script loads
      if (window.Widget) {
        window.Widget.init({
          widgetId: '852902fe-db6f-4e9e-a33e-c98c647823f7',
          type: 'CurrencyConverter',
          language: 'en',
          isAdaptive: true,
          withBorderBox: true,
        });
      }
    };

    document.body.appendChild(script);

    // Cleanup script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="finlogix-container"></div>;
};

export default FinlogixWidget;

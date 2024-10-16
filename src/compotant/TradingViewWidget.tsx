import React, { useEffect } from 'react';

const TradingViewWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;

    // Script configuration
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500 Index' },
        { proName: 'FOREXCOM:NSXUSD', title: 'US 100 Cash CFD' },
        { proName: 'FX_IDC:EURUSD', title: 'EUR to USD' },
        { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
        { proName: 'BITSTAMP:ETHUSD', title: 'Ethereum' }
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: 'adaptive',
      colorTheme: 'light',
      locale: 'en',
    });

    // Append the script to the widget container
    const widgetContainer = document.getElementById('tradingview-widget');
    if (widgetContainer) {
      widgetContainer.appendChild(script);
    }

    // Clean up function to remove the script if component unmounts
    return () => {
      if (widgetContainer) {
        widgetContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview-widget" className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text"></span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewWidget;

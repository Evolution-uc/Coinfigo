import React, { useEffect } from 'react';

const Body5: React.FC = () => {
  useEffect(() => {
    const screen = document.createElement('script');
    screen.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    screen.async = true;
    screen.innerHTML = JSON.stringify({
      width: "100%",
      height: 550,
      defaultColumn: "overview",
      screener_type: "crypto_mkt",
      displayCurrency: "USD",
      colorTheme: "light",
      locale: "en",
    });
    document.querySelector('.tradingview-widget-container__widget')?.appendChild(screen);
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text"></span>
        </a>
      </div>
    </div>
  );
};

export default Body5;

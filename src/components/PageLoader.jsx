import React, { useEffect, useState } from 'react';

const PageLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-loader ${!isVisible ? 'hidden' : ''}`} id="pageLoader">
      <div className="page-loader__logo">
        ThinkDifferent
        <span className="nav__logo-dot" style={{ display: 'inline-block', marginLeft: '4px' }}></span>
      </div>
    </div>
  );
};

export default PageLoader;

import React from 'react';
import './ComingSoon.css';

const ComingSoon = ({ 
  title = "Coming Soon", 
  description = "We're working hard to bring you an amazing experience. Stay tuned for updates!",
  icon = "📸"
}) => {
  return (
    <div className="coming-soon-section">
      <div className="coming-soon-container">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="coming-soon-icon">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;

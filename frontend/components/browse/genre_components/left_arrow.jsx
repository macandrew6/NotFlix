import React from 'react';

const LeftArrow = ({ goToPrevVideo }) => {
  return (
    <div className="back-arrow-btn" onClick={goToPrevVideo} >
      <i className="fa fa-arrow-left fa-2x"></i>
    </div>
  );
};

export default LeftArrow;
import React from 'react';

const RightArrow = ({ goToNextVideo }) => {
  return (
    <div className="next-arrow-btn" onClick={() => goToNextVideo()} >
      <i className="fa fa-arrow-right fa-2x"></i>
    </div>
  );
};

export default RightArrow;

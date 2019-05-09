import React from 'react';
import NavBarContainer from '../nav_bar_components/nav_bar_container.js';

const MyList = ({ movies }) => {
  return (
    <div style={{background: "cornflowerblue", width: "100%", height: "500px"}}>
      <NavBarContainer />
      IM MY LIST MAKING MY List
    </div>
  );
};

export default MyList;
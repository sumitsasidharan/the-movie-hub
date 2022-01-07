import React from 'react';

const Header = () => {
   return (
      <span onClick={() => window.scroll(0, 0)} className="header">
         🎞 The Movie Hub 🎥
      </span>
   );
};

export default Header;

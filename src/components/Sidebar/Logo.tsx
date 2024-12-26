import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  isCollapsed: boolean;
}

const Logo: React.FC<LogoProps> = ({ isCollapsed }) => {
  return (
    <Link to="/" className="block">
      <div className="h-20 px-6 flex items-center justify-center border-b">
        <img 
          src="https://hsabook.vn/_next/image?url=%2Fimages%2Flogo.png&w=64&q=75" 
          alt="HSAbook Logo"
          className="h-12 w-auto"
        />
      </div>
    </Link>
  );
};

export default Logo;
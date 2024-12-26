import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

interface LogoProps {
  isCollapsed: boolean;
}

const Logo: React.FC<LogoProps> = ({ isCollapsed }) => {
  return (
    <Link to="/" className="block">
      <div className="h-20 px-6 flex items-center justify-center gap-3 border-b">
        <img 
          src={logo} 
          alt="HSAbook Logo"
          className="h-12 w-auto"
        />
        <span className="text-2xl font-bold text-[#ee6501]">HSA Book</span>
      </div>
    </Link>
  );
};

export default Logo;
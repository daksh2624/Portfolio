import { useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <nav className="py-8 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center space-x-12" style={{fontFamily: 'MADType, sans-serif'}}>
        <a href="#home" className="border-b-2 transition-colors text-white border-transparent hover:border-white">HOME</a>
        <a href="#marvel" className={`border-b-2 transition-colors text-white ${activeSection === 'marvel' ? 'border-white' : 'border-transparent hover:border-white'}`}>MARVEL</a>
        <a href="#friends" className={`border-b-2 transition-colors text-white ${activeSection === 'friends' ? 'border-white' : 'border-transparent hover:border-white'}`}>FRIENDS</a>
        <a href="#food" className={`border-b-2 transition-colors text-white ${activeSection === 'food' ? 'border-white' : 'border-transparent hover:border-white'}`}>FOOD</a>
        <a href="#connect" className={`border-b-2 transition-colors text-white ${activeSection === 'connect' ? 'border-white' : 'border-transparent hover:border-white'}`}>CONNECT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
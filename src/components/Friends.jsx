import { useState, useEffect } from 'react';

import rachelImg from '../assets/friends/rachel.jpg';
import monicaImg from '../assets/friends/monica.jpg';
import phoebeImg from '../assets/friends/phoebe.jpg';
import joeyImg from '../assets/friends/joey.jpg';
import chandlerImg from '../assets/friends/chandler.jpg';
import rossImg from '../assets/friends/ross.jpg';

const Friends = () => {
  const myFavoriteFriendsCharacters = [
    { id: 1, name: "Rachel Green", description: "Fashion enthusiast who transformed from spoiled to independent.", image: rachelImg },
    { id: 2, name: "Monica Geller", description: "Perfectionist chef with incredible culinary talents.", image: monicaImg },
    { id: 3, name: "Phoebe Buffay", description: "Quirky musician with mystical beliefs and free spirit.", image: phoebeImg },
    { id: 4, name: "Joey Tribbiani", description: "Food-loving actor with legendary appetite for sandwiches.", image: joeyImg },
    { id: 5, name: "Chandler Bing", description: "Sarcastic master of one-liners and comedy gold.", image: chandlerImg },
    { id: 6, name: "Ross Geller", description: "Dinosaur-obsessed paleontologist who was on a break.", image: rossImg }
  ];

  const [activeCharacter, setActiveCharacter] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveCharacter((prev) => (prev + 1) % myFavoriteFriendsCharacters.length);
    }, 5000);

    return () => clearInterval(slideTimer);
  }, [myFavoriteFriendsCharacters.length]);

  const switchToCharacter = (index) => {
    setActiveCharacter(index);
  };

  const displayedCharacter = myFavoriteFriendsCharacters[activeCharacter];

  return (
    <div id="friends" className="min-w-screen flex-shrink-0 p-4 flex items-center justify-center">
      <div className="w-5/6 h-5/6 bg-white rounded-lg shadow-2xl flex overflow-hidden">
        <div className="w-1/2 h-full">
          <img 
            src={displayedCharacter.image} 
            alt={displayedCharacter.name}
            className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
          />
        </div>
        
        <div className="w-1/2 h-full p-8 flex flex-col bg-gray-200">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 transition-all duration-1000 ease-in-out flex-shrink-0" style={{fontFamily: 'Roboto Slab, serif'}}>
            {displayedCharacter.name}
          </h2>
          <div className="flex-1 flex items-center justify-center overflow-hidden">
            <p className="text-lg text-gray-700 leading-relaxed transition-all duration-1000 ease-in-out text-center max-h-full overflow-y-auto" style={{fontFamily: 'Quicksand', fontWeight: 400}}>
              {displayedCharacter.description}
            </p>
          </div>
          
          <div className="flex space-x-2 mt-8">
            {myFavoriteFriendsCharacters.map((_, index) => (
              <div
                key={index}
                onClick={() => switchToCharacter(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer hover:scale-125 ${
                  index === activeCharacter ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
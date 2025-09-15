import ironImg from '../assets/Avengers/iron.jpg';
import spidyImg from '../assets/Avengers/spidy.jpg';
import captainImg from '../assets/Avengers/Captian.jpg';
import thorImg from '../assets/Avengers/Thor.jpg';
import hulkImg from '../assets/Avengers/Hulk.jpg';
import blackImg from '../assets/Avengers/Black.jpg';
import hawkeyeImg from '../assets/Avengers/Hawkeye.jpg';
import doctorImg from '../assets/Avengers/Doctor.jpg';
import blackpantherImg from '../assets/Avengers/blackpanther.jpg';

const Marvel = () => {
  const marvelCharacters = [
    { id: 1, name: "Iron Man", description: "Genius billionaire philanthropist", image: ironImg, color: "white" },
    { id: 2, name: "Spider-Man", description: "Friendly neighborhood hero", image: spidyImg, color: "YOUR_SPIDER_MAN_COLOR" },
    { id: 3, name: "Captain America", description: "The First Avenger", image: captainImg, color: "YOUR_CAPTAIN_AMERICA_COLOR" },
    { id: 4, name: "Thor", description: "God of Thunder", image: thorImg, color: "YOUR_THOR_COLOR" },
    { id: 5, name: "Hulk", description: "The incredible green giant", image: hulkImg, color: "YOUR_HULK_COLOR" },
    { id: 6, name: "Black Widow", description: "Master spy and assassin", image: blackImg, color: "YOUR_BLACK_WIDOW_COLOR" },
    { id: 7, name: "Hawkeye", description: "Master archer", image: hawkeyeImg, color: "YOUR_HAWKEYE_COLOR" },
    { id: 8, name: "Doctor Strange", description: "Master of mystic arts", image: doctorImg, color: "YOUR_DOCTOR_STRANGE_COLOR" },
    { id: 9, name: "Black Panther", description: "King of Wakanda", image: blackpantherImg, color: "YOUR_BLACK_PANTHER_COLOR" }
  ];

  return (
    <div id="marvel" className="min-w-screen flex-shrink-0 px-6 pb-24">
      <div className="grid grid-cols-3 gap-x-4 gap-y-3 h-full w-full">
        {marvelCharacters.map((character) => (
          <div
            key={character.id}
            className="group relative rounded-lg cursor-pointer transform transition-all duration-500 hover:scale-110 hover:z-10"
          >
            <div 
              className="w-full h-full rounded-lg group-hover:hidden transition-all duration-300"
              style={{
                backgroundImage: `url(${character.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            
            <div className="hidden group-hover:block absolute top-0 left-0 bg-gray-200 rounded-lg shadow-2xl w-full h-64">
              <div 
                className="w-full h-48 rounded-t-lg"
                style={{
                  backgroundImage: `url(${character.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div 
                className="w-full h-16 rounded-b-lg p-2 flex flex-col justify-center"
                style={{ backgroundColor: character.color }}
              >
                <h3 className="text-sm font-bold text-black" style={{fontFamily: 'Roboto Slab, serif'}}>{character.name}</h3>
                <p className="text-xs text-black" style={{fontFamily: 'Quicksand', fontWeight: 600}}>{character.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marvel;
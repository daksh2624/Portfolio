const Marvel = () => {
  const marvelCharacters = [
    { id: 1, name: "Iron Man", description: "Genius billionaire philanthropist", image: "https://4kwallpapers.com/images/walls/thumbs_3t/13389.jpg", color: "white" },
    { id: 2, name: "Spider-Man", description: "Friendly neighborhood hero", image: "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=400&h=400&fit=crop", color: "red" },
    { id: 3, name: "Captain America", description: "The First Avenger", image: "https://images.unsplash.com/photo-1611604548018-d56bbd85d681?w=400&h=400&fit=crop", color: "blue" },
    { id: 4, name: "Thor", description: "God of Thunder", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop", color: "yellow" },
    { id: 5, name: "Hulk", description: "The incredible green giant", image: "https://images.unsplash.com/photo-1599582909646-c810e59dc1d4?w=400&h=400&fit=crop", color: "green" },
    { id: 6, name: "Black Widow", description: "Master spy and assassin", image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=400&fit=crop", color: "black" },
    { id: 7, name: "Hawkeye", description: "Master archer", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop", color: "purple" },
    { id: 8, name: "Doctor Strange", description: "Master of mystic arts", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop", color: "orange" },
    { id: 9, name: "Black Panther", description: "King of Wakanda", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop", color: "gray" }
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
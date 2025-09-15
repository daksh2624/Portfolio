const Food = () => {
  const myFavoriteFoods = [
    { id: 1, name: "Pizza", description: "Delicious Italian classic with fresh ingredients", image: "/food/pizza.jpg" },
    { id: 2, name: "Burger", description: "Juicy beef patty with crispy lettuce and tomato", image: "/food/burger.jpg" },
    { id: 3, name: "Sushi", description: "Fresh Japanese rolls with premium seafood", image: "/food/sushi.jpg" },
    { id: 4, name: "Pasta", description: "Creamy Italian pasta with rich sauce", image: "/food/pasta.jpg" }
  ];

  return (
    <div id="food" className="min-w-screen flex-shrink-0 p-6 flex items-center justify-center">
      <div className="flex h-4/5 w-3/4 gap-2">
        {myFavoriteFoods.map((food) => (
          <div
            key={food.id}
            className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 group"
          >
            <div className="h-1/2 w-full">
              <img 
                src={food.image} 
                alt={food.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="h-1/2 p-4 flex flex-col justify-center bg-gray-200">
              <h3 className="text-2xl font-bold text-center mb-3 text-gray-800" style={{fontFamily: 'Roboto Slab, serif'}}>
                {food.name}
              </h3>
              <p className="text-xl text-gray-600 text-center leading-relaxed" style={{fontFamily: 'Quicksand', fontWeight: 400}}>
                {food.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
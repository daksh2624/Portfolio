const Home = () => {
  return (
    <div id="home" className="min-w-screen flex-shrink-0 bg-cover bg-center" style={{backgroundImage: 'url("your-background-image.jpg")'}}>
      <div className="flex h-full">
        <div className="w-1/2 flex flex-col justify-center p-16">
          <h1 className="text-6xl font-bold mb-4 text-white" style={{fontFamily: 'Roboto Slab, serif'}}>Hi, I'm Daksh 👋</h1>
          <p className="text-2xl mb-2 text-white" style={{fontFamily: 'Quicksand', fontWeight: 300}}>Welcome to my world!</p>
          <p className="text-xl text-white" style={{fontFamily: 'Quicksand', fontWeight: 300}}>Scroll right ➡️ to know what I love.</p>
        </div>
        <div className="w-1/2 flex items-center justify-center p-16">
          <div className="rounded-full shadow-2xl bg-gray-800 p-4" style={{width: '576px', height: '576px'}}>
            <div className="w-full h-full rounded-full overflow-hidden" style={{backgroundImage: 'url("./src/assets/Picture/Me2.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
const Connect = () => {
  return (
    <div id="connect" className="min-w-screen flex-shrink-0 flex items-center justify-center">
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-2xl p-12 w-2/3 h-2/3 flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-800" style={{fontFamily: 'Roboto Slab, serif'}}>
          Let's Connect
        </h2>
        
        <div className="space-y-8">
          <div className="flex items-center space-x-4 bg-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-500 rounded-full p-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500" style={{fontFamily: 'Quicksand', fontWeight: 400}}>Email</p>
              <p className="text-2xl font-semibold text-gray-800" style={{fontFamily: 'Roboto Slab, serif'}}>daksh261024@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-500 rounded-full p-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500" style={{fontFamily: 'Quicksand', fontWeight: 400}}>Phone</p>
              <p className="text-2xl font-semibold text-gray-800" style={{fontFamily: 'Roboto Slab, serif'}}>+91 6239787760</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
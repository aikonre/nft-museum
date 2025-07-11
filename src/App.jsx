import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedNFT, setSelectedNFT] = useState(null);

  const nfts = [
    {
      id: 1,
      title: 'NFT Alpha',
      image: '/ntf1.avif',
      description: 'Sosok alpha pertama dari koleksi ini.',
      price: '1.5 ETH',
      releaseDate: '2023-11-01',
    },
    {
      id: 2,
      title: 'NFT Beta',
      image: '/nft2.avif',
      description: 'NFT bertema cyber dengan warna neon.',
      price: '2.3 ETH',
      releaseDate: '2023-12-15',
    },
    {
      id: 3,
      title: 'NFT Gamma',
      image: '/nft3.jpg',
      description: 'Gaya retro futuristik dengan vibe arcade.',
      price: '0.9 ETH',
      releaseDate: '2024-01-20',
    },
    {
      id: 4,
      title: 'NFT Delta',
      image: '/nft4.avif',
      description: 'Representasi dunia metaverse yang dinamis.',
      price: '3.1 ETH',
      releaseDate: '2024-02-05',
    },
    {
      id: 5,
      title: 'NFT Epsilon',
      image: '/nft5.avif',
      description: 'Simbol evolusi digital terakhir dalam seri ini.',
      price: '4.2 ETH',
      releaseDate: '2024-03-01',
    },
  ];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-all duration-500 px-4 py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold tracking-wide">NFT Museum</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition"
          >
            {darkMode ? '☀ Light' : '🌙 Dark'}
          </button>
        </div>

        {/* NFT Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              onClick={() => setSelectedNFT(nft)}
              className="cursor-pointer bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden shadow-md border border-transparent hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/50 transform hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={nft.image}
                alt={nft.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{nft.title}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedNFT && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl p-6 max-w-md w-full shadow-xl relative">
              <button
                onClick={() => setSelectedNFT(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
              >
                ×
              </button>
              <img
                src={selectedNFT.image}
                alt={selectedNFT.title}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{selectedNFT.title}</h2>
              <p className="mb-2 text-sm text-gray-400 dark:text-gray-300 italic">
                Released on: {selectedNFT.releaseDate}
              </p>
              <p className="mb-3">{selectedNFT.description}</p>
              <p className="font-semibold text-cyan-400">Price: {selectedNFT.price}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

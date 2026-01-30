'use client';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-4">
      <div className="text-center">
        <div className="text-9xl font-bold text-[#C76F1A] mb-4">404</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">PAGE NOT FOUND</h1>
        <div className="border-l-2 border-[#C76F1A] h-16 mx-auto mb-6"></div>
        <p className="text-xl text-gray-300 mb-8 max-w-md">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <button
          onClick={() => window.location.href = '/'}
          className="bg-[#C76F1A] hover:bg-[#a55a15] text-white font-bold py-3 px-6 rounded-lg transition duration-300 cursor-pointer"
        >
          GO BACK HOME
        </button>
      </div>

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          background-color: #000;
          color: white;
        }
      `}</style>
    </div>
  );
}
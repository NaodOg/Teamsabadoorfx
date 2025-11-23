export default function AboutPage() {
  // Redirect to Google Drive link
  if (typeof window !== 'undefined') {
    window.location.href = 'https://drive.google.com/file/d/14ENrcaufvLyO0WCV2FulnDL2O8odDBCB/view?usp=sharing';
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <p className="text-white text-lg">Redirecting to company profile...</p>
        <p className="text-gray-400 text-sm">If you are not redirected, <a
          href="https://drive.google.com/file/d/14ENrcaufvLyO0WCV2FulnDL2O8odDBCB/view?usp=sharing"
          className="text-blue-400 hover:text-blue-300"
        >
          click here
        </a></p>
      </div>
    </div>
  );
}

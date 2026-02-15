import React from "react";

const HafalanModeToggle = ({ hafalanMode, toggleHafalanMode }) => {
  const isHidden = hafalanMode === "hide";

  return (
    <div className="flex items-center justify-end mb-4">
      <button
        className={`h-12 w-12 rounded-xl shadow-sm border transition-all duration-200 flex items-center justify-center ${
          isHidden
            ? "bg-emerald-100 border-emerald-200 text-emerald-700 hover:bg-emerald-200"
            : "bg-sky-100 border-sky-200 text-sky-700 hover:bg-sky-200"
        }`}
        onClick={toggleHafalanMode}
        aria-label={isHidden ? "Tampilkan Ayat" : "Sembunyikan Ayat"}
        title={isHidden ? "Tampilkan Ayat" : "Sembunyikan Ayat"}
      >
        {isHidden ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <path d="M3 3l18 18" />
            <path d="M10.7 6.1A10.7 10.7 0 0 1 12 6c6.5 0 10 6 10 6a16.7 16.7 0 0 1-4.3 4.9" />
            <path d="M6.3 6.8C3.8 8.6 2 12 2 12s3.5 6 10 6c1 0 2-.1 2.9-.4" />
            <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default HafalanModeToggle;

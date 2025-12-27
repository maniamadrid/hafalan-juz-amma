import React from "react";

const HafalanModeToggle = ({ hafalanMode, toggleHafalanMode }) => {
  console.log('hafalanMode:', hafalanMode);
  return (
    <div className="flex items-center justify-center mb-4">
      <button
        className={`px-4 py-2 rounded-lg font-semibold shadow transition-colors duration-200 ${hafalanMode === 'hide' ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-700'}`}
        onClick={toggleHafalanMode}
      >
        {hafalanMode === 'hide' ? 'Tampilkan Ayat' : 'Sembunyikan Ayat'}
      </button>
    </div>
  );
};

export default HafalanModeToggle;
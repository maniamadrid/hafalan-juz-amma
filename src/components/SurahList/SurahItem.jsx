// src/components/SurahList/SurahItem.jsx

import React from "react";

const SurahItem = ({ surah, isActive, onClick }) => {
  return (
    <li
      className={`cursor-pointer p-3 rounded-lg mb-2 transition-colors duration-150 flex justify-between items-center shadow-sm border ${isActive ? 'bg-emerald-100 border-emerald-400' : 'bg-white border-gray-200 hover:bg-emerald-50'}`}
      onClick={onClick}
    >
      <div>
        <span className="font-semibold text-gray-800">{surah.name}</span>
        <span className="ml-2 text-gray-500 text-sm">{surah.nameArabic}</span>
        <span className="ml-2 text-xs text-gray-400">({surah.ayatCount} ayat)</span>
        {surah.lastAyatRead === 0 && <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">🆕</span>}
      </div>
      <div>
        {surah.isCompleted ? (
          <span className="text-xs bg-emerald-200 text-emerald-700 px-2 py-1 rounded">Sudah Hafal</span>
        ) : (
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{Math.round(((surah?.memorizedAyat?.length ?? 0) / (surah?.ayatCount || 1)) * 100)}%</span>
        )}
      </div>
    </li>
  );
};

export default SurahItem;
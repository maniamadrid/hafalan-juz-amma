// src/components/SurahHeader/SurahHeader.jsx
import React from "react";

const SurahHeader = ({ activeSurah }) => {
    if (!activeSurah) return null;

    return (
        <div className="bg-white p-0 sm:p-4 rounded-lg shadow mb-4 flex flex-col items-center text-center w-full">
            <h2 className="text-base sm:text-2xl md:text-3xl font-bold text-emerald-700 mb-1 leading-snug break-words">
                {activeSurah.name}
            </h2>
            <div className="text-base md:text-xl text-gray-600 mb-0">
                {activeSurah.ayatCount} ayat
            </div>
        </div>
    );
}

export default SurahHeader;

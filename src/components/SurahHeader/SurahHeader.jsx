// src/components/SurahHeader/SurahHeader.jsx
import React from "react";

const SurahHeader = ({ activeSurah }) => {
    if (!activeSurah) return null;

    return (
        <div className="bg-white p-4 rounded-lg shadow mb-4 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-emerald-700 mb-1">
                {activeSurah.name}
            </h2>
            <div className="text-sm text-gray-600 mb-2">{activeSurah.ayatCount} ayat</div>
        </div>
    );
}

export default SurahHeader;
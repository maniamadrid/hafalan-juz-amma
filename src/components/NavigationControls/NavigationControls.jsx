// src/components/NavigationControls/NavigationControls.jsx
import React from 'react';

const NavigationControls = ({
    activeSurah,
    activeAyat,
    handleToFirstAyat,
    handleToLastMemorizedAyat,
    handlePreviousAyat,
    handleNextAyat,
    markAsMemorized
}) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
            <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
                <div className="grid grid-cols-2 gap-2 w-full md:w-auto md:flex">
                    <button
                        onClick={handleToFirstAyat}
                        disabled={activeAyat === 1}
                        className="px-4 py-3 bg-red-500 text-white font-bold rounded-lg shadow-lg hover:bg-red-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                    >
                        Ayat Pertama
                    </button>
                    <button
                        onClick={handleToLastMemorizedAyat}
                        disabled={!activeSurah?.memorizedAyat?.length || activeAyat === Math.max(...(activeSurah?.memorizedAyat || []))}
                        className="px-4 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                    >
                        Batas Hafalan
                    </button>
                </div>
                <div className="hidden md:flex grid grid-cols-2 gap-2 w-full md:w-auto md:flex">
                    <button
                        onClick={handlePreviousAyat}
                        disabled={activeAyat <= 1}
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        ⬅️ Mundur
                    </button>
                    <button
                        onClick={handleNextAyat}
                        disabled={
                            activeAyat === activeSurah?.ayatCount ||
                            activeAyat > activeSurah?.memorizedAyat?.length
                        }
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Maju ➡️
                    </button>
                    {/* Desktop Button */}
                    <button
                        onClick={markAsMemorized}
                        className="
                        hidden md:block w-full md:w-auto px-6 py-3 font-bold rounded-lg shadow-lg transition duration-300
                        bg-emerald-600 text-white
                        hover:bg-emerald-700
                        disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-60
                    "
                        disabled={
                            activeAyat <= activeSurah?.memorizedAyat?.length ||
                            activeSurah?.memorizedAyat?.includes(activeAyat)
                        }
                    >
                        ✅ Tandai Hafal
                    </button>
                </div>
                {/* Mobile Floating Button */}
                <button
                    onClick={markAsMemorized}
                    className="
                        md:hidden absolute top-20 right-4 z-50
                        w-12 h-12 rounded-full shadow-xl transition duration-300
                        bg-emerald-600 text-white flex items-center justify-center
                        hover:bg-emerald-700
                        disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-80
                        disabled:border-emerald-600
                    "
                    disabled={
                        activeAyat <= activeSurah?.memorizedAyat?.length ||
                        activeSurah?.memorizedAyat?.includes(activeAyat)
                    }
                    aria-label="Tandai Hafal"
                >
                    <span className="text-sm font-bold">Hafal</span>
                </button>
            </div>
        </div>
    );
};

export default NavigationControls;

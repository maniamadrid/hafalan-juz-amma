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
                        Ke Awal
                    </button>
                    <button
                        onClick={handleToLastMemorizedAyat}
                        disabled={!activeSurah?.memorizedAyat?.length || activeAyat === Math.max(...(activeSurah?.memorizedAyat || []))}
                        className="px-4 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                    >
                        Ke Akhir
                    </button>
                </div>
                <div className="hidden md:flex grid grid-cols-2 gap-2 w-full md:w-auto md:flex">
                    <button
                        onClick={handlePreviousAyat}
                        disabled={activeAyat <= 1}
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        ⬅️ Prev
                    </button>
                    <button
                        onClick={handleNextAyat}
                        disabled={
                            activeAyat === activeSurah?.ayatCount ||
                            activeAyat > activeSurah?.memorizedAyat?.length
                        }
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next ➡️
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavigationControls;
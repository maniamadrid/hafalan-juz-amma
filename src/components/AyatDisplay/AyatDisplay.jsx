import React from 'react';

function AyatDisplay({ ayatData, activeAyat, hiddenText }) {
    
    if (!ayatData) {
        
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-gray-500">Memuat ayat...</div>
            </div>
        );
    }

    const displayedText = hiddenText ? "- - - - -" : ayatData.text;

    return (
        <div className="bg-white p-2 rounded-lg shadow-md mb-2">
            {/* Badge Ayat Number */}
            <div className="flex justify-center mb-2">
                <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
                    Ayat ke-{activeAyat}
                </span>
            </div>

            {/* Arab Texts */}
            <div className="text-emerald-700 text-center mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200 text-lg md:text-2xl leading-loose" dir="rtl">
                {displayedText}
            </div>

            {/* Translation */}
            {ayatData.translation && (
                <div className="mt-6 p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
                    <h3 className="text-sm font-semibold text-emerald-700 mb-3 uppercase tracking-wide">
                        Terjemahan
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-2lg md:text-xl">
                        {ayatData.translation}
                    </p>
                </div>
            )}
        </div>
    );
};

export default AyatDisplay;
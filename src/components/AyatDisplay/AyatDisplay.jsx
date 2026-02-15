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
            <div
                className="text-center mb-4 py-2 text-[28px] leading-[2] text-[#1a1a1a]"
                dir="rtl"
                style={{ fontFamily: "'Traditional Arabic', 'Amiri', serif" }}
            >
                {displayedText}
            </div>

            {/* Translation */}
            {ayatData.translation && (
                <div className="mt-4 pt-4 px-6 pb-5 bg-[#f5f7f5] border-t border-[#e8e8e8]">
                    <h3 className="text-[10px] font-semibold text-[#999] mb-1.5 uppercase tracking-[1px]">
                        Terjemahan
                    </h3>
                    <p className="text-[13.5px] text-[#555] leading-[1.6]">
                        {ayatData.translation}
                    </p>
                </div>
            )}
        </div>
    );
};

export default AyatDisplay;

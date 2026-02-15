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
    const isFirstAyat = activeAyat === 1;
    const memorizedAyat = activeSurah?.memorizedAyat || [];
    const hasMemorizedAyat = memorizedAyat.length > 0;
    const lastMemorizedAyat = hasMemorizedAyat ? Math.max(...memorizedAyat) : 1;

    const disableFirst = isFirstAyat;
    const disableBatasHafalan = !hasMemorizedAyat || activeAyat === lastMemorizedAyat;
    const disablePrevious = activeAyat <= 1;
    const disableNext =
        activeAyat === activeSurah?.ayatCount ||
        activeAyat > memorizedAyat.length;
    const disableMarkAsMemorized =
        activeAyat <= memorizedAyat.length ||
        memorizedAyat.includes(activeAyat);

    return (
        <>
            {/* Desktop */}
            <div className="hidden md:flex flex-col items-center gap-2 w-full">
                {/* Secondary links */}
                <div className="flex justify-center gap-6">
                    <button
                        onClick={handleToFirstAyat}
                        disabled={disableFirst}
                        className="text-sm text-slate-500 hover:text-emerald-600 font-medium transition disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        Ayat Pertama
                    </button>
                    <span className="text-slate-300">·</span>
                    <button
                        onClick={handleToLastMemorizedAyat}
                        disabled={disableBatasHafalan}
                        className="text-sm text-slate-500 hover:text-emerald-600 font-medium transition disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        Batas Hafalan
                    </button>
                </div>

                {/* Primary action row */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={handlePreviousAyat}
                        disabled={disablePrevious}
                        className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        ← Mundur
                    </button>
                    <button
                        onClick={markAsMemorized}
                        disabled={disableMarkAsMemorized}
                        className="px-8 py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-md hover:bg-emerald-700 transition disabled:bg-gray-300 disabled:text-gray-500 disabled:shadow-none disabled:cursor-not-allowed"
                    >
                        ✓ Hafal
                    </button>
                    <button
                        onClick={handleNextAyat}
                        disabled={disableNext}
                        className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                        Maju →
                    </button>
                </div>
            </div>

            {/* Mobile: fixed footer */}
            <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-t border-gray-100">
                <div className="max-w-3xl mx-auto px-4 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
                    {/* Secondary text links */}
                    <div className="flex justify-center gap-5 mb-2">
                        <button
                            onClick={handleToFirstAyat}
                            disabled={disableFirst}
                            className="text-xs text-slate-500 hover:text-emerald-600 font-medium transition disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            Ayat Pertama
                        </button>
                        <span className="text-slate-300 text-xs">·</span>
                        <button
                            onClick={handleToLastMemorizedAyat}
                            disabled={disableBatasHafalan}
                            className="text-xs text-slate-500 hover:text-emerald-600 font-medium transition disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            Batas Hafalan
                        </button>
                    </div>

                    {/* Primary action row */}
                    <div className="grid grid-cols-[1fr_auto_1fr] gap-2 items-center">
                        <button
                            onClick={handlePreviousAyat}
                            disabled={disablePrevious}
                            className="w-full py-2.5 bg-gray-100 text-gray-700 rounded-xl font-semibold text-sm hover:bg-gray-200 transition disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            ← Mundur
                        </button>
                        <button
                            onClick={markAsMemorized}
                            disabled={disableMarkAsMemorized}
                            className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl font-bold text-sm shadow-md hover:bg-emerald-700 transition disabled:bg-gray-300 disabled:text-gray-500 disabled:shadow-none disabled:cursor-not-allowed"
                        >
                            ✓ Hafal
                        </button>
                        <button
                            onClick={handleNextAyat}
                            disabled={disableNext}
                            className="w-full py-2.5 bg-gray-100 text-gray-700 rounded-xl font-semibold text-sm hover:bg-gray-200 transition disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            Maju →
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavigationControls;

//  src/App.jsx

import React, { useState } from "react";
import SurahList from './components/SurahList/SurahList';
import SurahHeader from './components/SurahHeader/SurahHeader';
import AyatDisplay from './components/AyatDisplay/AyatDisplay';
//import NavigationControls from './components/NavigationControls/NavigationControls';
import NavigationControls from "./components/NavigationControls/NavigationControls";
import HafalanModeToggle from './components/HafalanModeToggle/HafalanModeToggle';
import useHafalan from './hooks/useHafalan';

function App() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const {
        surahs,
        activeSurah,
        activeAyat,
        ayatData,
        hafalanMode,
        hiddenText,
        isLoading,
        handleSelectSurah,
        handleToFirstAyat,
        handlePreviousAyat,
        handleNextAyat,
        markAsMemorized,
        toggleHafalanMode,
        handleToLastMemorizedAyat
    } = useHafalan();

    const handleSurahSelect = (surah) => {
        handleSelectSurah(surah);
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100 font-inter">
            {/* Header */}
            <header className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 rounded-lg hover:bg-emerald-600 transition-colors"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                <div className="flex-1 md:flex-none">
                    <h1 className="text-xl md:text-3xl font-bold">Hafalan Juz Amma</h1>
                    <p className="text-emerald-100 text-xs md:text-sm hidden sm:block">Surat-surat Pendek untuk Hafalan</p>
                </div>

                <div className="flex gap-3">
                    <div className="text-right text-xs md:text-sm">
                        <div className="text-emerald-100 hidden sm:block">Total Progress</div>
                        <div className="font-bold">
                            {surahs.filter(s => s.isCompleted).length} dari {surahs.length} Surah
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden relative">
                {/* Sidebar - Hidden on mobile by default, shown when menu is open */}
                <div className={`
                    fixed md:static inset-y-0 left-0 z-40 
                    w-64 md:w-1/4 
                    transform transition-transform duration-300 ease-in-out
                    ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                `}>
                    <SurahList
                        surahs={surahs}
                        activeSurah={activeSurah}
                        handleSelectSurah={handleSurahSelect}
                    />
                </div>

                {/* Overlay for mobile when menu is open */}
                {isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}

                {/* Main content area */}
                <main className="flex-1 p-4 md:p-8 overflow-y-auto bg-gray-50">
                {!ayatData ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-600 px-4">
                            <svg className="w-16 h-16 md:w-24 md:h-24 mb-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253M12 6.253c1.168-.776 2.754-1.253 4.5-1.253 1.746 0 3.332.477 4.5 1.253m-12 0v13m0-13c-1.168.776-2.754 1.253-4.5 1.253S.168 6.253 1 6.253m11 0v13m0-13c1.168.776 2.754 1.253 4.5 1.253S21.832 6.253 23 6.253"></path>
                            </svg>
                            <div className="text-center">
                                <h2 className="text-xl md:text-2xl font-bold mb-4">Selamat Datang di Hafalan Juz Amma</h2>
                                <p className="text-base md:text-xl mb-6">
                                    <span className="md:hidden">Tap menu untuk memilih surat.</span>
                                    <span className="hidden md:inline">Pilih surat dari Juz Amma di samping untuk memulai hafalan.</span>
                                </p>
                                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md max-w-md mx-auto">
                                    <h3 className="text-base md:text-lg font-semibold mb-3">💡 Tips Hafalan:</h3>
                                    <ul className="text-left space-y-2 text-sm">
                                        <li>🎯 Mulai dari surat-surat pendek</li>
                                        <li>🔄 Ulangi ayat berkali-kali</li>
                                        <li>👁️ Gunakan mode sembunyikan untuk latihan</li>
                                        <li>📈 Pantau progress hafalan Anda</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : isLoading ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-600">
                            <div className="animate-spin rounded-full h-12 h-12 md:h-16 md:w-16 border-b-2 border-emerald-500 mb-4"></div>
                            <p className="text-lg md:text-xl">Memuat ayat-ayat...</p>
                        </div>
                    ) : (
                        <div className="flex flex-col h-full">
                            <SurahHeader
                                activeSurah={activeSurah}
                                activeAyat={activeAyat}
                            />

                            <HafalanModeToggle
                                hafalanMode={hafalanMode}
                                toggleHafalanMode={toggleHafalanMode}
                            />

                            <div className="relative flex items-center justify-center gap-2 md:block">
                                {/* Mobile Previous Button */}
                                <button
                                    onClick={handlePreviousAyat}
                                    disabled={activeAyat <= 1}
                                    className="md:hidden absolute left-2 top-6 -translate-y-1/2 p-2 bg-gray-200 text-gray-700 rounded-full shadow-md hover:bg-gray-300 disabled:opacity-30 disabled:cursor-not-allowed z-10"
                                    aria-label="Previous Ayat"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <div className="flex-1 min-w-0">
                                    <AyatDisplay
                                        ayatData={ayatData}
                                        activeAyat={activeAyat}
                                        hiddenText={hiddenText}
                                    />
                                </div>

                                {/* Mobile Next Button */}
                                <button
                                    onClick={handleNextAyat}
                                    disabled={
                                        !activeSurah ||
                                        activeAyat === activeSurah.ayatCount ||
                                        (activeSurah.memorizedAyat && activeAyat > activeSurah.memorizedAyat.length)
                                    }
                                    className="md:hidden absolute right-2 top-6 -translate-y-1/2 p-2 bg-gray-200 text-gray-700 rounded-full shadow-md hover:bg-gray-300 disabled:opacity-30 disabled:cursor-not-allowed z-10"
                                    aria-label="Next Ayat"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            <NavigationControls
                                activeSurah={activeSurah}
                                activeAyat={activeAyat}
                                handleToFirstAyat={handleToFirstAyat}
                                handleToLastMemorizedAyat={handleToLastMemorizedAyat}
                                handlePreviousAyat={handlePreviousAyat}
                                handleNextAyat={handleNextAyat}
                                markAsMemorized={markAsMemorized}
                            />
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

export default App;
// src/components/SurahList/SurahList.jsx
import SurahItem from './SurahItem';

const SurahList = ({ surahs = [], activeSurah, handleSelectSurah }) => {
    return (
        <aside className="h-full bg-white p-4 md:p-6 border-r border-gray-200 overflow-y-auto shadow-inner flex flex-col">
            <div className="mb-4 md:mb-6 border-b pb-3">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Juz Amma</h2>
                <p className="text-xs md:text-sm text-gray-600">Daftar Surah (37 surah)</p>
            </div>
            <ul className="flex-1 overflow-y-auto">
                {surahs.map(surah => (
                    <SurahItem
                        key={surah.id}
                        surah={surah}
                        isActive={activeSurah?.id === surah.id}
                        onClick={() => handleSelectSurah(surah)}
                    />
                ))}
            </ul>
        </aside>
    );
};

export default SurahList;
// hooks/useHafalan.js

import { useState, useEffect } from "react";
import { fetchAyat } from '../utils/hafalanApi';

const initialSurahs = [
    { id: 78, name: "An-Naba'", ayatCount: 40 },
    { id: 79, name: "An-Nazi'at", ayatCount: 46 }
];

export default function useHafalan() {
    const [surahs, setSurahs] = useState(initialSurahs);
    const [activeSurah, setActiveSurah] = useState(null);
    const [activeAyat, setActiveAyat] = useState(null);
    const [ayatData, setAyatData] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState('id');

    // when spesific surah selected
    const handleSelectSurah = async (surah) => {
        // Ensure surah has all required properties
        const enrichedSurah = {
            ...surah,
            memorizedAyat: surah.memorizedAyat || [],
            isCompleted: surah.isCompleted || false,
            activeAyat: surah.activeAyat || 0
        };

        const ayatId = enrichedSurah.activeAyat > 0 ? enrichedSurah.activeAyat : 1;
        setActiveSurah(enrichedSurah);
        setActiveAyat(ayatId);

        const ayat = await fetchAyat(enrichedSurah.id, ayatId, selectedLanguage);
        setAyatData(ayat);
    };

    return {
        surahs,
        activeSurah,
        activeAyat,
        setActiveAyat,
        ayatData,
        handleSelectSurah
    }
}
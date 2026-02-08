// hooks/useHafalan.js

import { useState, useEffect } from "react";
import { fetchAyat } from '../utils/hafalanApi';

const initialSurahs = [
    { id: 78, name: "An-Naba'", ayatCount: 40 },
    { id: 79, name: "An-Nazi'at", ayatCount: 46 },
    { id: 80, name: "'Abasa", ayatCount: 42 },
    { id: 81, name: "At-Takwir", ayatCount: 29 },
    { id: 82, name: "Al-Infitar", ayatCount: 19 },
    { id: 83, name: "Al-Mutaffifin", ayatCount: 36 },
    { id: 84, name: "Al-Insyiqaq", ayatCount: 25 },
    { id: 85, name: "Al-Buruj", ayatCount: 22 },
    { id: 86, name: "At-Tariq", ayatCount: 17 },
    { id: 87, name: "Al-A'la", ayatCount: 19 },
    { id: 88, name: "Al-Ghasyiyah", ayatCount: 26 },
    { id: 89, name: "Al-Fajr", ayatCount: 30 },
    { id: 90, name: "Al-Balad", ayatCount: 20 },
    { id: 91, name: "Asy-Syams", ayatCount: 15 },
    { id: 92, name: "Al-Lail", ayatCount: 21 },
    { id: 93, name: "Ad-Duha", ayatCount: 11 },
    { id: 94, name: "Al-Insyirah", ayatCount: 8 }, // Lebih sering disebut Al-Insyirah di Indonesia dibanding Ash-Sharh
    { id: 95, name: "At-Tin", ayatCount: 8 },
    { id: 96, name: "Al-'Alaq", ayatCount: 19 },
    { id: 97, name: "Al-Qadr", ayatCount: 5 },
    { id: 98, name: "Al-Bayyinah", ayatCount: 8 },
    { id: 99, name: "Az-Zalzalah", ayatCount: 8 },
    { id: 100, name: "Al-'Adiyat", ayatCount: 11 },
    { id: 101, name: "Al-Qari'ah", ayatCount: 11 },
    { id: 102, name: "At-Takasur", ayatCount: 8 },
    { id: 103, name: "Al-'Asr", ayatCount: 3 },
    { id: 104, name: "Al-Humazah", ayatCount: 9 },
    { id: 105, name: "Al-Fil", ayatCount: 5 },
    { id: 106, name: "Quraisy", ayatCount: 4 },
    { id: 107, name: "Al-Ma'un", ayatCount: 7 },
    { id: 108, name: "Al-Kausar", ayatCount: 3 },
    { id: 109, name: "Al-Kafirun", ayatCount: 6 },
    { id: 110, name: "An-Nasr", ayatCount: 3 },
    { id: 111, name: "Al-Lahab", ayatCount: 5 }, // Nama populer di Indonesia
    { id: 112, name: "Al-Ikhlas", ayatCount: 4 },
    { id: 113, name: "Al-Falaq", ayatCount: 5 },
    { id: 114, name: "An-Nas", ayatCount: 6 }
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

    // markAsMemorized implementation
    const markAsMemorized = async () => {
        
        if (!activeSurah) return;

        const updatedSurahs = surahs.map(s => {
            if (s.id !== activeSurah.id) return s;
            const memorized = s.memorizedAyat ? [...s.memorizedAyat] : [];
            if (!memorized.includes(activeAyat)) {
                memorized.push(activeAyat);
            }

            const isCompleted = memorized.length === s.ayatCount;
            return {
                ...s,
                memorizedAyat: memorized,
                isCompleted,
                activeAyat: activeAyat,
            };
        });

        setSurahs(updatedSurahs);
        const updatedActiveSurah = updatedSurahs.find(s => s.id === activeSurah.id);
        setActiveSurah(updatedActiveSurah);
    }

    // go to next ayat
    const handleNextAyat = async () => {
        let surah = surahs.find(s => s.id === activeSurah.id);
        if (!surah) return;

        if (activeAyat < surah.ayatCount) {
            let nextAyat = activeAyat + 1;
            
            /*if (reviewMode) {

            }*/

            const newAyatData = await fetchAyat(activeSurah.id, nextAyat, selectedLanguage);
            setAyatData(newAyatData);
            setActiveAyat(nextAyat);
        }
    }

    // go to previous ayat
    const handlePreviousAyat = async () => {
        console.log('activeAyat ',activeAyat)
        if (activeAyat > 1) {
            let prevAyat = activeAyat - 1;

            const ayatData = await fetchAyat(activeSurah.id, prevAyat, selectedLanguage);
            setActiveAyat(prevAyat);
            setAyatData(ayatData);
        }
    }

    return {
        surahs,
        activeSurah,
        activeAyat,
        setActiveAyat,
        ayatData,
        handleSelectSurah,
        handlePreviousAyat,
        handleNextAyat,
        markAsMemorized
    }
}
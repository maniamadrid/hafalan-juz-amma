// utils/hafalanApi.js

/**
 * Normalized Ayat structure used throughout the app
 * @typedef {Object} NormalizedAyat
 * @property {number} number - Ayat number (global or specific ID)
 * @property {string} text - Arabic text
 * @property {string} translation - Translation text
 * @property {number} surah - Surah number
 * @property {number} numberInSurah - Ayat number within the surah
 * @property {string} [surahName] - Surah name (English)
 * @property {string} [surahNameArabic] - Surah name (Arabic)
 */

/**
 * Adapter function to normalize api.quran.com response to our internal format
 */
function normalizeQuranComResponse(verseData) {
    if (!verseData) return null;

    const translation = verseData.translations && verseData.translations.length > 0
        ? verseData.translations[0].text
        : '';

    // Parse verse_key "2:255" -> surah 2, ayat 255
    const [surahNum, ayatNum] = verseData.verse_key.split(':').map(Number);

    return {
        number: verseData.id, // Global verse ID
        text: verseData.text_uthmani, // Arabic text
        translation: translation, // Translation text
        surah: surahNum,
        numberInSurah: verseData.verse_number,
        // Optional fields if available or needed
        surahName: '', // Not returned by this endpoint
        surahNameArabic: '' // Not returned by this endpoint
    };
}

/**
 * Map language codes to api.quran.com resource IDs
 * Default to Indonesian (33) if not found
 */
function getTranslationResourceId(languageCode) {
    // Simple mapping, can be expanded
    if (languageCode && (languageCode.includes('en') || languageCode.includes('english'))) {
        return 131; // Saheeh International
    }
    // Default to Indonesian (Ministry of Religious Affairs)
    // ID 33 is "Indonesian Islamic Affairs Ministry"
    return 33;
}

/**
 * Fetch ayat data from API and return normalized format with translation
 * @param {number} surahId - Surah ID (1-114)
 * @param {number} ayatId - Ayat number within the surah
 * @param {string} selectedLanguage - Language code (e.g., 'id', 'en')
 * @returns {Promise<NormalizedAyat|null>} Normalized ayat data
 */
export async function fetchAyat(surahId, ayatId, selectedLanguage = 'id') {
    try {
        const translationId = getTranslationResourceId(selectedLanguage);

        // Fetch from api.quran.com v4
        // We request text_uthmani for Arabic and the specific translation
        const response = await fetch(
            `https://api.quran.com/api/v4/verses/by_key/${surahId}:${ayatId}?language=${selectedLanguage}&fields=text_uthmani&translations=${translationId}`
        );

        if (!response.ok) {
            throw new Error('Gagal mengambil data ayat');
        }

        const data = await response.json();

        if (!data || !data.verse) {
            return null;
        }

        return normalizeQuranComResponse(data.verse);
    } catch (error) {
        console.error('fetchAyat error:', error);
        return null;
    }
}

export async function handleSelectSurah(surahId, ayatId, selectedLanguage) {
    const ayat = await fetchAyat(surahId, ayatId, selectedLanguage);
    return ayat;
}
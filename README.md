# Hafalan Surah Pendek

A React-based web application designed to help users memorize short Surahs (Juz Amma) from the Quran.

## Features

- **Memorization Mode**: Toggle between showing and hiding Ayat text to test memory.
- **Progress Tracking**: Track memorized Ayats and completed Surahs.
- **Responsive Design**: Optimized for both desktop and mobile usage.
- **Bilingual Support**: Displays Arabic text and Indonesian translation.

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **API**: Al-Quran Cloud API

## Installation & Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd hafalan-surah
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

## Usage Guide

1. **Select a Surah**: Choose a Surah from the sidebar list (Juz Amma).
2. **Read and Memorize**: Read the Arabic text and translation.
3. **Test Yourself**: Click the "Sembunyikan Ayat" button to hide the text and test your memory.
4. **Track Progress**:
   - Use the "Next" and "Prev" buttons to navigate.
   - Click "Sudah Hafal" when you have memorized an Ayat.
   - Your progress is automatically saved.

## Project Structure

- `src/components`: UI components (SurahList, AyatDisplay, etc.)
- `src/hooks`: Custom React hooks (useHafalan)
- `src/utils`: Helper functions and API adapters

## Todo

- [ ] **Offline Capability**: Implement robust offline support using Service Workers or IndexedDB.

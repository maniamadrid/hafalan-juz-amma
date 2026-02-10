// Saving the progress
const saveProgress = (data) => {
  try {
    localStorage.setItem('hafalan-progress', JSON.stringify(data));
  } catch (error) {
    //console.error('Failed to save to localStorage:', error);
  }
};

const loadProgress = () => {
  try {
    const data = localStorage.getItem('hafalan-progress');
    return data ? JSON.parse(data) : null;
  } catch (error) {
    //console.error('Failed to load from localStorage:', error);
    return null;
  }
};

export { saveProgress, loadProgress };
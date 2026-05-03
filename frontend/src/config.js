// config.js - API configuration for different environments
const getApiUrl = () => {
  // Production (Vercel)
  if (process.env.NODE_ENV === 'production') {
    return ''; // Empty string means use relative path
  }
  // Development (local)
  return 'https://team-task-manager-seven-woad.vercel.app/';
};

const API_BASE_URL = getApiUrl();

export default API_BASE_URL;


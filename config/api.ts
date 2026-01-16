// API Configuration
// Central place for all API-related configuration

// Get API URL from environment variable
// In development: http:// Base API URL
// In production, this will be the URL of your deployed backend (e.g., on AWS App Runner)
// In development: http://localhost:4000
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

// CMS/Secondary API URL (if applicable)
export const CMS_API_URL = import.meta.env.VITE_CMS_API_URL || 'http://localhost:5000';

// API Endpoints
export const API_ENDPOINTS = {
  // Auth
  LOGIN: `${API_URL}/api/auth/login`,
  REGISTER: `${API_URL}/api/auth/register`,
  
  // Users
  USERS: `${API_URL}/api/users`,
  
  // Bids
  BIDS: `${API_URL}/api/bids`,
  BID_BY_ID: (id: number) => `${API_URL}/api/bids/${id}`,
  
  // Profile
  PROFILE: `${API_URL}/api/profile`,
  
  // Projects (Portfolio) - assuming this might be a separate service or CMS
  PROJECTS: `${CMS_API_URL}/api/projects`,
  AUDIT_REQUEST: `${CMS_API_URL}/api/audit-request`,
};

export default API_URL;

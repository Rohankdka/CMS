// src/api.js
import axios from 'axios';

const API_BASE_URL = 'https://apitest.lunarit.com.np/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

// UserLists API
export const fetchUserLists = () => api.get('/UserLists');
export const createUser = (data) => api.post('/UserLists', data);
export const updateUser = (id, data) => api.patch(`/UserLists/${id}`, data);
export const deleteUser = (id) => api.delete(`/UserLists/${id}`);

// Themes API
export const fetchThemes = () => api.get('/Themes');
export const createTheme = (data) => api.post('/Themes', data);
export const updateTheme = (id, data) => api.patch(`/Themes/${id}`, data);
export const deleteTheme = (id) => api.delete(`/Themes/${id}`);

// ThemeSettings API
export const fetchThemeSettings = () => api.get('/ThemeSettings');
export const createThemeSetting = (data) => api.post('/ThemeSettings', data);
export const updateThemeSetting = (id, data) => api.patch(`/ThemeSettings/${id}`, data);
export const deleteThemeSetting = (id) => api.delete(`/ThemeSettings/${id}`);

// CompanyInfoes API
export const fetchCompanyInfo = () => api.get('/CompanyInfoes');
export const createCompanyInfo = (data) => api.post('/CompanyInfoes', data);
export const updateCompanyInfo = (id, data) => api.patch(`/CompanyInfoes/${id}`, data);
export const deleteCompanyInfo = (id) => api.delete(`/CompanyInfoes/${id}`);

// WebHeading API
export const fetchWebHeading = () => api.get('/webHeading');
export const createWebHeading = (data) => api.post('/webHeading', data);
export const updateWebHeading = (id, data) => api.put(`/webHeading/${id}`, data);
export const deleteWebHeading = (id) => api.delete(`/webHeading/${id}`);

// SectionContents API
export const fetchSectionContents = () => api.get('/SectionContents/SectionContentList');
export const createSectionContent = (data) => api.post('/SectionContents', data);
export const updateSectionContent = (id, data) => api.patch(`/SectionContents/${id}`, data);
export const deleteSectionContent = (id) => api.delete(`/SectionContents/${id}`);

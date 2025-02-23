import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Update this if backend URL is different

export const registerUser = (userData) => axios.post(`${API_URL}/auth/register`, userData);
export const loginUser = (credentials) => axios.post(`${API_URL}/auth/login`, credentials);
export const fetchProjects = () => axios.get(`${API_URL}/projects`);
export const fetchProjectById = (id) => axios.get(`${API_URL}/projects/${id}`);

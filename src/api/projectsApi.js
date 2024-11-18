import axios from './axiosInstance';

export const fetchProjects = async (searchQuery) => {
  const response = await axios.get(`/projects?search=${searchQuery}`);
  return response.data;
};

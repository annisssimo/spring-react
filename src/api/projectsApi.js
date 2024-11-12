import axios from 'axios';

export const fetchProjects = async (searchQuery) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/projects?search=${searchQuery}`,
  );

  return response.data;
};

import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import styles from './ProjectsSection.module.css';
import { projects } from '../../data/projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import SearchInput from '../SearchInput/SearchInput';

function ProjectsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredObjects, setFilteredObjects] = useState(projects);

  const filterProjects = useCallback(async () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/projects?search=${searchQuery}`;

    try {
      const response = await axios.get(url);
      setFilteredObjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  }, [searchQuery]);

  useEffect(() => {
    const timer = setTimeout(() => filterProjects(), 300);
    return () => clearTimeout(timer);
  }, [searchQuery, filterProjects]);

  return (
    <section className={styles.projects}>
      <SearchInput onSearch={setSearchQuery} />
      <div className={styles.projectsContainer}>
        {filteredObjects.length === 0 && <div id="no-results">No results</div>}
        {filteredObjects.map((proj) => (
          <ProjectCard key={proj.title} project={proj} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;

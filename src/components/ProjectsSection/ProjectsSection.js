import { useState, useEffect, useCallback } from 'react';
import styles from './ProjectsSection.module.css';
import { projects } from '../../data/projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import SearchInput from '../SearchInput/SearchInput';

function ProjectsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredObjects, setFilteredObjects] = useState(projects);

  const filterProjects = useCallback(() => {
    const query = searchQuery.toLowerCase();
    setFilteredObjects(
      projects.filter(
        (proj) =>
          proj.title.toLowerCase().includes(query) ||
          proj.description.toLowerCase().includes(query)
      )
    );
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

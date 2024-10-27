import { useState, useEffect, useCallback } from 'react';
import styles from './ProjectsSection.module.css';
import { projects } from '../../data/projects';

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

  function handleInput(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <section className={styles.projects}>
      <div className={styles.inputSearch}>
        <label htmlFor="projectSearch">Type to search</label>
        <input
          id="projectSearch"
          className={styles.projectSearch}
          type="search"
          onChange={handleInput}
        />
      </div>
      <div className={styles.projectsContainer}>
        {filteredObjects.length === 0 && <div id="no-results">No results</div>}
        {filteredObjects.map((proj) => (
          <div key={proj.title} className={styles.projectsCard}>
            <div className={styles.projectCardImage}>
              <img src={proj.image} alt={proj.title} />
            </div>
            <div className={styles.projectsInfo}>
              <h3 className={styles.projectsTitle}>{proj.title}</h3>
              <p className={styles.projectsDescription}>{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;

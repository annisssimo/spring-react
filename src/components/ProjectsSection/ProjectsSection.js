import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchProjectsThunk } from '../../redux/slices/projectsSlice';
import styles from './ProjectsSection.module.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import SearchInput from '../SearchInput/SearchInput';

function ProjectsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useAppDispatch();
  const {
    data: filteredObjects,
    loading,
    error,
  } = useAppSelector((state) => state.projects);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(fetchProjectsThunk(searchQuery));
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, dispatch]);

  return (
    <section className={styles.projects}>
      <SearchInput onSearch={setSearchQuery} />
      <div className={styles.projectsContainer}>
        {loading && <div>Loading...</div>}
        {error && <div className={styles.error}>{error}</div>}
        {filteredObjects.length === 0 && !loading && !error && (
          <div id="no-results">No results</div>
        )}
        {filteredObjects.map((proj) => (
          <ProjectCard key={proj.title} project={proj} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;

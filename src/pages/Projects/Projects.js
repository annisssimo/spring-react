import { Navigate } from 'react-router-dom';

import './Projects.module.css';
import Header from '../../components/Header/Header';
import IntroSection from '../../components/IntroSection/IntroSection';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';

function Projects() {
  if (!localStorage.getItem('accessToken')) {
    console.warn('No access token found, redirecting to login...');
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <Header />
      <main>
        <IntroSection />
        <ProjectsSection />
      </main>
    </div>
  );
}

export default Projects;

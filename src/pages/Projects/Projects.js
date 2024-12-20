import './Projects.module.css';
import Header from '../../components/Header/Header';
import IntroSection from '../../components/IntroSection/IntroSection';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';

function Projects() {
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

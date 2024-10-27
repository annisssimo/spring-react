import styles from './ProjectCard.module.css';

function ProjectCard({ project }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCardImage}>
        <img src={project.image} alt={project.title} />
      </div>
      <div className={styles.projectsInfo}>
        <h3 className={styles.projectsTitle}>{project.title}</h3>
        <p className={styles.projectsDescription}>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;

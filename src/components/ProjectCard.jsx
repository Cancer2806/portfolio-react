// Wrapper around Project Cards

import styles from './ProjectCard.module.css';

function ProjectCard(props) {
// will use props.children to display individual project cards
  
  return (
    <div className={styles.tba}>
      {props.children}
    </div>
  )
}

export default ProjectCard
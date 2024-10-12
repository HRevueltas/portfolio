// ProjectCard.jsx
import { useAspectRatio } from '../hooks/useAspectRatio';
import styles from './projectCard.module.css';

export const ProjectCard = ({ url, id, date, title, description, preview }) => {
    const { ratio, mediaRef, isImage } = useAspectRatio(url);
    return (
        <div className={styles.cardContainer}>
            <div style={{ aspectRatio: `${ratio === null ? 'auto 1.9199 /1' : ratio} ` }} className={styles.imageContainer}>
                {isImage ?
                    <img ref={mediaRef} loading='lazy' className={styles.cardImage} src={url} alt="" /> :
                    <video ref={mediaRef} className={styles.cardImage} autoPlay loop muted playsInline>
                        <source src={url} type="video/mp4" />
                        <span>Your browser does not support the video tag.</span>
                    </video>
                }
            </div>

            <div className={
                preview ? styles.cardContent : styles.cardContentNoPreview

            }>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDate}>{date}</p>
                {/* <p className={styles.cardDescription}>{description}</p> */}
            </div>

            {
                preview && <div className={styles.fakeBtn}>
                    <a className={styles.cardLink} href={url ? url : '#'} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>

            }
            {/* <div className={styles.fakeBtn}>
                <a className={styles.cardLink} href={url ? url : '#'} target="_blank" rel="noopener noreferrer">View Project</a>
            </div> */}
        </div>
    )
}
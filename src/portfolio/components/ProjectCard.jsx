import { AspectRatio } from '@radix-ui/themes'
import styles from './projectCard.module.css'
import { useEffect, useRef, useState } from 'react';
import { cardInfo } from '../helpers/cardinfo';



export const ProjectCard = ({ url, id, date, title, description, }) => {

    const isImage = url && url.match(/\.(jpeg|jpg|gif|png|webp)$/) != null;

    const [ratio, setRatio] = useState(null)

    const imageRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const handleLoad = () => {
            if (isImage) {
                console.log(imageRef.current.offsetWidth)
                setRatio(imageRef.current.offsetWidth / imageRef.current.offsetHeight)
            } else {
                console.log(videoRef.current.offsetWidth)
                setRatio(videoRef.current.offsetWidth / videoRef.current.offsetHeight)
            }
        }

        if (isImage) {
            imageRef.current.addEventListener('load', handleLoad);
        } else {
            videoRef.current.addEventListener('load', handleLoad);
        }

        return () => {
            if (isImage) {
                imageRef.current.removeEventListener('load', handleLoad);
            } else {
                videoRef.current.removeEventListener('load', handleLoad);
            }
        }
    }, [isImage]);
    console.log(ratio);
    return (
    <div className={styles.cardContainer}>

        {isImage ?
            <div style={{ aspectRatio: ` ${ratio}/ '1'` }} className={styles.imageContainer}>
                {/* <div style={{ aspectRatio: ` ${(ratio === null) ? '16' : ratio}/${(ratio === null) ? '9' : '1'}` }} className={styles.imageContainer}> */}

                <img ref={imageRef} loading='lazy' className={styles.cardImage} src={url} alt="" />
            </div>
            : <div style={{ aspectRatio: `${ratio}/1` }} className={styles.imageContainer}>
                <video ref={videoRef} className={styles.cardVideo} autoPlay loop muted playsInline> <source src={url} type="video/mp4" />
                    <span>
                        Your browser does not support the video tag.
                    </span>
                </video>
            </div>


        }

        <div className={styles.cardContent}>
            <h3 className={styles.cardTitle} >{title}</h3>
            <p className={styles.cardDescription} >{description}</p>
            <a className={styles.cardLink} href={url ? url : '#'} target="_blank" > View Project</a>


        </div>
    </div>

    )
}

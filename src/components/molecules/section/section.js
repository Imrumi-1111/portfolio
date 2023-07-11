import { Fragment } from 'react'
import styles from './section.module.css'

export default function Section() {
    return (
        <Fragment>
            <div className={styles.section}>
                <div className={styles.skill}>
                   <h3> About </h3>
                
                </div>
                <div className={styles.list}>
                    <div className={styles.list2}>
                        <p><i><b>Skills</b></i></p>
                        <li><b>CSS</b></li>
                        <li><b>HTML</b></li>
                        <li><b>REACT JS</b></li>
                        <li><b>REDUX</b></li>
                        <li><b>MUI LIBRARY</b></li>
                        <li><b>GIT</b></li>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}
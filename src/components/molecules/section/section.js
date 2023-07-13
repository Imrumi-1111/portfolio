import { Fragment } from 'react'
import styles from './section.module.css'
import Navbar from '../../atoms/navbar/navbar'
import Footer from '../../atoms/footer/footer'
import { Link } from 'react-router-dom'

export default function Section() {
    function handleDownload() {
        const link = document.createElement('a')
        link.href = '/https://drive.google.com/drive/folders/1K-9lfjL0E769LDtHIPnXu7pNbSpc-D0W'
        link.download = 'Resume finale.pdf'
        link.click()
    }
    return (
        <Fragment>
            <Navbar />
            <div className={styles.section}>

                <div className={styles.skill}>
                    <div className={styles.para}><font align="justify">Hello , My name is Upasana Chakraborty.
                        I am from Kolkata,West Bengal.
                    I want to pursue my career as a <b>Frontend Developer</b>.
                    </font>
                    </div>
                   
                    

                </div>
                <div className={styles.list}>
                    
                <div className={styles.head}><h2>My Skills </h2></div>
               
                    <div className={styles.list2}>
                        <li><b>CSS</b></li>
                        <li><b>HTML</b></li>
                        <li><b>JAVASCRIPT</b></li>
                        <li><b>REACT JS</b></li>
                        <li><b>REDUX</b></li>
                        <li><b>MUI LIBRARY</b></li>
                        <li><b>GIT</b></li>
                        <li><b>BASIC DSA</b></li>
                    </div>
                   
                </div>
                <button onClick={handleDownload} className={styles.talk}>DownLoad Resume</button>
                <font align="justify">If you want to contact me <Link to="/contact">click me</Link>
                </font>
            </div>
            <Footer />
        </Fragment>
    )
}
import { Fragment } from 'react'
import styles from './portFolio.module.css'
import Navbar from '../../atoms/navbar/navbar'
import Main from '../../molecules/main/main'
//import Section from '../../molecules/section/section'
//import Project from '../../molecules/projects/projects'
//import Contact from '../../molecules/contact/contact'
import Footer from '../../atoms/footer/footer'

export default function PortFolio() {
    return (
        <Fragment>
            <Navbar />
            <div className={styles.body1}>
            
                <div className={styles.head}>
                    
                    <Main />
                </div>
                {/* <hr width="100%"/>
                <div className={styles.Section}>
                    <Section />
                </div>
                {/* <hr width="100%"/> */}
                {/* <div className={styles.Project}>
                    <Project />
                </div> */}
                {/* <hr width="100%"/> */}
                {/* <div>
                    <Contact/>
                </div> */}
                <div className={styles.footer}>
                    <Footer/>
                </div> 
            </div>
        </Fragment>
    )
}
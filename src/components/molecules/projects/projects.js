import { Fragment, useState } from 'react'
import styles from './projects.module.css'

export default function Project() {
    const [show, setShow] = useState(false)
    function handleClick() {
        setShow(!show)
    }
    function handleTwitter(){
        window.location.href ="https://twitterfinal.vercel.app/login"
    }
    function handleGoogle(){
        window.location.href ="https://google-docs-ashen.vercel.app/home"
    }
    function handleKanban(){
        window.location.href ="https://kanban-project-xg8i.vercel.app/"
    }
    function handleGym(){
        window.location.href ="https://gym-website-tymh.vercel.app/"
    }
    function handleBakes$Flakes(){
        window.location.href ="https://bakes-flakes.vercel.app/"
    }
    function handleBMICalculator(){
        window.location.href ="https://calculate-bmi-rouge.vercel.app/"
    }
    return (
        <Fragment>
            <div className={styles.Project} onClick={handleClick}>
               <div className={styles.head}><h3>My Projects</h3></div> 
            </div>
            
                <div className={styles.title1}>
                    <div className={styles.title} onClick={handleTwitter}><p>Twitter</p></div>
                    <div className={styles.title} onClick={handleGoogle}><p>Google Docs</p></div>
                    <div className={styles.title} onClick={handleKanban}><p>Kanban Board</p></div>
                    <div className={styles.title} onClick={handleGym}><p>Gym-Website</p></div>
                    <div className={styles.title} onClick={handleBakes$Flakes}><p>Bakes&Flakes</p></div>
                    <div className={styles.title} onClick={handleBMICalculator}><p>BMI Calculator</p></div>
                </div>

         

        </Fragment>
    )
}
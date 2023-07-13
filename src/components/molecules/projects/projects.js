import { Fragment, useState } from 'react'
import styles from './projects.module.css'
import Navbar from '../../atoms/navbar/navbar'
import Footer from '../../atoms/footer/footer'

export default function Project() {
    const [show, setShow] = useState(false)
    function handleClick() {
        setShow(!show)
    }
    function handleTwitter() {
        window.location.href = "https://twitterfinal.vercel.app/login"
    }
    function handleGoogle() {
        window.location.href = "https://google-docs-ashen.vercel.app/home"
    }
    function handleKanban() {
        window.location.href = "https://kanban-project-xg8i.vercel.app/"
    }
    function handleGym() {
        window.location.href = "https://gym-website-tymh.vercel.app/"
    }
    function handleBakes$Flakes() {
        window.location.href = "https://bakes-flakes.vercel.app/"
    }
    function handleBMICalculator() {
        window.location.href = "https://calculate-bmi-rouge.vercel.app/"
    }
    return (
        <Fragment>
            <Navbar/>
            <div className={styles.Project} onClick={handleClick}>
                <div className={styles.head}><h3>My Projects</h3></div>
            <div className={styles.title1}>
                <div className={styles.title} onClick={handleTwitter}><p>Twitter</p>
                    <div className={styles.imge}>
                        <img src="/images/twitter.png" alt="img"
                            width="110rem"
                            height="80rem"
                        />
                         <font align="center">Twitter-clone using React js, MUI, React-icons, React-Router-Dom</font>
                    </div>
                </div>
                <div className={styles.title} onClick={handleGoogle}><p>Google Docs</p>
                    <div className={styles.imge}>
                        <img src="/images/googledoc.png" alt="img"
                            width="110rem"
                            height="80rem"
                        />
                         <font align="left">Google Docs-clone used React js, React-Quill,MUI, React-icons, React-Router-Dom</font>
                    </div>
                </div>
                <div className={styles.title} onClick={handleKanban}><p>Kanban Board</p>
                    <div className={styles.imge}>
                        <img src="/images/kanban.png" alt="img"
                            width="110rem"
                            height="80rem"
                        />
                         <font align="justify">Kanban Board used ReactJs, MUI library, Recoil, 
                            Sweet Alert, React Icons, Router-Dom, 
                            React-Beautiful dnd, React moment, React popup.</font>
                    </div>
                </div>
                </div>
                <div className={styles.title1}>
                    <div className={styles.title} onClick={handleGym}><p>Gym-Website</p>
                        <div className={styles.imge}>
                            <img src="/images/gymwebsite.png" alt="img"
                                width="110rem"
                                height="80rem"
                            />
                             <font align="left">Gym Website used Reactjs, Router-dom,MUI,React youtube,React wavify library.</font>
                        </div>
                    </div>
                    <div className={styles.title} onClick={handleBakes$Flakes}><p>Bakes&Flakes</p>
                        <div className={styles.imge}>
                            <img src="/images/bakesandflakes.png" alt="img"
                                width="110rem"
                                height="80rem"
                            />
                             <font align="center">Bakes$Flakes, it is an e-commerce website used Reactjs, Router-dom.</font>
                        </div>
                    </div>
                    <div className={styles.title} onClick={handleBMICalculator}><p>BMI Calculator</p>
                        <div className={styles.imge}>
                            <img src="/images/bmical.png" alt="img"
                                width="110rem"
                                height="80rem"
                            />
                            <font align="justify">It is an e-commerce website which will help you to calculate  BMI. 
                                Used Reactjs.</font>
                        </div>
                    </div>                  
                </div>
                </div>
                <Footer/>
        </Fragment>
    )
}
import { Fragment } from 'react'
import styles from './main.module.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export default function Main() {
    const navigate = useNavigate()

    function handleGitHub() {
        window.location.href = 'https://github.com/Imrumi-1111'
    }
    function handleLinkedin() {
        window.location.href = 'https://www.linkedin.com/in/upasana-chakraborty-34822a1b4/'
    }
    function handleDownload() {
        const link = document.createElement('a')
        link.href = '/https://drive.google.com/drive/folders/1K-9lfjL0E769LDtHIPnXu7pNbSpc-D0W'
        link.download = 'Resume finale.pdf'
        link.click()
    }
    return (
        <Fragment>
            <div className={styles.main}>
                <div className={styles.main2}>
                    <div className={styles.main3}>
                        <p> Hey There!</p>
                        <h2>I am Upasana Chakraborty</h2>
                        <p>Frontend Developer</p>
                        <div className={styles.btn}>
                            <button onClick={handleDownload} className={styles.download}>DownLoad Resume</button>
                            <button className={styles.talk}>Let's Chat</button>
                        </div>
                        <AiFillGithub onClick={handleGitHub} />
                        <AiFillLinkedin onClick={handleLinkedin} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
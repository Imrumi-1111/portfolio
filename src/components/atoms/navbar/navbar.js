import { Fragment, useState } from 'react'
import styles from './navbar.module.css'
import { RxCross2 } from 'react-icons/rx'
import { Link, Element, animateScroll as scroll } from 'react-scroll';

//import { MenuBookOutlined } from '@mui/icons-material'
//import Main from '../../molecules/main/main'


export default function Navbar() {
    //const navigate = useNavigate()
    const [active, setActive] = useState(false)
    function showMenu() {
        setActive(!active)
    }
// function navigateAbout(){
// navigate('/about')
// }
    return (
        <Fragment>
            <div className={styles.Navbar}>
               
                <div className={styles.li}>


                    <RxCross2 className={styles.RxCross2} onClick={showMenu} />
                    <div className={styles.link}>
                        <Link to="/" style={{ textDecoration: "none" }}><b>Home</b></Link>
                        <Link to="about" smooth={true} duration={500} style={{ textDecoration: "none" }}><b>About</b></Link>
                        <Link to="/" style={{ textDecoration: "none" }}><b>Projects</b></Link>
                        <Link to="/" style={{ textDecoration: "none" }}><b>Contact</b></Link>
                    </div>

                </div>
                <div className={styles.Menu}>
                    {/* <MenuBookOutlined onClick={showMenu} className={styles.MenuIcon} /> */}

                </div>
            </div>
            {/* <div className={styles.main}> <Main /></div> */}
            
        </Fragment>
    )
}
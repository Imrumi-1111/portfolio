import { Fragment } from 'react'
import styles from './navbar.module.css'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom';

//import { MenuBookOutlined } from '@mui/icons-material'
//import Main from '../../molecules/main/main'


export default function Navbar() {
    //const navigate = useNavigate()
    // const [active, setActive] = useState("#home")
    // function showMenu() {
    //     setActive(!active)
    // }
// function navigateAbout(){
// navigate('/about')
// }
    return (
        <Fragment>
            <div className={styles.Navbar}>
               
                <div className={styles.li}>


                    <RxCross2 className={styles.RxCross2} />
                    <div className={styles.link}>
                        <Link to="/" style={{ textDecoration: "none" }}><b>Home</b></Link>
                        <Link to="/about" smooth={true} duration={500} style={{ textDecoration: "none" }}><b>About</b></Link>
                        <Link to="/projects" style={{ textDecoration: "none" }}><b>Projects</b></Link>
                        <Link to="/contact" style={{ textDecoration: "none" }}><b>Contact</b></Link>
                    </div>

                </div>
                <div className={styles.Menu}>
                    {/* <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
 */}

                </div>
            </div>
            {/* <div className={styles.main}> <Main /></div> */}
            
        </Fragment>
    )
}